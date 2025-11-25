import type { ReactElement } from 'react';

import FaceliftSectionStart from '@/components/FaceliftSection/FaceliftSectionStart';
import FaceliftConsultation from '@/components/FaceliftSection/FaceliftConsultation';
import FaceliftPreparation from '@/components/FaceliftSection/FaceliftPreparation';
import FaceliftFAQ from '@/components/FaceliftSection/FaceliftFAQ';

// import GinecomastiyaIndications from '@/components/Gynecomastia/GinecomastiyaIndications';

import SidebarFaceliftSectionStart from '@/components/FaceliftSection/SidebarFaceliftSectionStart';

export default function GynecomastiaPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <FaceliftSectionStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <FaceliftConsultation />
            <FaceliftPreparation />
            <FaceliftFAQ />
          </section>
          <SidebarFaceliftSectionStart />
        </div>
      </div>
    </main>
  );
}
