import type { ReactElement } from 'react';

import CruroplastyStart from '@/components/Cruroplasty/CruroplastyStart';
import CruroplastyIndication from '@/components/Cruroplasty/CruroplastyIndication';
import CruroplastyPreparation from '@/components/Cruroplasty/CruroplastyPreparation';
import CruroplastyReabilitatio from '@/components/Cruroplasty/CruroplastyReabilitatio';
import CruroplastyLypofiling from '@/components/Cruroplasty/CruroplastyLypofiling';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarСruroplasty from '@/components/Cruroplasty/SidebarСruroplasty';

export default function CruroplastyPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <CruroplastyStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <CruroplastyIndication />
            <CruroplastyPreparation />
            <CruroplastyLypofiling />
            <CruroplastyReabilitatio />
            <ConsultationCTA />
          </section>
          / <SidebarСruroplasty />
        </div>
      </div>
    </main>
  );
}
