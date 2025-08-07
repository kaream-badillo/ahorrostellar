"use client";

import React from 'react';
import { QrCode } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QRPlaceholderProps {
  size?: number;
  showBorder?: boolean;
  className?: string;
}

export default function QRPlaceholder({ size = 200, showBorder = true, className }: QRPlaceholderProps) {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center',
      showBorder ? 'border-2 border-stellar-100 p-6' : 'p-4',
      'bg-white rounded-xl shadow-lg',
      className
    )}>
      <div className="relative">
        {/* Mock QR Code Grid */}
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: 64 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-sm ${
                Math.random() > 0.3 ? 'bg-stellarBlue' : 'bg-gray-100'
              }`}
            />
          ))}
        </div>
        
        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-stellarBlue rounded-lg flex items-center justify-center">
            <QrCode size={size * 0.6} className="text-white" />
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mt-4 text-center max-w-xs">
        Escanea para conectar tu wallet
      </p>
    </div>
  );
}
