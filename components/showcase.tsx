import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ShowcaseItem {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  external?: boolean;
}

const showcaseItems: ShowcaseItem[] = [
  {
    icon: "🌐",
    title: "PepeWebTech",
    description:
      "Complete business platform with modern design, dark/light mode, pricing, and 50+ blog posts.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    href: "https://www.pepewebtech.com",
    external: true,
  },
  {
    icon: "⚡",
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio showcasing full-stack development skills and project history.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
    href: "https://webdevjosue.github.io",
    external: true,
  },
  {
    icon: "🚀",
    title: "Your Project Here",
    description:
      "Have a vision? We build custom websites, apps, and e-commerce solutions tailored to your business.",
    tags: ["Web", "App", "E-Commerce"],
    href: "/contact",
  },
];

export function Showcase() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Recent Projects
          </h2>
          <p className="mt-3 text-muted-foreground">
            Websites and solutions built with modern AI-powered development
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item) => (
            <Card key={item.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-0 pt-6">
                <div className="text-5xl mb-3 text-center">{item.icon}</div>
              </CardHeader>
              <CardContent className="pt-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {item.external ? "View Live Site →" : "Start Your Project →"}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="https://webdevjosue.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View Full Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
