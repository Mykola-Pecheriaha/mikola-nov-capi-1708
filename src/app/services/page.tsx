import type { ReactElement } from "react";
import PlasticSurgeryCard from "@/components/Services/PlasticSurgeryCard";
import PhlebologyCard from "@/components/Services/PhlebologyCard";
import ProctologyCard from "@/components/Services/ProctologyCard";
import GeneralSurgeryCard from "@/components/Services/GeneralSurgeryCard";
import HandSurgeryCard from "@/components/Services/HandSurgeryCard";
import AmbulatorySurgeryCard from "@/components/Services/AmbulatorySurgeryCard";
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function ServicesPage(): ReactElement {
  return (
    <main className="p-6 bg-transparent">
      <h1 className="text-3xl font-bold mb-4">Наші послуги</h1>
      <div className="container mx-auto px-4">
  <PlasticSurgeryCard />
  <PhlebologyCard />
  <ProctologyCard />
  <GeneralSurgeryCard />
  <HandSurgeryCard />
  <AmbulatorySurgeryCard />
      </div>
      <ConsultationCTA />
    </main>
  );
}
