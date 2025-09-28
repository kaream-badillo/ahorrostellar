// Configuración de Web3 para Stellar y Soroban
import { Server, Networks, Asset } from 'stellar-sdk';
import { STELLAR_CONFIG, SUPPORTED_ASSETS } from './constants';

// Configuración del servidor Stellar
export const getStellarServer = (network: 'testnet' | 'mainnet' = 'testnet') => {
  const rpcUrl = network === 'testnet' 
    ? STELLAR_CONFIG.RPC_URL.TESTNET 
    : STELLAR_CONFIG.RPC_URL.MAINNET;
  
  return new Server(rpcUrl);
};

// Configuración de la red
export const getNetworkConfig = (network: 'testnet' | 'mainnet' = 'testnet') => {
  return {
    networkPassphrase: network === 'testnet' 
      ? STELLAR_CONFIG.PASSPHRASE.TESTNET 
      : STELLAR_CONFIG.PASSPHRASE.MAINNET,
    horizonUrl: network === 'testnet' 
      ? 'https://horizon-testnet.stellar.org' 
      : 'https://horizon.stellar.org',
    rpcUrl: network === 'testnet' 
      ? STELLAR_CONFIG.RPC_URL.TESTNET 
      : STELLAR_CONFIG.RPC_URL.MAINNET,
  };
};

// Crear assets
export const createAsset = (code: string, issuer?: string) => {
  if (code === 'XLM' || issuer === 'native') {
    return Asset.native();
  }
  
  if (!issuer) {
    throw new Error(`Issuer required for asset ${code}`);
  }
  
  return new Asset(code, issuer);
};

// Obtener asset por código
export const getAssetByCode = (code: string) => {
  const asset = SUPPORTED_ASSETS[code as keyof typeof SUPPORTED_ASSETS];
  if (!asset) {
    throw new Error(`Unsupported asset: ${code}`);
  }
  
  return createAsset(asset.code, asset.issuer === 'native' ? undefined : asset.issuer);
};

// Utilidades para formateo de números
export const formatAmount = (amount: string | number, decimals: number = 7) => {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return (num / Math.pow(10, decimals)).toFixed(2);
};

export const parseAmount = (amount: string | number, decimals: number = 7) => {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return Math.floor(num * Math.pow(10, decimals)).toString();
};

// Utilidades para validación
export const isValidPublicKey = (publicKey: string): boolean => {
  return /^[G-ZA-Z0-9]{56}$/.test(publicKey);
};

export const isValidSecretKey = (secretKey: string): boolean => {
  return /^[S-ZA-Z0-9]{56}$/.test(secretKey);
};

// Utilidades para transacciones
export const getTransactionHash = (txResult: any): string => {
  return txResult.hash || txResult.id || '';
};

export const isTransactionSuccess = (txResult: any): boolean => {
  return txResult.successful === true || txResult.status === 'success';
};

// Configuración de Freighter
export const FREIGHTER_CONFIG = {
  NETWORK: 'testnet',
  ASSETS: Object.keys(SUPPORTED_ASSETS),
  TIMEOUT: 30000, // 30 segundos
};

// Utilidades para debugging
export const logTransaction = (txResult: any, label: string = 'Transaction') => {
  if (process.env.NODE_ENV === 'development') {
    console.group(`${label} Result`);
    console.log('Hash:', getTransactionHash(txResult));
    console.log('Success:', isTransactionSuccess(txResult));
    console.log('Full result:', txResult);
    console.groupEnd();
  }
};

// Configuración de errores
export const STELLAR_ERRORS = {
  INSUFFICIENT_BALANCE: 'insufficient_balance',
  INVALID_AMOUNT: 'invalid_amount',
  NETWORK_ERROR: 'network_error',
  TIMEOUT: 'timeout',
  USER_REJECTED: 'user_rejected',
} as const;

// Manejo de errores de Stellar
export const handleStellarError = (error: any) => {
  console.error('Stellar Error:', error);
  
  if (error.code === STELLAR_ERRORS.INSUFFICIENT_BALANCE) {
    return 'Balance insuficiente';
  }
  
  if (error.code === STELLAR_ERRORS.INVALID_AMOUNT) {
    return 'Cantidad inválida';
  }
  
  if (error.code === STELLAR_ERRORS.NETWORK_ERROR) {
    return 'Error de red. Intenta nuevamente.';
  }
  
  if (error.code === STELLAR_ERRORS.TIMEOUT) {
    return 'Tiempo de espera agotado';
  }
  
  if (error.code === STELLAR_ERRORS.USER_REJECTED) {
    return 'Transacción cancelada por el usuario';
  }
  
  return error.message || 'Error desconocido';
};
