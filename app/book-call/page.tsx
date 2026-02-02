import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, Users, CheckCircle2 } from "lucide-react"

export default function BookCallPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Schedule a Walkthrough Call</h1>
            <p className="text-lg text-muted-foreground">
              Let's discuss your business, your challenges, and how Auric Edge can help you build smarter systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* What to Expect */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-6">What to Expect</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">30 Minutes</h3>
                      <p className="text-muted-foreground">Focused discussion about your operations and goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Personal Attention</h3>
                      <p className="text-muted-foreground">
                        One-on-one with a systems strategist who understands your industry.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Clear Next Steps</h3>
                      <p className="text-muted-foreground">Actionable roadmap for your business transformation.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What We'll Review */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-6">What We'll Review</h2>
                <div className="space-y-3">
                  {[
                    "Your audit results and the score breakdown",
                    "Your current tech stack and how tools integrate (or don't)",
                    "Key operational bottlenecks and manual processes",
                    "Opportunities for automation and efficiency gains",
                    "Industry-specific best practices for your business",
                    "Timeline, investment, and phased implementation approach",
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{topic}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* What You'll See */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-6">What You'll See</h2>
                <div className="space-y-3">
                  {[
                    "Industry-specific system blueprints tailored to your business",
                    "Sample automation workflows and dashboard mockups",
                    "ROI projections based on your current operations",
                    "Comparison of approaches and what's recommended for you",
                    "Implementation timeline and team resource requirements",
                    "Success metrics and how we'll measure impact",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Why Schedule */}
              <section className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Why Schedule a Call?</h3>
                <p className="text-muted-foreground mb-4">
                  Every business is unique. We don't believe in one-size-fits-all solutions. Your audit gives us a
                  snapshot, but a walkthrough call lets us:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Understand your specific constraints, goals, and timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Show you real examples from similar businesses in your industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Answer your questions and address concerns directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Recommend the exact approach that works for you</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">No sales pitch. Just real strategic conversation.</p>
              </section>
            </div>

            {/* Right: Calendar Placeholder */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">Pick a Time</h3>

                {/* Timezone selection */}
                <div className="space-y-3 mb-6">
                  <p className="text-sm text-muted-foreground">Select your timezone:</p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 p-3 rounded-md border border-border hover:bg-secondary cursor-pointer transition-colors">
                      <input type="radio" name="timezone" defaultChecked className="w-4 h-4" />
                      <span className="text-sm text-foreground">EST (Eastern)</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 rounded-md border border-border hover:bg-secondary cursor-pointer transition-colors">
                      <input type="radio" name="timezone" className="w-4 h-4" />
                      <span className="text-sm text-foreground">CST (Central)</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 rounded-md border border-border hover:bg-secondary cursor-pointer transition-colors">
                      <input type="radio" name="timezone" className="w-4 h-4" />
                      <span className="text-sm text-foreground">PST (Pacific)</span>
                    </label>
                  </div>
                </div>

                {/* Calendar Embed Placeholder */}
                <div className="w-full h-64 bg-secondary rounded-lg border border-border flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground font-medium">Calendar Integration</p>
                    <p className="text-xs text-muted-foreground mt-1">Calendly/Acuity embed</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  Once confirmed, you'll receive a calendar invite and a Zoom link via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
