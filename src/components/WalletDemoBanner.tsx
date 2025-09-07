// [AhorroStellar][Reflector]
'use client'
export default function WalletDemoBanner(){
  const mock = process.env.NEXT_PUBLIC_DEV_WALLET_MOCK === 'true'
  const pk = process.env.NEXT_PUBLIC_READONLY_PUBLIC_KEY || ''
  if (!mock || !pk) return null
  return (
    <div className="alert alert-info text-sm">
      Wallet conectada (DEMO): <b>{pk.slice(0,6)}…{pk.slice(-6)}</b>
    </div>
  )
}
