const sql = require('./db');

const NodeCache = require('node-cache');
const cache = new NodeCache();

const credit = async (id, valor, descricao) => {
  const [{ novo_saldo: saldo, possui_erro }] =
    await sql`SELECT * FROM creditar(${id}, ${valor}, ${descricao})`;

  return { saldo, error: possui_erro };
};

const debit = async (id, valor, descricao) => {
  const [{ novo_saldo: saldo, possui_erro }] =
    await sql`SELECT * FROM debitar(${id}, ${valor}, ${descricao})`;

  return { saldo, error: possui_erro };
};

const getLimit = async (id) => {
  const cachedLimit = cache.get(`limit:${id}`);
  if (cachedLimit) {
    return cachedLimit;
  }

  const [{ limite: limit }] =
    await sql`SELECT limite FROM clientes WHERE id = ${id} LIMIT 1`;

  cache.set(`limit:${id}`, limit);

  return limit;
};

const getExtract = async (id) => {
  const [saldo] = await sql`
  SELECT
    valor as total,
    to_char(NOW(), 'YYYY-MM-DD"T"HH24:MI:US"Z"') as data_extrato,
    limite
  FROM
    clientes
  LEFT JOIN saldos s on clientes.id = s.cliente_id
  WHERE cliente_id = ${id}
  `;
  const ultimas_transacoes = await sql`
  SELECT valor, tipo, descricao, to_char(realizada_em, 'YYYY-MM-DD"T"HH24:MI:US"Z"') as realizada_em
  FROM transacoes 
  WHERE cliente_id = ${id} 
  ORDER BY realizada_em DESC
  LIMIT 10
  `;

  return { saldo, ultimas_transacoes };
};

const userExists = async (id) => {
  const cachedExists = cache.get(`exists:${id}`);
  if (cachedExists === false || cachedExists === true) {
    return cachedExists;
  }

  const [{ exists }] =
    await sql`SELECT EXISTS(SELECT 1 FROM clientes WHERE id=${id}) LIMIT 1`;

  cache.set(`exists:${id}`, exists);

  return exists;
};

module.exports = { credit, debit, getExtract, getLimit, userExists };
