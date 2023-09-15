let TokenAddress;
const DAOName = `New${Math.floor(+new Date() / 1000)}DAO`;

module.exports = {
  setTokenAddress: (address) => {
    TokenAddress = address;
  },
  getTokenAddress: () => {
    return TokenAddress;
  },
  DAOName,
};