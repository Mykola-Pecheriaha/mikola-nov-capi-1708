import type { ReactElement } from 'react';

import Dupuytren from '@/components/Dupuytren/Dupuytren';
import PrychynyDyupyitrena from '@/components/Dupuytren/PrychynyDyupyitrena';
import StagesDupuytren from '@/components/Dupuytren/StagesDupuytren';
import ClinicsDupuytren from '@/components/Dupuytren/ClinicsDupuytren';
import DiagnosticDupuytren from '@/components/Dupuytren/DiagnosticDupuytren';
import TreatmentDupuytren from '@/components/Dupuytren/TreatmentDupuytren';
import RehabilitationDupuytren from '@/components/Dupuytren/RehabilitationDupuytren';
import ConsultationCTA from '@/components/About/ConsultationCTA';
import SidebarHandDupuytren from '@/components/Dupuytren/SidebarHandDupuytren';

export default function DupuytrenPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <Dupuytren />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <PrychynyDyupyitrena />
            <StagesDupuytren />
            <ClinicsDupuytren />
            <DiagnosticDupuytren />
            <TreatmentDupuytren />
            <RehabilitationDupuytren />
            <ConsultationCTA />
          </section>
          <SidebarHandDupuytren />
        </div>
      </div>
    </main>
  );
}
