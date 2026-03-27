import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  title,
  description,
  buttonText = "Start Your Project",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-primary/5 dark:bg-primary/10 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        {description && (
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            {description}
          </p>
        )}
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
