
import type { ReactElement } from "react" 


import PhleboStageLaser from "@/components/PhlebologyLaser/PhleboStageLaser";

import PhleboSurgeonLaser from "@/components/PhlebologyLaser/PhleboSurgeonLaser";
import PhleboReabilLaser from "@/components/PhlebologyLaser/PhleboReabilLaser";
import PhleboEndLaser from "@/components/PhlebologyLaser/PhleboEndLaser";

import SidebarPhleboLaser from "@/components/PhlebologyLaser/SidebarPhleboLaser";

export default function PhlebologyLaserPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <PhleboSurgeonLaser />
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            
            <PhleboStageLaser/>
            <PhleboReabilLaser />
            <PhleboEndLaser />

          </section>
          <SidebarPhleboLaser />
        </div>
      </div>
    </main>
  )
}

