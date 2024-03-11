const sql = require('./db');
const HyperExpress = require('hyper-express');
const {
  isTransactionParamsValid,
  isExtractParamsValid,
} = require('./validate');
const {
  credit,
  debit,
  userExists,
  getExtract,
  getLimit,
} = require('./statements');
const { stringifyTransaction, stringifyExtract } = require('./schemas');
const webserver = new HyperExpress.Server();

webserver.post('/clientes/:id/transacoes', async (request, response) => {
  const id = Number(request.path_parameters.id);
  const body = await request.json();
  const { valor, tipo, descricao } = body || {};

  if (!isTransactionParamsValid(id, valor, tipo, descricao)) {
    response.status(422).send();
    return;
  }

  if (!(await userExists(id))) {
    response.status(404).send();
    return;
  }

  const { saldo, error } =
    tipo === 'c'
      ? await credit(id, valor, descricao)
      : await debit(id, valor, descricao);

  if (error) {
    response.status(422).send();
    return;
  }

  const limite = await getLimit(id);

  response.type('application/json');
  response.send(stringifyTransaction({ saldo, limite }));
});

webserver.get('/clientes/:id/extrato', async (request, response) => {
  const id = Number(request.path_parameters.id);

  if (!isExtractParamsValid(id)) {
    response.status(400);
    return;
  }

  if (!(await userExists(id))) {
    response.status(404).send();
    return;
  }

  const result = await getExtract(id);

  response.type('application/json');
  response.send(stringifyExtract(result));
});

webserver
  .listen(process.env.PORT || 3000)
  .then((socket) => console.log(`Webserver started on port ${webserver.port}`))
  .catch((error) => {
    console.error(`Failed to start webserver on port ${webserver.port}`);
    console.error(error);
  });

import('prexit').then(({ default: prexit }) => {
  prexit(async () => {
    console.log('Exiting...');
    webserver.close();
    await sql.end({ timeout: 5 });
  });
});
