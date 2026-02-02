export function FreeAudit() {
  const features = ["5–10 minute guided audit", "Industry-specific questions", "Immediate insights", "No obligation"]

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 text-balance">
          Free Business Systems Audit
        </h2>

        <div className="space-y-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-lg text-foreground">{feature}</p>
            </div>
          ))}
        </div>

        <a
          href="/audit"
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-md font-medium hover:opacity-90 transition-opacity duration-300"
        >
          Take the Free Audit
        </a>
      </div>
    </section>
  )
}
