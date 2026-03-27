import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  price,
  features,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow",
        className
      )}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      {features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-4 inline-block text-sm font-semibold text-primary">
        {price}
      </span>
    </div>
  );
}
