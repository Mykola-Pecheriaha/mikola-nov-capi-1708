import type { ReactElement } from 'react';

import DermScarCorrectionStart from '@/components/DermScarCorrection/DermScarCorrectionStart';
import DermScarCorrectionDetails from '@/components/DermScarCorrection/DermScarCorrectionDetails';
import DermScarCorrectionOper from '@/components/DermScarCorrection/DermScarCorrectionOper';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarDermScarCorrection from '@/components/DermScarCorrection/SidebarDermScarCorrection';

export default function DermCorrectionPage(): ReactElement {
  return (
    <main className="flex flex-col gap-6 md:gap-8 lg:gap-12">
      <DermScarCorrectionStart />

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
            <section className="md:w-3/4 w-full">
              <DermScarCorrectionDetails />
              <DermScarCorrectionOper />
              <ConsultationCTA />
            </section>
            <SidebarDermScarCorrection />
          </div>
        </div>
      </div>
    </main>
  );
}
