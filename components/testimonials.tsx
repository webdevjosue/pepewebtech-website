import { Card, CardContent } from "@/components/ui/card";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "PepeWebTech built our landing page in under a week. The AI-powered approach saved us thousands compared to the quotes we were getting from traditional agencies.",
    author: "Marcus R.",
    role: "Small Business Owner, Los Angeles",
  },
  {
    quote:
      "I needed an e-commerce site fast for my product launch. They delivered a beautiful store with payment processing and inventory management — everything just worked.",
    author: "Sarah K.",
    role: "Founder, Online Retail",
  },
  {
    quote:
      "The blog they set up for us has been driving consistent traffic. We went from zero organic visitors to hundreds per month. Best investment we made this year.",
    author: "David L.",
    role: "Restaurant Owner, San Diego",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real feedback from businesses we&apos;ve helped
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.author} className="relative overflow-hidden">
              <div className="absolute top-0 left-4 text-7xl text-primary/10 font-serif leading-none">
                &ldquo;
              </div>
              <CardContent className="pt-8 pb-6 px-6 relative z-10">
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  {t.quote}
                </p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
