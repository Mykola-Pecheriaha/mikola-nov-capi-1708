import type { ReactElement } from "react"
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function CockpitCystExcisionPage(): ReactElement {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Наші послуги - Видалення кісти в ділянці копчика</h1>
      {/* <Services /> */}
      <ConsultationCTA />
    </main>
  )
}
