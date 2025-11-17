import type { ReactElement } from 'react';

import BreastAugmentationStart from '@/components/BreastAugmentation/BreastAugmentationStart';
import BreastProblem from '@/components/BreastAugmentation/BreastProblem';
import AugmentationConsultation from '@/components/BreastAugmentation/AugmentationConsultation';
import BreastAugmentationPreparation from '@/components/BreastAugmentation/BreastAugmentationPreparation';
import BreastQuestion from '@/components/BreastAugmentation/BreastQuestion';

import SidebarBreastAugment from '@/components/BreastAugmentation/SidebarBreastAugment';

export default function ProctologConsultationPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <BreastAugmentationStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <BreastProblem />
            <AugmentationConsultation />
            <BreastAugmentationPreparation />
            <BreastQuestion />
          </section>
          <SidebarBreastAugment />
        </div>
      </div>
    </main>
  );
}
