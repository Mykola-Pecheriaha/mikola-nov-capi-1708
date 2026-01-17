import type { ReactElement } from 'react';

import OttoplasticStart from '@/components/Ottoplastic/OttoplasticStart';

import OttoDetails from '@/components/Ottoplastic/OttoDetails';

import OttoPreparation from '@/components/Ottoplastic/OttoPreparation';
import OttoFAQ from '@/components/Ottoplastic/OttoFAQ';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarOttoplastic from '@/components/Ottoplastic/SidebarOttoplastic';

export default function OttoplasticPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <OttoplasticStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <OttoDetails />
            <OttoPreparation />
            <OttoFAQ />
            <ConsultationCTA />
          </section>
          <SidebarOttoplastic />
        </div>
      </div>
    </main>
  );
}
