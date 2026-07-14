import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import type { QuickActionData } from "@/types/dashboard"

export function QuickActionCard({
  label,
  description,
  icon: Icon,
  href,
}: QuickActionData) {
  return (
    <Link href={href} className="block">
      <Card className="group/action transition-colors hover:bg-accent">
        <CardContent className="flex items-center gap-4">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground group-hover/action:bg-background">
            <Icon className="size-4" />
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <span className="text-sm font-medium text-foreground">{label}</span>
            <span className="truncate text-xs text-muted-foreground">
              {description}
            </span>
          </div>

          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5" />
        </CardContent>
      </Card>
    </Link>
  )
}
