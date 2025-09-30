

import type { ReactElement } from "react" 

import ProctoHendConsul from "@/components/ProctoSurgeonConsultation/ProctoHendConsul";

import ProctoSimptomConsul from "@/components/ProctoSurgeonConsultation/ProctoSimptomConsul";

import ProctoPreparationConsul from "@/components/ProctoSurgeonConsultation/ProctoPreparationConsul";

import SidebarProctoConsult from "@/components/ProctoSurgeonConsultation/SidebarProctoConsult";

export default function ProctologConsultationPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <ProctoHendConsul />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">

            <ProctoSimptomConsul />
            <ProctoPreparationConsul />
            {/* <PhleboAtmentConsul /> */}
 
            

          </section>
          <SidebarProctoConsult />
        </div>
      </div>
    </main>
  )
}

