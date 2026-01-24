import type { ReactElement } from "react"
import ConsultationCTA from '@/components/About/ConsultationCTA';

export default function HemorrhoidectomyPage(): ReactElement {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Наші послуги - Гемороїдектомія</h1>
      {/* <Services /> */}
      <ConsultationCTA />
    </main>
  )
}
