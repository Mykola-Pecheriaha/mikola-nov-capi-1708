import type { ReactElement } from 'react';

import CervicalHumpRemoval from '@/components/CervicalHumpRemoval/CervicalHumpRemoval';
import CervicalHumpDetails from '@/components/CervicalHumpRemoval/CervicalHumpDetails';
import CervicalHumpIndicatio from '@/components/CervicalHumpRemoval/CervicalHumpIndicatio';
import CervicalHumpPreparation from '@/components/CervicalHumpRemoval/CervicalHumpPreparation';

// import LiposuctionFAQ from '@/components/Liposuction/LiposuctionFAQ';
import SidebarCervicalHumpRemoval from '@/components/CervicalHumpRemoval/SidebarCervicalHumpRemoval';

export default function CervicalHumpRemovalPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <CervicalHumpRemoval />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <CervicalHumpDetails />
            <CervicalHumpIndicatio />
            <CervicalHumpPreparation />
            {/* <LiposuctionFAQ /> */}
          </section>
          <SidebarCervicalHumpRemoval />
        </div>
      </div>
    </main>
  );
}
