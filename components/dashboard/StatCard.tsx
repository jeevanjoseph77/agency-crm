import { TrendingDown, TrendingUp } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import type { StatCardData } from "@/types/dashboard"

export function StatCard({ label, value, icon: Icon, trend }: StatCardData) {
  return (
    <Card>
      <CardContent className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-muted-foreground">{label}</span>
          <span className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            {value}
          </span>
          {trend && (
            <span
              className={cn(
                "flex items-center gap-1 text-xs font-medium",
                trend.direction === "up" ? "text-emerald-500" : "text-red-500"
              )}
            >
              {trend.direction === "up" ? (
                <TrendingUp className="size-3" />
              ) : (
                <TrendingDown className="size-3" />
              )}
              {trend.value}
            </span>
          )}
        </div>

        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <Icon className="size-4" />
        </div>
      </CardContent>
    </Card>
  )
}
