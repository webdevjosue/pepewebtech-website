import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a free consultation and quote for your project. No commitment required. Contact PepeWebTech today.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
