import type { ReactElement } from 'react';

import GeneralHerniaStart from '@/components/GeneralHernia/GeneralHerniaStart';
import GeneralHerniaDiagnos from '@/components/GeneralHernia/GeneralHerniaDiagnos';
import GeneralHerniaPreparat from '@/components/GeneralHernia/GeneralHerniaPreparat';
import GeneralHerniaOperClasic from '@/components/GeneralHernia/GeneralHerniaOperClasic';
import GernioFAQ from '@/components/GeneralHernia/GernioFAQ';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarGeneralHernia from '@/components/GeneralHernia/SidebarGeneralHernia';

export default function GeneralHerniaPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <GeneralHerniaStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <GeneralHerniaDiagnos />
            <GeneralHerniaPreparat />
            <GeneralHerniaOperClasic />
            <GernioFAQ />
            <ConsultationCTA />
          </section>
          <SidebarGeneralHernia />
        </div>
      </div>
    </main>
  );
}
