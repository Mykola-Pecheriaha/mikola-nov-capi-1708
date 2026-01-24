import type { ReactElement } from 'react';
import BreastPlasticSurgery from '@/components/BreastPlasticSurgery/BreastPlasticSurgery';
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function BreastPlasticSurgeryPage(): ReactElement {
  return (
    <>
      <BreastPlasticSurgery />
      <ConsultationCTA />
    </>
  );
}
