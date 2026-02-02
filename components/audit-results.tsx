"use client"

import { Download, CheckCircle2, AlertCircle } from "lucide-react"
import { getIndustrySpecificIssues, getIndustrySpecificSystems } from "@/lib/audit-data"

interface AuditResultsProps {
  company: string
  industry: string
  score: number
  bucket: string
}

export function AuditResults({ company, industry, score, bucket }: AuditResultsProps) {
  const issues = getIndustrySpecificIssues(industry, {})
  const systems = getIndustrySpecificSystems(industry)

  const maturityDetails = {
    Foundational: {
      description:
        "You have essential operations in place, but significant opportunities for automation and integration.",
      color: "bg-orange-500/10 border-orange-200",
      textColor: "text-orange-700",
    },
    Developing: {
      description: "You've implemented some automation, but there are clear gaps preventing operational excellence.",
      color: "bg-blue-500/10 border-blue-200",
      textColor: "text-blue-700",
    },
    Optimized: {
      description: "You have a strong operational foundation with excellent automation and integration.",
      color: "bg-green-500/10 border-green-200",
      textColor: "text-green-700",
    },
  }

  const details = maturityDetails[bucket as keyof typeof maturityDetails] || maturityDetails.Foundational

  return (
    <div className="space-y-12">
      {/* Header with score */}
      <section>
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">{company} — Systems Audit Summary</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Based on your responses, here's a detailed analysis of your operational systems.
        </p>

        {/* Score card */}
        <div className={`p-8 rounded-lg border-2 ${details.color}`}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">YOUR AUDIT SCORE</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-5xl font-bold ${details.textColor}`}>{score}</span>
                <span className="text-xl text-muted-foreground">/100</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-muted-foreground mb-2">MATURITY LEVEL</p>
              <p className={`text-2xl font-semibold ${details.textColor}`}>{bucket}</p>
            </div>
          </div>
          <p className="mt-6 text-foreground">{details.description}</p>
        </div>
      </section>

      {/* Key findings */}
      <section>
        <h2 className="text-2xl font-serif text-foreground mb-8">Key Operational Gaps</h2>
        <div className="grid gap-4">
          {issues.map((issue, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
              <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <p className="text-foreground">{issue}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunities */}
      <section>
        <h2 className="text-2xl font-serif text-foreground mb-8">Recommended Systems & Automation</h2>
        <div className="grid gap-4">
          {systems.slice(0, 5).map((system, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-foreground font-medium">{system}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample system */}
      <section>
        <h2 className="text-2xl font-serif text-foreground mb-8">Industry-Specific System Blueprint</h2>
        <div className="p-8 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-4">{industry} — Recommended Operations System</h3>
          <ul className="space-y-3 mb-6">
            {systems.slice(0, 5).map((system, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-muted-foreground">{system}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mb-6">
            This blueprint is specifically designed for {industry} businesses to eliminate manual work, improve
            visibility, and increase operational efficiency.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium border border-border">
            <Download size={18} />
            Download Blueprint (Demo PDF)
          </button>
        </div>
      </section>

      {/* Next steps */}
      <section>
        <h2 className="text-2xl font-serif text-foreground mb-8">Next Steps</h2>
        <div className="grid gap-4">
          <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold flex-shrink-0 text-sm">
              1
            </div>
            <div>
              <p className="font-semibold text-foreground">Review This Audit Report</p>
              <p className="text-sm text-muted-foreground">
                Understand the findings and opportunities for your business.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold flex-shrink-0 text-sm">
              2
            </div>
            <div>
              <p className="font-semibold text-foreground">Schedule a Walkthrough Call</p>
              <p className="text-sm text-muted-foreground">
                We'll discuss your specific opportunities and answer all your questions.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold flex-shrink-0 text-sm">
              3
            </div>
            <div>
              <p className="font-semibold text-foreground">Explore Implementation Options</p>
              <p className="text-sm text-muted-foreground">
                Only if you're aligned, we'll outline the implementation plan and timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
        <a
          href="/book-call"
          className="flex-1 px-6 py-4 bg-accent text-accent-foreground rounded-md hover:opacity-90 transition-opacity font-medium text-center"
        >
          Book a Walkthrough Call
        </a>
        <button className="flex-1 px-6 py-4 border border-border text-foreground rounded-md hover:bg-secondary transition-colors font-medium">
          <Download className="w-4 h-4 inline mr-2" />
          Download Audit Summary
        </button>
      </section>
    </div>
  )
}
