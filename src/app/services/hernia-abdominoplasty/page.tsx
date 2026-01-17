import type { ReactElement } from 'react';

import AbdominoGernStart from '@/components/AbdominoGern/AbdominoGernStart';
import AbdominoGernOper from '@/components/AbdominoGern/AbdominoGernOper';
import AbdominoGernReabill from '@/components/AbdominoGern/AbdominoGernReabill';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarAbdominoGern from '@/components/AbdominoGern/SidebarAbdominoGern';

export default function GeneralHerniaPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <AbdominoGernStart />

        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <AbdominoGernOper />
            <AbdominoGernReabill />
            <ConsultationCTA />
          </section>
          <SidebarAbdominoGern />
        </div>
      </div>
    </main>
  );
}
