import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { profile } from "@/data/profile";
import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://chokor.cc"),
  title: { default: "Mohamed Chokor | Software Engineer", template: "%s | Mohamed Chokor" },
  description: "Software Engineer based in Beirut, Lebanon, specializing in .NET backend development, APIs, architecture, Azure, and CI/CD.",
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: "https://chokor.cc" }],
  openGraph: { type: "website", locale: "en_US", url: "https://chokor.cc", siteName: "Mohamed Chokor", title: "Mohamed Chokor | Software Engineer", description: "Backend-focused software engineer specializing in .NET, APIs, architecture, Azure, and CI/CD.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Mohamed Chokor — Software Engineer" }] },
  twitter: { card: "summary_large_image", title: "Mohamed Chokor | Software Engineer", description: "Backend-focused software engineer specializing in .NET, APIs, architecture, Azure, and CI/CD.", images: ["/opengraph-image"] },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
};

export const viewport: Viewport = { themeColor: "#090c14", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.role, url: "https://chokor.cc", email: `mailto:${profile.email}`, address: { "@type": "PostalAddress", addressLocality: "Beirut", addressCountry: "LB" }, sameAs: [profile.github, profile.linkedin] },
    { "@context": "https://schema.org", "@type": "WebSite", name: "Mohamed Chokor Portfolio", url: "https://chokor.cc", author: { "@type": "Person", name: profile.name } },
  ];
  return <html lang="en" className={`${sans.variable} ${mono.variable}`} data-scroll-behavior="smooth"><body><a className="skip-link" href="#main-content">Skip to content</a><Navigation />{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><Analytics /></body></html>;
}
