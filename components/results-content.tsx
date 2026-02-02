"use client"

import { useSearchParams } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { AuditResults } from "@/components/audit-results"

export function ResultsContent() {
  const searchParams = useSearchParams()
  const company = searchParams.get("company") || "Your Business"
  const industry = searchParams.get("industry") || ""
  const score = Number.parseInt(searchParams.get("score") || "0")
  const bucket = searchParams.get("bucket") || "Developing"

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Your Systems Audit Results</h1>
        <p className="text-lg text-muted-foreground">
          Based on your responses, here's what we found and how we can help.
        </p>
      </div>

      <AuditResults company={company} industry={industry} score={score} bucket={bucket} />

      {/* CTA Section */}
      <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to See This In Action?</h2>
        <p className="text-muted-foreground mb-6">
          Schedule a brief walkthrough call to discuss your specific situation and next steps.
        </p>
        <a
          href="/book-call"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-all duration-300"
        >
          Book a Walkthrough Call
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  )
}
