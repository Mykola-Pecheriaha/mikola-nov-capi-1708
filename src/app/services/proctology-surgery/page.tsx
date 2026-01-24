import type { ReactElement } from 'react';
import ProctologySurgery from '@/components/ProctologySurgery/ProctologySurgery';
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function ProctologySurgeryPage(): ReactElement {
  return (
    <main>
      <ProctologySurgery />
      <ConsultationCTA />
    </main>
  );
}
