import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "PepeWebTech | AI-Powered Web Development for Small Businesses",
    template: "%s | PepeWebTech",
  },
  description: "AI-powered web development for small businesses. Fast, affordable, modern websites. Get a free consultation.",
  metadataBase: new URL("https://pepewebtech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PepeWebTech",
    title: "PepeWebTech | AI-Powered Web Development for Small Businesses",
    description: "AI-powered web development for small businesses. Fast, affordable, modern websites. Get a free consultation.",
    url: "https://pepewebtech.com",
    images: [
      {
        url: "/images/pepewebtech-thumb.png",
        width: 1200,
        height: 630,
        alt: "PepeWebTech - AI-Powered Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PepeWebTech | AI-Powered Web Development for Small Businesses",
    description: "AI-powered web development for small businesses. Fast, affordable, modern websites.",
    images: ["/images/pepewebtech-thumb.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
