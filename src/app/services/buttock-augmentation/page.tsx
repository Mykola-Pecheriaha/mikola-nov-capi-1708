import type { ReactElement } from 'react';

import ButtockAugmentStart from '@/components/ButtockAugment/ButtockAugmentStart';
import ButtockAugmentDetails from '@/components/ButtockAugment/ButtockAugmentDetails';
import ButtockContraIndication from '@/components/ButtockAugment/ButtockContraIndication';
import ButtockPreparation from '@/components/ButtockAugment/ButtockPreparation';
import ButtockRehabilitation from '@/components/ButtockAugment/ButtockRehabilitation';

import SidebarButtockAugment from '@/components/ButtockAugment/SidebarButtockAugment';

export default function ButtockAugmentStartPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <ButtockAugmentStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <ButtockAugmentDetails />
            <ButtockContraIndication />
            <ButtockPreparation />
            <ButtockRehabilitation />
          </section>
          <SidebarButtockAugment />
        </div>
      </div>
    </main>
  );
}
