import type { ReactElement } from 'react';

import AboutBort from '@/components/About/AboutBort';
import Educationcareer from '@/components/About/Educationcareer';
import Diplomcertificates from '@/components/About/Diplomcertificates';
import Clinic from '@/components/About/Clinic';
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function LAboutPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <AboutBort />
        <Educationcareer />
        <Diplomcertificates />
        <Clinic />
        <ConsultationCTA />
      </div>
    </main>
  );
}
