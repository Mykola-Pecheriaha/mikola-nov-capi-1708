import type { ReactElement } from 'react';

import ProctoСoccyxСystStart from '@/components/ProctoСoccyxСyst/ProctoСoccyxСystStart';

import ProctoСoccyxСystSimptom from '@/components/ProctoСoccyxСyst/ProctoСoccyxСystSimptom';

import ProctoСoccyxСystTerapi from '@/components/ProctoСoccyxСyst/ProctoСoccyxСystTerapi';

import ProctoСoccyxСystRelapse from '@/components/ProctoСoccyxСyst/ProctoСoccyxСystRelapse';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarСoccyxСyst from '@/components/ProctoСoccyxСyst/SidebarСoccyxСyst';

export default function ProctologConsultationPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <ProctoСoccyxСystStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <ProctoСoccyxСystSimptom />
            <ProctoСoccyxСystTerapi />
            <ProctoСoccyxСystRelapse />
            <ConsultationCTA />
            {/* <ProctoAnalFissureTerapi /> */}
          </section>
          <SidebarСoccyxСyst />
        </div>
      </div>
    </main>
  );
}
