import type { ReactElement } from 'react';
import AmbulatorySurgery from '@/components/AmbulatorySurgery/AmbulatorySurgery';
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function AmbulatorySurgeryPage(): ReactElement {
  return (
    <main>
      <AmbulatorySurgery />
      <ConsultationCTA />
    </main>
  );
}
