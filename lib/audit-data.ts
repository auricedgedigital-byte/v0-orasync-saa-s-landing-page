export const INDUSTRY_SUBTYPES = {
  Healthcare: {
    types: ["Medical practices", "Dental offices", "Physical therapy", "Urgent care centers"],
  },
  "Professional Services": {
    types: ["Accounting & tax firms", "Law firms", "Consulting", "Engineering firms"],
  },
  "Multi-Location Business": {
    types: ["Retail chains", "Restaurant groups", "Service franchises", "Salons & spas"],
  },
  "Hospitality & Hotel Restaurants": {
    types: ["Hotels & resorts", "Restaurants", "Cafes & bars", "Event venues"],
  },
}

export interface AuditAnswers {
  industry: string
  companyName: string
  staffSize: string
  operationsStatus: string
  reactivationStatus: string
  tools: string[]
  visibility: string
  email: string
}

export interface AuditScore {
  overall: number
  maturityLevel: "Foundational" | "Developing" | "Optimized"
  operationsScore: number
  reactivationScore: number
  visibilityScore: number
  staffScore: number
  toolScore: number
}

export function calculateAuditScore(answers: AuditAnswers): AuditScore {
  let operationsScore = 0
  let reactivationScore = 0
  let visibilityScore = 0
  let staffScore = 0
  let toolScore = 0

  // Operations scoring
  if (answers.operationsStatus === "manual") operationsScore = 20
  else if (answers.operationsStatus === "partial") operationsScore = 50
  else if (answers.operationsStatus === "automated") operationsScore = 85

  // Reactivation scoring
  if (answers.reactivationStatus === "no") reactivationScore = 15
  else if (answers.reactivationStatus === "basic") reactivationScore = 45
  else if (answers.reactivationStatus === "systematic") reactivationScore = 80

  // Visibility scoring
  if (answers.visibility === "no") visibilityScore = 10
  else if (answers.visibility === "partial") visibilityScore = 50
  else if (answers.visibility === "complete") visibilityScore = 85

  // Staff scoring
  if (answers.staffSize === "1-5") staffScore = 30
  else if (answers.staffSize === "6-20") staffScore = 50
  else if (answers.staffSize === "21-50") staffScore = 70
  else if (answers.staffSize === "50+") staffScore = 85

  // Tool scoring
  const toolCount = answers.tools.length
  if (toolCount === 0) toolScore = 20
  else if (toolCount === 1) toolScore = 35
  else if (toolCount === 2) toolScore = 55
  else if (toolCount === 3) toolScore = 75
  else toolScore = 90

  const overall = Math.round(
    (operationsScore * 0.3 + reactivationScore * 0.2 + visibilityScore * 0.2 + staffScore * 0.15 + toolScore * 0.15) /
      1,
  )

  let maturityLevel: "Foundational" | "Developing" | "Optimized"
  if (overall <= 40) maturityLevel = "Foundational"
  else if (overall <= 70) maturityLevel = "Developing"
  else maturityLevel = "Optimized"

  return {
    overall,
    maturityLevel,
    operationsScore,
    reactivationScore,
    visibilityScore,
    staffScore,
    toolScore,
  }
}

export const INDUSTRY_ISSUES: Record<string, string[]> = {
  Healthcare: [
    "Patient reactivation is manual and inconsistent across locations",
    "Staff scheduling lacks visibility into real-time operational status",
    "Multi-location patient data is fragmented across separate systems",
  ],
  "Professional Services": [
    "Billable hours tracking and client management are disconnected",
    "Project timeline visibility is limited across team members",
    "Renewal and upsell opportunities are missed due to manual tracking",
  ],
  "Multi-Location Business": [
    "Operations visibility is limited to location-level managers",
    "Inconsistent processes across locations create quality gaps",
    "Customer data is siloed by location, limiting cross-location insights",
  ],
  "Hospitality & Hotel Restaurants": [
    "Reservation and occupancy data doesn't drive real-time operations decisions",
    "Guest preference data is scattered across multiple systems",
    "Staff scheduling doesn't adapt to real-time occupancy changes",
  ],
}

export const INDUSTRY_RECOMMENDATIONS: Record<string, string[]> = {
  Healthcare: [
    "Implement automated patient reactivation based on last visit dates",
    "Create unified scheduling view across all locations",
    "Centralize patient records with automated flagging for follow-ups",
    "Set up automated appointment reminders and confirmations",
    "Build real-time operational dashboard visible to all staff",
  ],
  "Professional Services": [
    "Integrate time tracking with project management and billing",
    "Create automated alerts for project milestones and risks",
    "Build renewal calendar with automated client outreach",
    "Implement real-time project dashboard for team visibility",
    "Automate invoice generation and payment tracking",
  ],
  "Multi-Location Business": [
    "Deploy unified dashboard visible to all locations and corporate",
    "Implement automated store operation reports and alerts",
    "Create location-specific and corporate-level KPI tracking",
    "Build automated inventory alerts across locations",
    "Set up automated compliance and procedure auditing",
  ],
  "Hospitality & Hotel Restaurants": [
    "Integrate reservation data with housekeeping and staffing",
    "Create occupancy-based dynamic staffing recommendations",
    "Build guest preference profiles with AI-powered personalization",
    "Implement automated check-in/check-out workflows",
    "Create real-time operations dashboard for duty managers",
  ],
}

export const INDUSTRY_BLUEPRINTS: Record<string, string> = {
  Healthcare: "Patient Lifecycle Automation & Team Visibility Blueprint",
  "Professional Services": "Project-to-Billing Automation & Team Coordination Blueprint",
  "Multi-Location Business": "Enterprise Operations Visibility & Consistency Blueprint",
  "Hospitality & Hotel Restaurants": "Guest Experience & Operational Excellence Blueprint",
}

export function getScoreBucket(score: AuditScore | number): "Foundational" | "Developing" | "Optimized" {
  const scoreValue = typeof score === "number" ? score : score.overall
  if (scoreValue <= 40) return "Foundational"
  if (scoreValue <= 70) return "Developing"
  return "Optimized"
}

export function getIndustrySpecificIssues(industry: string, _answers: any): string[] {
  return INDUSTRY_ISSUES[industry] || INDUSTRY_ISSUES["Professional Services"]
}

export function getIndustrySpecificSystems(industry: string): string[] {
  return INDUSTRY_RECOMMENDATIONS[industry] || INDUSTRY_RECOMMENDATIONS["Professional Services"]
}
