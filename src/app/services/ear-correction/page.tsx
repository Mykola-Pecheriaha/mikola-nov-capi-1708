import type { ReactElement } from 'react';
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function EarCorrectionPage(): ReactElement {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Наші послуги - Виправлення форми вух</h1>
      {/* <Services /> */}
      <ConsultationCTA />
    </main>
  );
}
