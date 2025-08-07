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
        <main className={`flex-1 ${showSidebar ? 'lg:ml-72' : ''} p-8`}>
          <div className="max-w-screen-xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
