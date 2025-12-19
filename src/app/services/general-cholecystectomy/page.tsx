import type { ReactElement } from 'react';

import GeneraCholeStart from '@/components/GeneraChole/GeneraCholeStart';
import GeneraCholeSymtome from '@/components/GeneraChole/GeneraCholeSymtome';
import GeneraCholeTerapi from '@/components/GeneraChole/GeneraCholeTerapi';
import GeneraCholeReabil from '@/components/GeneraChole/GeneraCholeReabil';

import SidebarGeneraChole from '@/components/GeneraChole/SidebarGeneraChole';

export default function GeneralHerniaPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <GeneraCholeStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <GeneraCholeSymtome />
            <GeneraCholeTerapi />
            <GeneraCholeReabil />
          </section>
          <SidebarGeneraChole />
        </div>
      </div>
    </main>
  );
}
