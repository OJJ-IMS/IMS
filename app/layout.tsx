import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "IMS | Rail & Construction Management Software | theims.co.uk",
    template: "%s | IMS",
  },
  description:
    "The only management system built specifically for UK rail and construction contractors. RISQS, ISO and NR/L2/OHS/003 compliant. Book a free demo.",
  keywords: [
    "rail contractor management software",
    "RISQS compliance software",
    "NR contractor system",
    "Network Rail workforce management software",
    "rail management system",
    "construction management software",
  ],
  openGraph: {
    title: "IMS | Rail & Construction Management Software",
    description:
      "The only management system built specifically for UK rail and construction contractors.",
    url: "https://www.theims.co.uk",
    siteName: "IMS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-brand-navy">{children}</body>
    </html>
  );
}
