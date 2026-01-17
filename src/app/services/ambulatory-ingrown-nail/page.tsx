import type { ReactElement } from 'react';

import NailCorrectionStart from '@/components/NailCorrection/NailCorrectionStart';
import NailCorrectionClinic from '@/components/NailCorrection/NailCorrectionClinic';
import NailCorrectionTerapi from '@/components/NailCorrection/NailCorrectionTerapi';
import NailCorrectionReabil from '@/components/NailCorrection/NailCorrectionReabil';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarNailCorrection from '@/components/NailCorrection/SidebarNailCorrection';

export default function DermCorrectionPage(): ReactElement {
  return (
    <main className="flex flex-col gap-6 md:gap-8 lg:gap-12">
      <NailCorrectionStart />

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
            <section className="md:w-3/4 w-full">
              <NailCorrectionClinic />
              <NailCorrectionTerapi />
              <NailCorrectionReabil />
              <ConsultationCTA />
            </section>
            <SidebarNailCorrection />
          </div>
        </div>
      </div>
    </main>
  );
}
