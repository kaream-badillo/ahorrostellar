// [AhorroStellar][Reflector]
import { StrKey } from '@stellar/stellar-sdk'

export function getReaderPk(): string {
  const pk = process.env.NEXT_PUBLIC_READONLY_PUBLIC_KEY || ''
  
  // If no public key is configured, use a demo key for testing
  if (!pk || pk === '<TU_PUBLIC_KEY_G...>') {
    console.warn('NEXT_PUBLIC_READONLY_PUBLIC_KEY not configured, using demo key')
    return 'GDEMO123456789012345678901234567890123456789012345678901234567890'
  }
  
  // Validate the public key format
  if (!StrKey.isValidEd25519PublicKey(pk)) {
    console.warn('Invalid public key format, using demo key')
    return 'GDEMO123456789012345678901234567890123456789012345678901234567890'
  }
  
  console.log('Using real Reflector account:', pk.slice(0, 6) + '...' + pk.slice(-6))
  return pk
}