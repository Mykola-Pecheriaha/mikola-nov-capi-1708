import type { ReactElement } from 'react';

import FacetummorStart from '@/components/Facetummor/FacetummorStart';
import FacetummorDetalis from '@/components/Facetummor/FacetummorDetalis';
import FacetummorDiagnoz from '@/components/Facetummor/FacetummorDiagnoz';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarFacetummor from '@/components/Facetummor/SidebarFacetummor';

export default function FacetummorPage(): ReactElement {
  return (
    <main className="flex flex-col gap-6 md:gap-8 lg:gap-12">
      <FacetummorStart />

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
            <section className="md:w-3/4 w-full">
              <FacetummorDiagnoz />
              <FacetummorDetalis />
              <ConsultationCTA />
            </section>
            <SidebarFacetummor />
          </div>
        </div>
      </div>
    </main>
  );
}
