// [AhorroStellar][Reflector]
export function getReaderPk(): string {
  const pk = process.env.NEXT_PUBLIC_READONLY_PUBLIC_KEY || ''
  if (!pk) throw new Error('NEXT_PUBLIC_READONLY_PUBLIC_KEY missing')
  return pk
}