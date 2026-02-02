import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Industries } from "@/components/industries"
import { Problems } from "@/components/problems"
import { Solution } from "@/components/solution"
import { FreeAudit } from "@/components/free-audit"
import { AfterAudit } from "@/components/after-audit"
import { WhyAuricEdge } from "@/components/why-auric-edge"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Industries />
      <Problems />
      <Solution />
      <FreeAudit />
      <AfterAudit />
      <WhyAuricEdge />
      <FinalCTA />
      <Footer />
    </main>
  )
}
