import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResultsContent } from "@/components/results-content"

export default function AuditResultsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 pt-24 pb-12 px-6">
        <Suspense fallback={<div className="max-w-4xl mx-auto py-20 text-center">Loading...</div>}>
          <ResultsContent />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
