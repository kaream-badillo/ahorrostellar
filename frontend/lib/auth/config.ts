// Stellar configuration for AhorroStellar
export interface StellarConfig {
  TESTNET_URL: string;
  MAINNET_URL: string;
  REPUTATION_TOKEN: {
    CODE: string;
    ISSUER: string;
  };
}

export const getStellarConfig = (): StellarConfig => {
  return {
    TESTNET_URL: 'https://horizon-testnet.stellar.org',
    MAINNET_URL: 'https://horizon.stellar.org',
    REPUTATION_TOKEN: {
      CODE: 'REP',
      ISSUER: 'GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX'
    }
  };
};
