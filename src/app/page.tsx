import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import QRCode from "@/components/qr/QRCode";
import { useWallet } from "@/components/wallet/WalletProvider";
import { Wallet, Star, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stellar-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-stellar-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-stellar-500" />
              <h1 className="text-2xl font-bold gradient-text">AhorroStellar</h1>
            </div>
            <WalletConnectButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Tu ahorro construye el futuro Web3
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Participa en el ecosistema Stellar sin riesgo. Bloquea fondos y respalda proyectos universitarios que merecen tu apoyo.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">
              <Wallet className="w-5 h-5 mr-2" />
              Conectar Wallet
            </Button>
            <Button variant="outline" size="lg">
              Ver Proyectos
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-stellar-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-stellar-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sin Riesgo</h3>
              <p className="text-gray-600">Bloquea fondos temporalmente sin perder tu dinero</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reputación</h3>
              <p className="text-gray-600">Gana visibilidad y prestigio en la comunidad</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidad</h3>
              <p className="text-gray-600">Conecta con otros estudiantes y proyectos</p>
            </div>
          </Card>
        </div>

        {/* QR Code Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Conecta tu Wallet</h2>
          <QRCode size={250} />
        </div>
      </main>
    </div>
  );
}

function WalletConnectButton() {
  const { wallet, connect, disconnect, isLoading } = useWallet();

  return (
    <Button
      variant={wallet.isConnected ? "outline" : "primary"}
      size="sm"
      onClick={wallet.isConnected ? disconnect : connect}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
      ) : (
        <Wallet className="w-4 h-4 mr-2" />
      )}
      {wallet.isConnected ? "Desconectar" : "Conectar"}
    </Button>
  );
}
