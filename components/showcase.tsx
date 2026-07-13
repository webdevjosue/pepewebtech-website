import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Globe, Zap, Scissors, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ShowcaseItem {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  href: string;
  external?: boolean;
  thumbnail?: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    icon: Globe,
    title: "PepeWebTech",
    description:
      "Complete business platform with modern design, dark/light mode, pricing, and 96+ blog posts.",
    tags: ["Fast Loading", "SEO Optimized", "Responsive"],
    href: "https://www.pepewebtech.com",
    external: true,
    thumbnail: "/images/pepewebtech-thumb.png",
  },
  {
    icon: Zap,
    title: "PepeTech",
    description:
      "Developer tools platform with 12 free utilities. 100% client-side processing, zero tracking.",
    tags: ["SEO Optimized", "Sub-second Load", "Custom SVG Icons"],
    href: "https://pepetech.com",
    external: true,
    thumbnail: "/images/portfolio-thumb.png",
  },
  {
    icon: Scissors,
    title: "The Butchers Barbershop",
    description:
      "Premium barbershop website in Murrieta, CA. Modern design with booking and services showcase.",
    tags: ["Local Business", "Booking", "Mobile Optimized"],
    href: "https://webpage-eight-bice.vercel.app",
    external: true,
    thumbnail: "/images/butchers-thumb.png",
  },
];

export function Showcase() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Recent Projects
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Websites and solutions built with modern AI-powered development
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item) => (
            <div key={item.title} className="premium-card group">
              {/* Thumbnail with overlay */}
              <div className="relative overflow-hidden">
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center text-center h-52 bg-muted/30" aria-hidden="true">
                    <item.icon className="h-12 w-12 text-primary" aria-hidden="true" />
                  </div>
                )}
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Arrow icon on hover */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-foreground tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  View Live Site
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
