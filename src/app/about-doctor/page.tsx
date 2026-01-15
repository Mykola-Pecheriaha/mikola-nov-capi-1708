import type { ReactElement } from 'react';

import AboutBort from '@/components/About/AboutBort';

export default function LAboutPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <AboutBort />
      </div>
    </main>
  );
}
