interface PagePlaceholderProps {
  title: string
  description: string
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center gap-2 rounded-xl border border-dashed border-border/60 p-8">
      <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="max-w-md text-sm text-muted-foreground">{description}</p>
      <span className="mt-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
        Coming soon
      </span>
    </div>
  )
}
