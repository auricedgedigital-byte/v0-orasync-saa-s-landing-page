import { INDUSTRY_SUBTYPES } from "@/lib/audit-data"

export function Industries() {
  const industries = [
    {
      key: "Healthcare",
      title: "Healthcare",
      subtitle: "Non-hospital healthcare practices",
    },
    {
      key: "Professional Services",
      title: "Professional Services",
      subtitle: "B2B service firms",
    },
    {
      key: "Multi-Location Business",
      title: "Multi-Location Businesses",
      subtitle: "Multiple branches",
    },
    {
      key: "Hospitality & Hotel Restaurants",
      title: "Hospitality & Hotels",
      subtitle: "Food service & lodging",
    },
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16 text-balance">
          We specialize in industries where operations matter most
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.key}
              className="p-8 border border-border rounded-md bg-card hover:bg-secondary transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">{industry.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{industry.subtitle}</p>
              <ul className="space-y-1">
                {INDUSTRY_SUBTYPES[industry.key as keyof typeof INDUSTRY_SUBTYPES]?.types.map((type, idx) => (
                  <li key={idx} className="text-sm text-foreground/70">
                    • {type}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
