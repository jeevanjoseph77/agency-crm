import { StatCard } from "@/components/dashboard/StatCard"
import { QuickActionCard } from "@/components/dashboard/QuickActionCard"
import { FadeIn } from "@/components/shared/FadeIn"
import { dashboardStats, quickActions } from "@/lib/dashboard-data"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <FadeIn className="flex flex-col gap-1">
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
          Welcome back, Jeevan
        </h1>
        <p className="text-sm text-muted-foreground">
          Here&apos;s what&apos;s happening across your agency today.
        </p>
      </FadeIn>

      <FadeIn
        delay={0.05}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </FadeIn>

      <FadeIn delay={0.1} className="flex flex-col gap-4">
        <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => (
            <QuickActionCard key={action.label} {...action} />
          ))}
        </div>
      </FadeIn>
    </div>
  )
}
