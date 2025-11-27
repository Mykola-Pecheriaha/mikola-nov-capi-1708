import type { ReactElement } from 'react';

import BlefaroplasticStart from '@/components/Blefaroplastic/BlefaroplasticStart';

import BlefaroplasticDetails from '@/components/Blefaroplastic/BlefaroplasticDetails';

import BlepharoPreparation from '@/components/Blefaroplastic/BlepharoPreparation';

import BlepharoFAQ from '@/components/Blefaroplastic/BlepharoFAQ';
import SidebarBlefaroplastic from '@/components/Blefaroplastic/SidebarBlefaroplastic';

export default function GynecomastiaPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <BlefaroplasticStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <BlefaroplasticDetails />
            <BlepharoPreparation />
            <BlepharoFAQ />
          </section>
          <SidebarBlefaroplastic />
        </div>
      </div>
    </main>
  );
}
