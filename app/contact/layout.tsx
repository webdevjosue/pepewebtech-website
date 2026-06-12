import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a free consultation and quote for your project. No commitment required. Contact PepeWebTech today.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | PepeWebTech",
    description: "Get a free consultation and quote for your project. No commitment required. Contact PepeWebTech today.",
    url: "https://pepewebtech.com/contact",
    images: [
      {
        url: "/images/pepewebtech-thumb.png",
        width: 1200,
        height: 630,
        alt: "Contact PepeWebTech",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
