import React from 'react';
import { QrCode } from 'lucide-react';

interface QRCodeProps {
  data?: string;
  size?: number;
  className?: string;
}

const QRCode: React.FC<QRCodeProps> = ({
  data = 'https://ahorrostellar.vercel.app',
  size = 200,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div 
        className="bg-white p-4 rounded-lg shadow-lg border-2 border-stellar-100"
        style={{ width: size, height: size }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <QrCode size={size * 0.6} className="text-stellar-500" />
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-2 text-center max-w-xs">
        Escanea para conectar tu wallet
      </p>
    </div>
  );
};

export default QRCode;
