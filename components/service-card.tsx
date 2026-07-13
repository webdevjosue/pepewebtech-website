import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  features,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "premium-card p-8 group",
        className
      )}
    >
      {/* Icon with gradient glow */}
      <div className="mb-6 relative" aria-hidden="true">
        <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center border border-primary/10 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground tracking-tight">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>

      {features && features.length > 0 && (
        <ul className="mt-6 space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
              <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                <Check className="h-3 w-3 text-primary" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 pt-6 border-t border-border/60">
        <span className="text-lg font-bold text-primary">
          {price}
        </span>
      </div>
    </div>
  );
}
