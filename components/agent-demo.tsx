"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Loader2 } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const demoMessages: Record<string, string> = {
  "how do you help?":
    "I analyze your business operations and identify inefficiencies. I help you understand where manual work can be automated, where data visibility is lacking, and how to structure better systems. Think of me as a strategic partner who understands what makes operations efficient.",

  "what can you analyze?":
    "I can review your current workflows, tool stack, team structure, and business metrics. I identify bottlenecks, integration gaps, and opportunities for automation. For example, I can see if you're doing manual data entry that could be automated, or if your tools aren't talking to each other.",

  "tell me about automation":
    "Automation eliminates repetitive manual work. For a clinic, that might mean automating appointment reminders and patient follow-ups. For a law firm, it could be automating document management and billing. The result is freed-up staff time, fewer errors, and faster operations.",

  "what about dashboards?":
    "Dashboards give you real-time visibility into your business. Instead of pulling reports manually, you see key metrics instantly. Leadership makes better decisions with accurate data. Operational teams spot issues before they become problems.",

  "how long does implementation take?":
    "It depends on complexity. Simple automations can be live in 2-4 weeks. More comprehensive system rebuilds take 2-3 months. We work with your timeline and do phased rollouts so operations keep running smoothly.",

  "what's your process?":
    "First, we audit your current operations deeply. Then we design a custom blueprint for your business. Finally, we implement step-by-step and train your team. No generic solutions—everything is tailored to your specific needs.",
}

const suggestedQuestions = [
  "How do you help?",
  "What can you analyze?",
  "Tell me about automation",
  "What about dashboards?",
  "How long does implementation take?",
]

export function AgentDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the Auric Edge AI Systems Assistant. I help analyze business operations and identify opportunities for automation and efficiency. Ask me anything about how we can help your business run smarter.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (message?: string) => {
    const text = message || input
    if (!text.trim()) return

    // Add user message
    const userMessage = { role: "user" as const, content: text }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate API delay
    setTimeout(() => {
      const lowerText = text.toLowerCase()
      let response =
        "That's a great question! In a real implementation, this would be powered by AI. For now, here's a helpful response about how Auric Edge works."

      // Check for matching demo responses
      for (const [key, value] of Object.entries(demoMessages)) {
        if (lowerText.includes(key)) {
          response = value
          break
        }
      }

      const assistantMessage = { role: "assistant" as const, content: response }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="flex flex-col h-[600px] border border-border rounded-lg bg-card overflow-hidden">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, idx) => (
          <div key={idx} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${
                message.role === "user" ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-secondary text-foreground px-4 py-3 rounded-lg flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" />
              <p className="text-sm">Thinking...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested questions */}
      {messages.length === 1 && (
        <div className="px-6 py-4 border-t border-border bg-background">
          <p className="text-xs font-medium text-muted-foreground mb-3">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(question)}
                className="px-3 py-2 bg-secondary text-foreground text-sm rounded-md hover:bg-border transition-colors duration-200"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-border bg-background">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask me anything about systems and automation..."
            className="flex-1 px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!input.trim() || isLoading}
            className="p-3 bg-accent text-accent-foreground rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">This is a demo. For real AI implementation, contact us.</p>
      </div>
    </div>
  )
}
