import type { ReactElement } from 'react';

import ProctoPararectFistulaStart from '@/components/ProctoPararectalFistula/ProctoPararectFistulaStart';

import ProctoPararectFistulaSimptom from '@/components/ProctoPararectalFistula/ProctoPararectFistulaSimptom';
import ProctoPararectFistulaDiagnos from '@/components/ProctoPararectalFistula/ProctoPararectFistulaDiagnos';
import ProctoPararectFistulaOper from '@/components/ProctoPararectalFistula/ProctoPararectFistulaOper';
import ProctoPararectFistulaReabil from '@/components/ProctoPararectalFistula/ProctoPararectFistulaReabil';
import ConsultationCTA from '@/components/About/ConsultationCTA';

import SidebarPararectalFistula from '@/components/ProctoPararectalFistula/SidebarPararectalFistula';

export default function ProctologConsultationPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <ProctoPararectFistulaStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <ProctoPararectFistulaSimptom />
            <ProctoPararectFistulaDiagnos />
            <ProctoPararectFistulaOper />
            <ProctoPararectFistulaReabil />
            <ConsultationCTA />
          </section>
          <SidebarPararectalFistula />
        </div>
      </div>
    </main>
  );
}
