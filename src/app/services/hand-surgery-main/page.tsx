import type { ReactElement } from 'react';
import HandSurgery from '@/components/HandSurgery/HandSurgery';
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function HandSurgeryPage(): ReactElement {
  return (
    <main>
      <HandSurgery />
      <ConsultationCTA />
    </main>
  );
}
