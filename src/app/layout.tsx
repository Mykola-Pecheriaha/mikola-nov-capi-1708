import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SocialSidebar from '../components/VidioBord/SocialSidebar';
import KeyboardAdminShortcut from '../components/KeyboardAdminShortcut';
import NetworkStatus from '../components/NetworkStatus';
import MobileDebugPanel from '../components/MobileDebugPanel';
import { Providers } from '../components/Providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Медичний центр - Консультації та медичні форми',
  description: 'Професійні медичні консультації та детальні медичні форми онлайн',
  other: {
    'format-detection': 'telephone=no',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
    HandheldFriendly: 'true',
    MobileOptimized: 'width',
    'msapplication-TileColor': '#5e9b9b',
    'theme-color': '#5e9b9b',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <NetworkStatus />
          <KeyboardAdminShortcut />
          <MobileDebugPanel />
          <Header />
          <SocialSidebar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
