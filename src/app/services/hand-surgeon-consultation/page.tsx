import type { ReactElement } from 'react';

import StartHendConsul from '@/components/HandSurgeonConsultation/StartHendConsul';
import ClinicHendConsul from '@/components/HandSurgeonConsultation/ClinicHendConsul';
import CommonDiseasHand from '@/components/HandSurgeonConsultation/CommonDiseasHand';
import PreoperativePreparation from '@/components/HandSurgeonConsultation/PreoperativePreparation';
import PerformingSurgery from '@/components/HandSurgeonConsultation/PerformingSurgery';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarHandConsult from '@/components/HandSurgeonConsultation/SidebarHandConsult';

export default function HandSurgeonConsultationPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <StartHendConsul />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <ClinicHendConsul />
            <CommonDiseasHand />
            <PreoperativePreparation />
            <PerformingSurgery />
            <ConsultationCTA />
          </section>
          <SidebarHandConsult />
        </div>
      </div>
    </main>
  );
}
