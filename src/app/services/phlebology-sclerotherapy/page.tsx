import type { ReactElement } from 'react';

import PhlebologyScleroTerapi from '@/components/PhlebologySclero/PhlebologyScleroTerapi';

import PhlebologyScleroTechnic from '@/components/PhlebologySclero/PhlebologyScleroTechnic';

import PhlebologyScleroRecommen from '@/components/PhlebologySclero/PhlebologyScleroRecommen';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarScleroTerapi from '@/components/PhlebologySclero/SidebarScleroTerapi';

export default function PhlebologyScleroPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <PhlebologyScleroTerapi />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <PhlebologyScleroTechnic />
            <PhlebologyScleroRecommen />
            <ConsultationCTA />
          </section>
          <SidebarScleroTerapi />
        </div>
      </div>
    </main>
  );
}
