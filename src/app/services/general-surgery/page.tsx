import type { ReactElement } from 'react';
import GeneralSurgery from '@/components/GeneralSurgery/GeneralSurgery';
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function GeneralSurgeryPage(): ReactElement {
  return (
    <main>
      <GeneralSurgery />
      <ConsultationCTA />
    </main>
  );
}
