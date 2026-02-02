export function AfterAudit() {
  const steps = [
    "Audit summary generated",
    "Custom sample system or draft prepared",
    "Optional walkthrough call",
    "Refinement and implementation if aligned",
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 text-balance">
          What Happens After the Audit?
        </h2>

        <div className="space-y-4 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold text-accent">
                {index + 1}
              </div>
              <p className="text-lg text-foreground">{step}</p>
            </div>
          ))}
        </div>

        <div className="p-6 bg-card border border-border rounded-md">
          <p className="text-foreground">
            <span className="font-semibold">No pressure. No hard selling.</span> We believe in earning your trust
            through results.
          </p>
        </div>
      </div>
    </section>
  )
}
