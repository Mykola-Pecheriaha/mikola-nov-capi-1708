
import type { ReactElement } from "react" 

import PhleboSurgeonConsul from "@/components/PhleboSurgeonConsultation/PhleboSurgeonConsul";
import PhleboSimptomConsul from "@/components/PhleboSurgeonConsultation/PhleboSimptomConsul";
import PhleboAtmentConsul from "@/components/PhleboSurgeonConsultation/PhleboAtmentConsul";
import PhleboStagesConsul from "@/components/PhleboSurgeonConsultation/PhleboStagesConsul";


import SidebarPhlebo from "@/components/PhleboSurgeonConsultation/SidebarPhlebo";

export default function HandSurgLigamentumPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <PhleboSurgeonConsul />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            
            <PhleboSimptomConsul/>
            <PhleboStagesConsul />
            <PhleboAtmentConsul />
            
            {/* <CarpalOperTreatm /> */}
            {/* <CarpalReabilitation /> */}
            {/* <CarpalResult /> */}

          </section>
          <SidebarPhlebo />
        </div>
      </div>
    </main>
  )
}

