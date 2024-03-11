const fastJson = require('fast-json-stringify');

const stringifyTransaction = fastJson({
  title: 'transaction',
  type: 'object',
  properties: {
    saldo: {
      type: 'number',
    },
    limite: {
      type: 'number',
    },
  },
});

const stringifyExtract = fastJson({
  title: 'extract',
  type: 'object',
  properties: {
    saldo: {
      type: 'object',
      properties: {
        total: {
          type: 'number',
        },
        data_extrato: {
          type: 'string',
        },
        limite: {
          type: 'number',
        },
      },
    },
    ultimas_transacoes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          valor: {
            type: 'number',
          },
          tipo: {
            type: 'string',
          },
          descricao: {
            type: 'string',
          },
          realizada_em: {
            type: 'string',
          },
        },
      },
    },
  },
});

module.exports = { stringifyExtract, stringifyTransaction };
