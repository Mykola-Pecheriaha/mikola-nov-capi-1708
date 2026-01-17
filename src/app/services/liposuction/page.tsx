import type { ReactElement } from 'react';

import LiposuctionStart from '@/components/Liposuction/LiposuctionStart';
import LiposuctionDetails from '@/components/Liposuction/LiposuctionDetails';
import LiposuctionIndicatio from '@/components/Liposuction/LiposuctionIndicatio';
import LiposuctionPreparation from '@/components/Liposuction/LiposuctionPreparation';

import LiposuctionFAQ from '@/components/Liposuction/LiposuctionFAQ';
import ConsultationCTA from '@/components/About/ConsultationCTA';
import SidebarLiposuction from '@/components/Liposuction/SidebarLiposuction';

export default function LiposuctionPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <LiposuctionStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <LiposuctionDetails />
            <LiposuctionIndicatio />
            <LiposuctionPreparation />
            <LiposuctionFAQ />
            <ConsultationCTA />
          </section>
          <SidebarLiposuction />
        </div>
      </div>
    </main>
  );
}
