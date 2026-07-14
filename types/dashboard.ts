import type { LucideIcon } from "lucide-react"

export interface StatCardData {
  label: string
  value: string
  icon: LucideIcon
  trend?: {
    value: string
    direction: "up" | "down"
  }
}

export interface QuickActionData {
  label: string
  description: string
  icon: LucideIcon
  href: string
}
