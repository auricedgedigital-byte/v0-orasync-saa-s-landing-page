export function Solution() {
  const steps = [
    {
      number: "1",
      title: "Systems Audit",
      description: "We analyze your current operations, identify gaps, and spot opportunities.",
    },
    {
      number: "2",
      title: "Custom System Blueprint",
      description: "We design automated workflows and dashboards tailored to your business.",
    },
    {
      number: "3",
      title: "Implementation & Enablement",
      description: "We implement, train your team, and ensure adoption and success.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4 text-balance">How Auric Edge Works</h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          A straightforward 3-step process that transforms how your business operates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <span className="text-xl font-serif font-bold text-accent">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/audit"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity duration-300"
          >
            Start With a Free Audit
          </a>
        </div>
      </div>
    </section>
  )
}
