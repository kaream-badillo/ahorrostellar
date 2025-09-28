// src/lib/friendbot.ts
// Friendbot utility for testnet account funding
import { rpc } from '@stellar/stellar-sdk';

const RPC = process.env.NEXT_PUBLIC_SOROBAN_RPC_PRIMARY || 'https://soroban-testnet.stellar.org';
const server = new rpc.Server(RPC, { allowHttp: true });

export async function ensureFunded(publicKey: string) {
  try {
    // Try to get account - if it exists, we're good
    await server.getAccount(publicKey);
    console.log('✅ Account exists and is funded');
    return true;
  } catch (error) {
    console.log('⚠️ Account not found, requesting airdrop from Friendbot...');
    try {
      // Request airdrop from Friendbot (testnet only)
      await server.requestAirdrop(publicKey);
      console.log('✅ Airdrop successful');
      return true;
    } catch (airdropError) {
      console.error('❌ Airdrop failed:', airdropError);
      return false;
    }
  }
}
