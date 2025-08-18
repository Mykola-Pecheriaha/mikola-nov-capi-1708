'use client';

import TopBar from './TopBar';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 shadow-lg ${className}`} style={{background: 'var(--background)', color: 'var(--foreground)'}}>
      <TopBar />
      <Navbar />
      <Breadcrumbs />
    </header>
  );
}
