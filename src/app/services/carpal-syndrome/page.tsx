
import type { ReactElement } from "react" 

import StartCarpalSyndrome from "@/components/CarpalSyndrome/StartCarpalSyndrome";
import CarpalDetails from "@/components/CarpalSyndrome/CarpalDetails";
import CarpalSymptoms from "@/components/CarpalSyndrome/CarpalSymptoms";
import CarpalTest from "@/components/CarpalSyndrome/CarpalTest";
// import HottHandreAtment from "@/components/HandSurgLigamentum/HottHandreAtment";
// import GangLigamentum  from "@/components/HandSurgLigamentum/GangLigamentum";


import SidebarCarpal from "@/components/CarpalSyndrome/SidebarCarpal";

export default function HandSurgLigamentumPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <StartCarpalSyndrome />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            <CarpalDetails/>
            <CarpalSymptoms/>
            <CarpalTest />
            {/* <HottHandreAtment /> */}
            {/* <GangLigamentum /> */}

          </section>
          <SidebarCarpal />
        </div>
      </div>
    </main>
  )
}
