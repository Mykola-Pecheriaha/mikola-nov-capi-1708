

import type { ReactElement } from "react" 

import ProctoHemorrhoiStart from "@/components/ProctoHemorrhoi/ProctoHemorrhoiStart";

import ProctoHemorrhoiStages from "@/components/ProctoHemorrhoi/ProctoHemorrhoiStages";

import ProctoHemorrhoiSimptoms  from "@/components/ProctoHemorrhoi/ProctoHemorrhoiSimptoms";

import ProctoHemorrhoiTerapi  from "@/components/ProctoHemorrhoi/ProctoHemorrhoiTerapi";

import ProctoHemorrhoiOper  from "@/components/ProctoHemorrhoi/ProctoHemorrhoiOper";

import SidebarProctoHemorrhoi from "@/components/ProctoHemorrhoi/SidebarProctoHemorrhoi";

export default function ProctologConsultationPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <ProctoHemorrhoiStart />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">

            <ProctoHemorrhoiStages />
            <ProctoHemorrhoiSimptoms />
            <ProctoHemorrhoiTerapi />
            <ProctoHemorrhoiOper />
 
            

          </section>
          <SidebarProctoHemorrhoi />
        </div>
      </div>
    </main>
  )
}

