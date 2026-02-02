"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuditForm } from "@/components/audit-form"

export default function AuditPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    industry: "",
    companySize: "",
    mainChallenges: [],
    tools: "",
    dataAccess: "",
    timeline: "",
  })

  const handleSubmit = (data: typeof formData) => {
    setFormData(data)
    // Redirect to results page with data
    router.push("/audit/results?industry=" + encodeURIComponent(data.industry))
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 pt-24 pb-12 px-6">
        <AuditForm onSubmit={handleSubmit} />
      </div>
      <Footer />
    </main>
  )
}
