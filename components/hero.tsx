"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtle accent */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 text-accent mb-8">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-sm font-medium">AI-Powered Systems Consulting</span>
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.1] text-balance mb-8">
          We Build Smart Systems That Run Your Business Better
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          AI-powered automation, dashboards, and workflows designed to reduce operational waste and increase revenue —
          without adding headcount.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <a
              href="/audit"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-md text-base font-medium hover:opacity-90 transition-all duration-300"
            >
              Get Your Free Systems Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <p className="text-xs text-muted-foreground">8 minutes · Instant personalized summary · No obligation</p>
          </div>
          <a
            href="/#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 text-foreground border border-border rounded-md hover:bg-secondary transition-colors duration-300 font-medium"
          >
            See How It Works
          </a>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-border" />
      </div>
    </section>
  )
}
