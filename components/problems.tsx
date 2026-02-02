export function Problems() {
  const problems = [
    "Manual, repetitive operational work",
    "Tools that don't integrate",
    "Poor visibility into performance",
    "Missed follow-ups and reactivations",
    "Leadership decisions made without clear data",
  ]

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12 text-balance">
          Most Growing Businesses Are Running on Broken Systems
        </h2>

        <div className="space-y-4">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <p className="text-lg text-foreground">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
