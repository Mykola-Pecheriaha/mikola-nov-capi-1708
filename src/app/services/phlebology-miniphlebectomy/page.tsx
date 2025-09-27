
import type { ReactElement } from "react" 


import PhlebologyMiniSurgeon from "@/components/PhlebologyMini/PhlebologyMiniSurgeon";

import PhlebologyMiniStage from "@/components/PhlebologyMini/PhlebologyMiniStage";
import PhlebologyMiniAdvant from "@/components/PhlebologyMini/PhlebologyMiniAdvant";


import SidebarPhleboMini from "@/components/PhlebologyMini/SidebarPhleboMini";

export default function PhlebologyMiniPage(): ReactElement {
  return (
    <main className="p-6">
      <div className="max-w-7xl mx-auto">
        <PhlebologyMiniSurgeon/>
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mt-8">
          <section className="md:w-3/4 w-full">
            
            <PhlebologyMiniStage/>
           <PhlebologyMiniAdvant/>


          </section>
          <SidebarPhleboMini/>
        </div>
      </div>
    </main>
  )
}

