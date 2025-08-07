import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "@/components/wallet/WalletProvider";
import { AppProvider } from "@/contexts/AppContext";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AhorroStellar - Tu ahorro construye el futuro Web3",
  description: "Plataforma Web3 para estudiantes universitarios que permite bloquear fondos sin riesgo y participar en el ecosistema Stellar",
  keywords: ["Web3", "Stellar", "Ahorro", "Universidad", "Blockchain", "Finanzas"],
  authors: [{ name: "Kaream Badillo" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="ahorrostellar" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-stellar-50 to-white antialiased`}>
        <ErrorBoundary>
          <AppProvider>
            <WalletProvider>
              <div className="min-h-screen">
                {children}
              </div>
            </WalletProvider>
          </AppProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
