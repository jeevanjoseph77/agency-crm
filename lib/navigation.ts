import {
  LayoutDashboard,
  Users,
  GitBranch,
  ClipboardCheck,
  Building2,
  BarChart3,
  Settings,
} from "lucide-react"

import type { NavItem } from "@/types/navigation"

export const navigation: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Leads", href: "/leads", icon: Users },
  { label: "Pipeline", href: "/pipeline", icon: GitBranch },
  { label: "Audits", href: "/audits", icon: ClipboardCheck },
  { label: "Clients", href: "/clients", icon: Building2 },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
]
