import type { ReactElement } from 'react';
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function CholecystLapPage(): ReactElement {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Наші послуги - Лапароскопічна холецистектомія</h1>
      {/* <Services /> */}
      <ConsultationCTA />
    </main>
  );
}
