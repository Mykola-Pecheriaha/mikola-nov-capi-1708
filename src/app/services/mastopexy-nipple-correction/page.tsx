import type { ReactElement } from 'react';

import MastopexyWithNippleCorrection from '@/components/MastopexyWithNippleCorrection/MastopexyWithNippleCorrection';
import BreastLiftNippleIndications from '@/components/MastopexyWithNippleCorrection/BreastLiftNippleIndications';
import BreastLiftNippleContraIndications from '@/components/MastopexyWithNippleCorrection/BreastLiftNippleContraIndications';
import BreastLiftNipplePreparation from '@/components/MastopexyWithNippleCorrection/BreastLiftNipplePreparation';
import MastopexyInfo from '@/components/MastopexyWithNippleCorrection/MastopexyInfo';
import BreastLiftFAQ from '@/components/MastopexyWithNippleCorrection/BreastLiftFAQ';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarMastopexyWithNippleCorrection from '@/components/MastopexyWithNippleCorrection/SidebarMastopexyWithNippleCorrection';

export default function MastopexyWithNippleCorrectionPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <MastopexyWithNippleCorrection />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <BreastLiftNippleIndications />
            <BreastLiftNippleContraIndications />
            <BreastLiftNipplePreparation />
            <MastopexyInfo />
            <BreastLiftFAQ />
            <ConsultationCTA />
          </section>
          <SidebarMastopexyWithNippleCorrection />
        </div>
      </div>
    </main>
  );
}
