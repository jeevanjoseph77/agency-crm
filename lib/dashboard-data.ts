import {
  DollarSign,
  Flame,
  Users,
  CalendarCheck,
  UserPlus,
  FileSearch,
  Upload,
  GitBranch,
} from "lucide-react"

import type { QuickActionData, StatCardData } from "@/types/dashboard"

export const dashboardStats: StatCardData[] = [
  {
    label: "Total Leads",
    value: "248",
    icon: Users,
    trend: { value: "+12% this month", direction: "up" },
  },
  {
    label: "Hot Leads",
    value: "36",
    icon: Flame,
    trend: { value: "+4 this week", direction: "up" },
  },
  {
    label: "Meetings Today",
    value: "5",
    icon: CalendarCheck,
  },
  {
    label: "Revenue",
    value: "$84,200",
    icon: DollarSign,
    trend: { value: "+8% vs last month", direction: "up" },
  },
]

export const quickActions: QuickActionData[] = [
  {
    label: "Add Lead",
    description: "Create a new lead manually",
    icon: UserPlus,
    href: "/leads",
  },
  {
    label: "Generate Audit",
    description: "Run an AI-powered site audit",
    icon: FileSearch,
    href: "/audits",
  },
  {
    label: "Import Leads",
    description: "Bulk import from CSV or CRM",
    icon: Upload,
    href: "/leads",
  },
  {
    label: "View Pipeline",
    description: "See deals by stage",
    icon: GitBranch,
    href: "/pipeline",
  },
]
