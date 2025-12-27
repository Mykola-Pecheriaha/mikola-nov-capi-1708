import type { ReactElement } from 'react';

import AbdominoplastyStart from '@/components/Abdominoplasty/AbdominoplastyStart';
import AbdominoDetails from '@/components/Abdominoplasty/AbdominoDetails';
import AbdominoPreparation from '@/components/Abdominoplasty/AbdominoPreparation';
import AbdominoFAQ from '@/components/Abdominoplasty/AbdominoFAQ';

import SidebarAbdominoplastyt from '@/components/Abdominoplasty/SidebarAbdominoplastyt';

export default function AbdominoplastyPage(): ReactElement {
  return (
    <main className="flex flex-col gap-6 md:gap-8 lg:gap-12">
      <AbdominoplastyStart />

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
            <section className="md:w-3/4 w-full">
              <AbdominoDetails />
              <AbdominoPreparation />
              <AbdominoFAQ />
            </section>
            <SidebarAbdominoplastyt />
          </div>
        </div>
      </div>
    </main>
  );
}
