import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../src/styles/globals.css";
import { AppProvider } from "@/contexts/AppContext";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AhorroStellar - Save with purpose. Vote for the future.",
  description: "Educational Web3 platform for students. Temporary, zero-risk savings and purpose-driven voting powered by Stellar and Reflector.",
  keywords: ["Web3", "Stellar", "Savings", "University", "Blockchain", "Finance"],
  authors: [{ name: "Kaream Badillo" }],
  icons: {
    icon: "/favicon.png",
  },
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
    <html lang="en" data-theme="ahorrostellar" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-stellar-50 to-white antialiased`}>
        <ErrorBoundary>
          <AppProvider>
            <div className="min-h-screen">
              {children}
            </div>
          </AppProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
