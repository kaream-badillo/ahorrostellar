'use client'
import freighter from '@stellar/freighter-api'

export async function conectarFreighter(): Promise<string> {
  if (typeof (window as any).freighterApi === 'undefined') {
    throw new Error('Freighter no detectada. Verifica extensión y permisos de sitio.')
  }
  const c = await freighter.isConnected(); if (!c.isConnected) throw new Error('Freighter no conectada')
  const p = await freighter.setAllowed();  if (!p.isAllowed)   throw new Error('Permiso denegado')
  const a1 = await freighter.getAddress(); if (a1.address) return a1.address
  const a2 = await freighter.requestAccess(); if (a2.error || !a2.address) throw new Error(a2.error || 'Sin address')
  return a2.address
}
