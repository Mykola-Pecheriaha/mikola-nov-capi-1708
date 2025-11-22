import type { ReactElement } from 'react';
import RemovalReplacementImplants from '@/components/RemovalReplacementImplants/RemovalReplacementImplants';
import RemovalBreastImplantRevision from '@/components/RemovalReplacementImplants/RemovalBreastImplantRevision';
import ImplantReplacementProcedure from '@/components/RemovalReplacementImplants/ImplantReplacementProcedure';
import ImplantBreastRecoveryReabilit from '@/components/RemovalReplacementImplants/ImplantBreastRecoveryReabilit';
import SidebarRemovalReplacementImplants from '@/components/RemovalReplacementImplants/SidebarRemovalReplacementImplants';

export default function RemovalReplacementImplantsPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <RemovalReplacementImplants />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <RemovalBreastImplantRevision />
            <ImplantReplacementProcedure />
            <ImplantBreastRecoveryReabilit />
          </section>
          <SidebarRemovalReplacementImplants />
        </div>
      </div>
    </main>
  );
}
