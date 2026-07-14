"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { navigation } from "@/lib/navigation"

interface SidebarProps {
  onNavigate?: () => void
  className?: string
}

export function SidebarNav({ onNavigate, className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex flex-col gap-1", className)}>
      {navigation.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
        const Icon = item.icon

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              isActive && "bg-accent text-accent-foreground"
            )}
          >
            <Icon
              className={cn(
                "size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground",
                isActive && "text-foreground"
              )}
            />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

export function SidebarLogo() {
  return (
    <div className="flex items-center gap-2 px-2">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Sparkles className="size-4" />
      </div>
      <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
        AI Agency CRM
      </span>
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col gap-6 border-r border-border/60 bg-background/60 p-4 backdrop-blur-xl md:flex">
      <SidebarLogo />
      <SidebarNav />
    </aside>
  )
}
