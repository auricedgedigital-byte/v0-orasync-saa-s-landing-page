export function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 text-balance">
          See What Your Business Should Actually Look Like
        </h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Start with a free audit and discover the operational improvements waiting for you.
        </p>

        <a
          href="/audit"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-md text-base font-medium hover:opacity-90 transition-all duration-300"
        >
          Get My Free Systems Audit
        </a>
      </div>
    </section>
  )
}
