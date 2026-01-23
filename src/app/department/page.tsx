import type { ReactElement } from 'react';

import Surgdepartment from '@/components/Department/Surgdepartment';

import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function LAboutPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <Surgdepartment />

        <ConsultationCTA />
      </div>
    </main>
  );
}
