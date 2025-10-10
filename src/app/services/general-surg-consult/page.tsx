
import type { ReactElement } from "react" 

import GeneralSurgConsult from "@/components/GeneralSurgConsult/GeneralSurgConsult";
import GeneralSurgDiagnos from "@/components/GeneralSurgConsult/GeneralSurgDiagnos";
// import CommonDiseasHand  from "@/components/HandSurgeonConsultation/CommonDiseasHand";
// import PreoperativePreparation  from "@/components/HandSurgeonConsultation/PreoperativePreparation";
// import PerformingSurgery  from "@/components/HandSurgeonConsultation/PerformingSurgery";

import SidebarGeneralSurgConsult from "@/components/GeneralSurgConsult/SidebarGeneralSurgConsult ";

export default function GeneralSurgConsultPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <GeneralSurgConsult />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <GeneralSurgDiagnos/>
            {/* <CommonDiseasHand /> */}
            {/* <PreoperativePreparation /> */}
            {/* <PerformingSurgery /> */}

          </section>
          <SidebarGeneralSurgConsult />
        </div>
      </div>
    </main>
  )
}

