import type { ReactElement } from 'react';
import PhlebologySurgery from '@/components/PhlebologySurgery/PhlebologySurgery';
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function PhlebologySurgeryPage(): ReactElement {
  return (
    <main>
      <PhlebologySurgery />
      <ConsultationCTA />
    </main>
  );
}
