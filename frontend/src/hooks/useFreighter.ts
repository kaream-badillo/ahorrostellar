'use client'
import { useState, useEffect } from 'react'
import freighter from '@stellar/freighter-api'

export interface FreighterStatus {
  isInstalled: boolean
  isConnected: boolean
  publicKey: string | null
  isLoading: boolean
  error: string | null
}

export const useFreighter = () => {
  const [status, setStatus] = useState<FreighterStatus>({
    isInstalled: false,
    isConnected: false,
    publicKey: null,
    isLoading: true,
    error: null
  })

  useEffect(() => {
    const checkFreighter = async () => {
      setStatus(prev => ({ ...prev, isLoading: true, error: null }))

      try {
        // Wait a bit for extensions to load
        await new Promise(resolve => setTimeout(resolve, 1000))

        if (typeof window === 'undefined') {
          setStatus(prev => ({ ...prev, isLoading: false }))
          return
        }

        // Check if Freighter API is available
        if (typeof (window as any).freighterApi === 'undefined') {
          setStatus({
            isInstalled: false,
            isConnected: false,
            publicKey: null,
            isLoading: false,
            error: 'Freighter API not found'
          })
          return
        }

        // Freighter is installed
        setStatus(prev => ({ ...prev, isInstalled: true }))

        // Try to check connection status using official API
        try {
          const conn = await freighter.isConnected()
          console.log('Freighter connection check:', conn)
          
          if (conn.isConnected) {
            // Try to get address
            const addressResult = await freighter.getAddress()
            console.log('Freighter address check:', addressResult)
            
            setStatus({
              isInstalled: true,
              isConnected: true,
              publicKey: addressResult.address || null,
              isLoading: false,
              error: null
            })
          } else {
            setStatus({
              isInstalled: true,
              isConnected: false,
              publicKey: null,
              isLoading: false,
              error: null
            })
          }
        } catch (error) {
          // Freighter is installed but connection check failed
          setStatus({
            isInstalled: true,
            isConnected: false,
            publicKey: null,
            isLoading: false,
            error: 'Connection check failed'
          })
        }

      } catch (error) {
        setStatus({
          isInstalled: false,
          isConnected: false,
          publicKey: null,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    checkFreighter()

    // Check periodically for Freighter installation
    const interval = setInterval(checkFreighter, 3000)
    return () => clearInterval(interval)
  }, [])

  const connect = async (): Promise<string> => {
    if (!status.isInstalled) {
      throw new Error('Freighter not installed')
    }

    setStatus(prev => ({ ...prev, isLoading: true, error: null }))

    try {
      // Use the official conectarFreighter function
      const { conectarFreighter } = await import('@/components/wallet/ConectarFreighter')
      const publicKey = await conectarFreighter()

      setStatus({
        isInstalled: true,
        isConnected: true,
        publicKey,
        isLoading: false,
        error: null
      })

      return publicKey

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Connection failed'
      setStatus(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage
      }))
      throw error
    }
  }

  const disconnect = () => {
    setStatus({
      isInstalled: status.isInstalled,
      isConnected: false,
      publicKey: null,
      isLoading: false,
      error: null
    })
  }

  return {
    ...status,
    connect,
    disconnect
  }
}
