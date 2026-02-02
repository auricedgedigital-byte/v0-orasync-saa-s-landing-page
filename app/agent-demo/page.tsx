import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgentDemo } from "@/components/agent-demo"

export default function AgentDemoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              Demo Systems Assistant
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">AI Systems Assistant</h1>
            <p className="text-lg text-muted-foreground">
              See how our AI systems assistant helps analyze operations, identify bottlenecks, and recommend strategic
              improvements. This is a demo—real implementations will be powered by live AI.
            </p>
          </div>

          <AgentDemo />

          {/* Context note */}
          <div className="mt-12 p-6 bg-secondary border border-border rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">About This Demo</h3>
            <p className="text-sm text-muted-foreground">
              This demo assistant can answer questions about systems automation, dashboards, implementation timelines,
              and our process. In production, the assistant will have access to your audit data and provide personalized
              recommendations based on your specific business situation and answers.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
