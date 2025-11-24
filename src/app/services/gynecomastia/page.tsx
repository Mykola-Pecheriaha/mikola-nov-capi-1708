import type { ReactElement } from 'react';

import Gynecomastia from '@/components/Gynecomastia/Gynecomastia';

import GinecomastiyaIndications from '@/components/Gynecomastia/GinecomastiyaIndications';
import GinecomastiyaPreparation from '@/components/Gynecomastia/GinecomastiyaPreparation';
import GinecomastiyaFAQ from '@/components/Gynecomastia/GinecomastiyaFAQ';

import SidebarGynecomastia from '@/components/Gynecomastia/SidebarGynecomastia';

export default function GynecomastiaPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <Gynecomastia />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <GinecomastiyaIndications />
            <GinecomastiyaPreparation />
            <GinecomastiyaFAQ />
          </section>
          <SidebarGynecomastia />
        </div>
      </div>
    </main>
  );
}
