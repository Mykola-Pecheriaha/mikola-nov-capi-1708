
import type { ReactElement } from "react" 

import StartHendConsul from "@/components/HandSurgeonConsultation/StartHendConsul";
import ClinicHendConsul from "@/components/HandSurgeonConsultation/ClinicHendConsul";
import CommonDiseasHand  from "@/components/HandSurgeonConsultation/CommonDiseasHand";
// import ClinicsDupuytren from "@/components/Dupuytren/ClinicsDupuytren";
// import DiagnosticDupuytren from "@/components/Dupuytren/DiagnosticDupuytren";
// import TreatmentDupuytren from "@/components/Dupuytren/TreatmentDupuytren";
// import RehabilitationDupuytren from "@/components/Dupuytren/RehabilitationDupuytren";
import SidebarHandConsult from "@/components/HandSurgeonConsultation/SidebarHandConsult";

export default function HandSurgeonConsultationPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <StartHendConsul />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <ClinicHendConsul/>
            <CommonDiseasHand />
            {/* <ClinicsDupuytren /> */}
            {/* <DiagnosticDupuytren /> */}
            {/* <TreatmentDupuytren /> */}
            {/* <RehabilitationDupuytren /> */}
          </section>
          <SidebarHandConsult />
        </div>
      </div>
    </main>
  )
}
