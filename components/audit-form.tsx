"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { calculateAuditScore, getScoreBucket, type AuditAnswers } from "@/lib/audit-data"

interface AuditFormProps {
  onSubmit?: (data: AuditAnswers) => void
}

export function AuditForm({ onSubmit }: AuditFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<Partial<AuditAnswers>>({
    industry: "",
    staff: "",
    operations: "",
    reactivation: "",
    visibility: "",
    tools: [],
    dataConfidence: "",
    company: "",
    email: "",
  })

  const industryOptions = [
    { value: "Healthcare", label: "Healthcare (Clinics & Dental)" },
    { value: "Professional Services", label: "Professional Services" },
    { value: "Multi-Location Business", label: "Multi-Location Businesses" },
    { value: "Hospitality", label: "Hospitality & Hotel Restaurants" },
  ]

  const steps = [
    {
      title: "What industry do you operate in?",
      description: "Select the industry that best matches your business",
      field: "industry",
      type: "select",
      options: industryOptions,
    },
    {
      title: "How many active staff members?",
      description: "This helps us understand your operational scale",
      field: "staff",
      type: "select",
      options: [
        { value: "1-5", label: "1-5 employees" },
        { value: "6-20", label: "6-20 employees" },
        { value: "21-50", label: "21-50 employees" },
        { value: "50+", label: "50+ employees" },
      ],
    },
    {
      title: "How are daily operations managed?",
      description: "Tell us about your current operational practices",
      field: "operations",
      type: "select",
      options: [
        { value: "Mostly manual", label: "Mostly manual" },
        { value: "Partially systemized", label: "Partially systemized" },
        { value: "Mostly automated", label: "Mostly automated" },
      ],
    },
    {
      title: "Do you actively re-engage past customers/clients?",
      description: "Understanding your retention practices",
      field: "reactivation",
      type: "select",
      options: [
        { value: "Yes (automated)", label: "Yes (automated)" },
        { value: "Yes (manual)", label: "Yes (manual)" },
        { value: "No", label: "No" },
      ],
    },
    {
      title: "Select the tools you currently use",
      description: "Choose all that apply — we'll assess your tech stack",
      field: "tools",
      type: "multi-select",
      groups: [
        {
          title: "CRM",
          options: ["HubSpot", "Salesforce", "Zoho", "None / Not sure"],
        },
        {
          title: "Scheduling / Booking",
          options: ["Calendly", "OpenTable", "Google Calendar", "None"],
        },
        {
          title: "POS / Payments",
          options: ["Square", "Toast", "Stripe", "PayPal", "None"],
        },
        {
          title: "Email / Marketing",
          options: ["Mailchimp", "ActiveCampaign", "WhatsApp Business", "None"],
        },
      ],
    },
    {
      title: "What's your real-time visibility into operations?",
      description: "How do you track and measure business performance?",
      field: "visibility",
      type: "select",
      options: [
        { value: "Yes (dashboards)", label: "Yes (dashboards)" },
        { value: "Partial (reports/spreadsheets)", label: "Partial (reports/spreadsheets)" },
        { value: "No", label: "No" },
      ],
    },
  ]

  // Lead capture step
  const leadStep = {
    title: "Let's personalize your results",
    description: "We'll send your audit summary to this email",
    fields: [
      { key: "company", label: "Company Name", placeholder: "Your company name", required: true },
      { key: "email", label: "Work Email", placeholder: "your@company.com", required: true },
    ],
  }

  const currentStep = steps[step]
  const isLeadCapture = step === steps.length
  const isLastStep = step === steps.length

  const canContinue = isLeadCapture
    ? Boolean(formData.company?.trim()) && Boolean(formData.email?.trim())
    : currentStep.field === "tools"
      ? Boolean(formData.tools?.length)
      : Boolean(formData[currentStep.field as keyof typeof formData])

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [currentStep.field]: value,
    }))
  }

  const handleToolChange = (tool: string) => {
    setFormData((prev) => {
      const currentTools = (prev.tools || []) as string[]
      return {
        ...prev,
        tools: currentTools.includes(tool) ? currentTools.filter((t) => t !== tool) : [...currentTools, tool],
      }
    })
  }

  const handleTextChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSubmit = async () => {
    if (isLastStep && formData.company && formData.email) {
      const score = calculateAuditScore(formData as AuditAnswers)
      const bucket = getScoreBucket(score)

      // Store in session/URL for results page
      const params = new URLSearchParams({
        industry: formData.industry || "",
        company: formData.company,
        email: formData.email,
        score: score.toString(),
        bucket,
        answers: JSON.stringify(formData),
      })

      if (onSubmit) {
        onSubmit(formData as AuditAnswers)
      } else {
        router.push(`/audit/results?${params.toString()}`)
      }
    } else if (step < steps.length) {
      setStep(step + 1)
    }
  }

  const progressPercent = Math.round(((step + 1) / (steps.length + 1)) * 100)

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            {isLeadCapture ? "Final step" : `Step ${step + 1} of ${steps.length}`}
          </p>
          <p className="text-sm font-medium text-foreground">{progressPercent}%</p>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question container */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
          {isLeadCapture ? leadStep.title : currentStep.title}
        </h1>
        <p className="text-muted-foreground mb-8">{isLeadCapture ? leadStep.description : currentStep.description}</p>

        {/* Lead capture form */}
        {isLeadCapture && (
          <div className="space-y-4">
            {leadStep.fields.map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                <input
                  type={field.key === "email" ? "email" : "text"}
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof typeof formData] || ""}
                  onChange={(e) => handleTextChange(field.key, e.target.value)}
                  className="w-full p-4 rounded-md border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  required={field.required}
                />
              </div>
            ))}
            <p className="text-xs text-muted-foreground mt-4">We'll use this only to send your audit summary.</p>
          </div>
        )}

        {/* Single select fields */}
        {!isLeadCapture &&
          (currentStep.type === "select" || currentStep.type === "multi-select") &&
          !currentStep.groups && (
            <div className="space-y-3">
              {currentStep.options?.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelectChange(option.value)}
                  className={`w-full p-4 rounded-md border transition-all duration-200 text-left font-medium ${
                    formData[currentStep.field as keyof typeof formData] === option.value
                      ? "border-accent bg-accent/5 text-foreground"
                      : "border-border bg-background text-foreground hover:border-accent/50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}

        {/* Multi-select with groups (tools) */}
        {!isLeadCapture && currentStep.groups && (
          <div className="space-y-6">
            {currentStep.groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-foreground mb-3">{group.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {group.options.map((tool) => (
                    <button
                      key={tool}
                      onClick={() => handleToolChange(tool)}
                      className={`p-3 rounded-md border transition-all duration-200 text-center text-sm font-medium ${
                        (formData.tools || []).includes(tool)
                          ? "border-accent bg-accent/5 text-foreground"
                          : "border-border bg-background text-foreground hover:border-accent/50"
                      }`}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="flex items-center gap-2 px-6 py-3 text-foreground border border-border rounded-md hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
        >
          <ChevronLeft size={18} />
          Back
        </button>

        <button
          onClick={handleSubmit}
          disabled={!canContinue}
          className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium ml-auto"
        >
          {isLastStep ? "Get Results" : "Next"}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
