import React from 'react';
import { QrCode } from 'lucide-react';

interface QRCodeProps {
  data?: string;
  size?: number;
  className?: string;
  showBorder?: boolean;
}

const QRCode: React.FC<QRCodeProps> = ({
  data = 'https://ahorrostellar.vercel.app',
  size = 200,
  className = '',
  showBorder = true,
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div 
        className={`bg-white rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 ${
          showBorder ? 'border-2 border-stellar-100 p-6' : 'p-4'
        }`}
        style={{ width: size, height: size }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <QrCode size={size * 0.6} className="text-stellar-500" />
        </div>
      </div>
      <p className="text-base text-gray-600 mt-4 text-center max-w-xs font-medium">
        Escanea para conectar tu wallet
      </p>
    </div>
  );
};

export default QRCode;
