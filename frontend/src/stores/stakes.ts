// [AhorroStellar][Reflector]
'use client'
import { create } from 'zustand'
export type Stake = { id:string; asset:'USDC'|'CLP'|'XLM'; amount:number; usd:number; ts:number }
type S = { items: Stake[]; add:(s:Omit<Stake,'id'|'ts'>)=>void; clear:()=>void }

export const useStakes = create<S>((set,get)=>({
  items: [],
  add: (s) => {
    const n: Stake = { id: crypto.randomUUID(), ts: Date.now(), ...s }
    const items = [n, ...get().items].slice(0,50)
    set({ items }); try{ localStorage.setItem('stakes', JSON.stringify(items)) }catch{}
  },
  clear: () => { set({ items: [] }); try{ localStorage.removeItem('stakes') }catch{} }
}))

if (typeof window !== 'undefined') {
  try{ const saved = JSON.parse(localStorage.getItem('stakes')||'[]'); useStakes.setState({ items: saved }) }catch{}
}
