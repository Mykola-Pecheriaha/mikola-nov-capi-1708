import type { ReactElement } from 'react';

import AbdominoplastyStart from '@/components/Abdominoplasty/AbdominoplastyStart';
import AbdominoDetails from '@/components/Abdominoplasty/AbdominoDetails';
import AbdominoPreparation from '@/components/Abdominoplasty/AbdominoPreparation';

import AbdominoFAQ from '@/components/Abdominoplasty/AbdominoFAQ';
import SidebarAbdominoplasty from '@/components/Abdominoplasty/SidebarAbdominoplasty';

export default function AbdominoplastyPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <AbdominoplastyStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <AbdominoDetails />
            <AbdominoPreparation />
            <AbdominoFAQ />
          </section>
          <SidebarAbdominoplasty />
        </div>
      </div>
    </main>
  );
}
