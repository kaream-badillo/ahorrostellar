"use client";

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showSearch?: boolean;
}

export default function Layout({ children, showSidebar = true, showSearch = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-white">
      <Header showSearch={showSearch} />
      <div className="flex">
        {showSidebar && <Sidebar />}
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
