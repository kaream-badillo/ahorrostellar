'use client'
import freighter from '@stellar/freighter-api'

export async function conectarFreighter(): Promise<string> {
  try {
    console.log('🔍 Checking Freighter connection...');
    
    // Check if Freighter is connected
    const c = await freighter.isConnected();
    console.log('Connection status:', c);
    
    if (!c.isConnected) {
      throw new Error('Freighter no detectada');
    }

    // Request permission
    const p = await freighter.setAllowed();
    console.log('Permission status:', p);
    
    if (!p.isAllowed) {
      throw new Error('Permiso denegado');
    }

    // Try to get address directly
    const a1 = await freighter.getAddress();
    console.log('Get address result:', a1);
    
    if (a1.address) {
      console.log('✅ Address received:', a1.address);
      return a1.address;
    }

    // If no address, request access
    const a2 = await freighter.requestAccess();
    console.log('Request access result:', a2);
    
    if (a2.error || !a2.address) {
      throw new Error(a2.error || 'Sin address');
    }
    
    console.log('✅ Address received via requestAccess:', a2.address);
    return a2.address;
    
  } catch (error) {
    console.error('❌ Error connecting to Freighter:', error);
    throw error;
  }
}
