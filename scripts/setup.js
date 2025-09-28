#!/usr/bin/env node

/**
 * Setup script for AhorroStellar
 * Sets up the entire project structure and dependencies
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Setting up AhorroStellar Project...');

// Check if we're in the right directory
if (!fs.existsSync('frontend') || !fs.existsSync('contracts')) {
  console.error('❌ Please run this script from the project root directory');
  process.exit(1);
}

try {
  // Setup Frontend
  console.log('📦 Setting up Frontend...');
  process.chdir('frontend');
  execSync('npm install', { stdio: 'inherit' });
  process.chdir('..');

  // Create .env.local if it doesn't exist
  if (!fs.existsSync('frontend/.env.local')) {
    console.log('📝 Creating .env.local template...');
    const envTemplate = `# AhorroStellar Environment Variables
# 🔴 Replace with your values

# Stellar Testnet Configuration
NEXT_PUBLIC_READONLY_PUBLIC_KEY=TODO_PUBLIC_KEY
NEXT_PUBLIC_SOROBAN_RPC_PRIMARY=https://soroban-testnet.stellar.org
NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015

# Reflector Oracle Contracts (Testnet)
NEXT_PUBLIC_REFLECTOR_USDC_PRICE=CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP
NEXT_PUBLIC_REFLECTOR_FX_RATES=CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W
NEXT_PUBLIC_REFLECTOR_CEX_DEX=CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63
`;
    fs.writeFileSync('frontend/.env.local', envTemplate);
  }

  console.log('✅ Setup completed successfully!');
  console.log('📝 Next steps:');
  console.log('   1. Edit frontend/.env.local with your values');
  console.log('   2. Run: node scripts/dev-frontend.js');
  console.log('   3. Open: http://localhost:3000');

} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
