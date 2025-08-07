// Stellar Configuration for AhorroStellar
// Testnet settings for development

export const STELLAR_CONFIG = {
  // Testnet URLs
  TESTNET_URL: 'https://horizon-testnet.stellar.org',
  LABORATORY_URL: 'https://laboratory.stellar.org/#account-creator?network=test',
  
  // Network settings
  NETWORK_PASSPHRASE: 'Test SDF Network ; September 2015',
  
  // Asset configuration
  REPUTATION_TOKEN: {
    CODE: 'REPUTATION',
    ISSUER: 'GBZXN7PIRZGNMHGA7JGK7MWTIYZQJXFSN5NZ65NPLII55BR3SZ6JFQSC',
    DESCRIPTION: 'Reputation tokens for AhorroStellar platform'
  },
  
  // Test accounts (for development)
  TEST_ACCOUNTS: {
    REPUTATION_ISSUER: 'GBZXN7PIRZGNMHGA7JGK7MWTIYZQJXFSN5NZ65NPLII55BR3SZ6JFQSC',
    // Add more test accounts as needed
  }
};

// Environment variables (fallback to testnet defaults)
export const getStellarConfig = () => {
  return {
    ...STELLAR_CONFIG,
    REPUTATION_TOKEN: {
      ...STELLAR_CONFIG.REPUTATION_TOKEN,
      ISSUER: process.env.STELLAR_REPUTATION_ISSUER || STELLAR_CONFIG.REPUTATION_TOKEN.ISSUER,
    }
  };
};
