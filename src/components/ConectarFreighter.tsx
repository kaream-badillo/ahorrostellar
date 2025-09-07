'use client'
import { isConnected, setAllowed, getAddress, requestAccess } from '@stellar/freighter-api'

export async function conectarFreighter(): Promise<string> {
  try {
    console.log('🔍 Checking Freighter connection...');
    
    // Check if Freighter is connected
    const conn = await isConnected()
    console.log('Connection status:', conn);
    
    if (!conn.isConnected) {
      throw new Error('Freighter no detectada. Asegúrate de que la extensión esté instalada y desbloqueada.');
    }

    // Request permission
    const perm = await setAllowed()
    console.log('Permission status:', perm);
    
    if (!perm.isAllowed) {
      throw new Error('Permiso denegado. Acepta el permiso en Freighter para continuar.');
    }

    // Try to get address directly
    const r1 = await getAddress()
    console.log('Get address result:', r1);
    
    if (r1.address) {
      console.log('✅ Address received:', r1.address);
      return r1.address;
    }

    // If no address, request access
    const r2 = await requestAccess()
    console.log('Request access result:', r2);
    
    if (r2.error) {
      throw new Error(`Error requesting access: ${r2.error}`);
    }
    
    if (!r2.address) {
      throw new Error('Sin address. No se pudo obtener la dirección de la wallet.');
    }
    
    console.log('✅ Address received via requestAccess:', r2.address);
    return r2.address;
    
  } catch (error) {
    console.error('❌ Error connecting to Freighter:', error);
    throw error;
  }
}
