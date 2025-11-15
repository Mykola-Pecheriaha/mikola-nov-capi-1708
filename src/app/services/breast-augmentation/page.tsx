import type { ReactElement } from 'react';

import ProctoAnalFissureStart from '@/components/ProctoAnalFissure/ProctoAnalFissureStart';

// import ProctoAnalFissureSimptom from '@/components/ProctoAnalFissure/ProctoAnalFissureSimptom';

// import ProctoAnalFissureComplic from '@/components/ProctoAnalFissure/ProctoAnalFissureComplic';

// import ProctoAnalFissureDiagnos from '@/components/ProctoAnalFissure/ProctoAnalFissureDiagnos';

// import ProctoAnalFissureTerapi from '@/components/ProctoAnalFissure/ProctoAnalFissureTerapi';

import SidebarAnalFissure from '@/components/ProctoAnalFissure/SidebarAnalFissure';

export default function ProctologConsultationPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <ProctoAnalFissureStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            {/* <ProctoAnalFissureSimptom /> */}
            {/* <ProctoAnalFissureComplic /> */}
            {/* <ProctoAnalFissureDiagnos /> */}
            {/* <ProctoAnalFissureTerapi /> */}
          </section>
          <SidebarAnalFissure />
        </div>
      </div>
    </main>
  );
}
