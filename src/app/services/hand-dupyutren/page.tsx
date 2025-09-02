import type { ReactElement } from "react"
import Dupuytren from "@/components/Dupuytren/Dupuytren";
import PrychynyDyupyitrena from "@/components/Dupuytren/PrychynyDyupyitrena";
import StagesDupuytren from "@/components/Dupuytren/StagesDupuytren";
import ClinicsDupuytren from "@/components/Dupuytren/ClinicsDupuytren";
import DiagnosticDupuytren from "@/components/Dupuytren/DiagnosticDupuytren";
import TreatmentDupuytren from "@/components/Dupuytren/TreatmentDupuytren";
import RehabilitationDupuytren from "@/components/Dupuytren/RehabilitationDupuytren";

export default function DupuytrenPage(): ReactElement {
  return (
    <main className="p-6">
      <Dupuytren />
      <div className="my-8" />
      <PrychynyDyupyitrena />
      <StagesDupuytren />
      <ClinicsDupuytren />
      <DiagnosticDupuytren />
      <TreatmentDupuytren />
      <RehabilitationDupuytren />
    </main>
  )
}
