import type { ReactElement } from 'react';

import AboutBort from '@/components/About/AboutBort';
import Educationcareer from '@/components/About/Educationcareer';
import Diplomcertificates from '@/components/About/Diplomcertificates';
import Clinic from '@/components/About/Clinic';
import Surgdepartment from '@/components/Department/Surgdepartment';
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function LAboutPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <AboutBort />
        <Educationcareer />
        <Diplomcertificates />
        <Clinic />
        <div className="w-full border-t-2 border-blue-200 dark:border-blue-700 pt-12 md:pt-16">
          <Surgdepartment />
        </div>
        <ConsultationCTA />
      </div>
    </main>
  );
}
