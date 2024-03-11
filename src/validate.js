const isTransactionParamsValid = (id, valor, tipo, descricao) => {
  if (
    !Number.isInteger(id) ||
    !Number.isInteger(valor) ||
    valor <= 0 ||
    (tipo !== 'd' && tipo !== 'c') ||
    typeof descricao !== 'string' ||
    descricao?.length < 1 ||
    descricao?.length > 10
  ) {
    return false;
  }

  return true;
};

const isExtractParamsValid = (id) => {
  return Number.isInteger(id);
};

module.exports = { isExtractParamsValid, isTransactionParamsValid };
