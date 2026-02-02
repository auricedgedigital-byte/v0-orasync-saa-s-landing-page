export function WhyAuricEdge() {
  const reasons = [
    "Systems-first, not tool-first",
    "Industry-specific solutions",
    "ROI-focused decisions",
    "Built for real operations",
    "Scalable and maintainable systems",
  ]

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12 text-balance">Why Choose Auric Edge?</h2>

        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-md hover:bg-background transition-colors duration-300"
            >
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-lg text-foreground">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
