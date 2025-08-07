"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
  showSearch?: boolean;
  showNotifications?: boolean;
}

export default function Layout({ 
  children, 
  showSidebar = true, 
  showSearch = true, 
  showNotifications = true 
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stellar-50 to-purple-50">
      {/* Header */}
      <Header showSearch={showSearch} showNotifications={showNotifications} />

      {/* Main Layout - Sidebar + Content */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        {showSidebar && <Sidebar />}

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-screen-lg mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
