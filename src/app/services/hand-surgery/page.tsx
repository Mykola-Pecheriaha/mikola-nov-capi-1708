
import type { ReactElement } from "react" 

import StartHandSurgLigamentum from "@/components/HandSurgLigamentum/StartHandSurgLigamentum";
import KarvenHand from "@/components/HandSurgLigamentum/KarvenHand";
// import ClinicHendConsul from "@/components/HandSurgeonConsultation/ClinicHendConsul";
// import CommonDiseasHand  from "@/components/HandSurgeonConsultation/CommonDiseasHand";
// import PreoperativePreparation  from "@/components/HandSurgeonConsultation/PreoperativePreparation";
// import PerformingSurgery  from "@/components/HandSurgeonConsultation/PerformingSurgery";

import SidebarHandSurgLigamentum from "@/components/HandSurgLigamentum/SidebarHandSurgLigamentum";

export default function HandSurgLigamentumPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <StartHandSurgLigamentum />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <KarvenHand/>
            {/* <CommonDiseasHand /> */}
            {/* <PreoperativePreparation /> */}
            {/* <PerformingSurgery /> */}

          </section>
          <SidebarHandSurgLigamentum />
        </div>
      </div>
    </main>
  )
}
