import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { CookieBanner } from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Testkunde | KFZ / Autowerkstatt in Warendorf",
  description: "Testkunde in Warendorf — Ihr Experte für Bremsen, Autoglas und mehr. Jetzt Termin vereinbaren!",
  openGraph: {
    title: "Testkunde | KFZ / Autowerkstatt in Warendorf",
    description: "Testkunde in Warendorf — Ihr Experte für Bremsen, Autoglas und mehr. Jetzt Termin vereinbaren!",
    type: "website",
    locale: "de_DE",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-[#0d0f1a] text-white antialiased">
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        {children}
        <AccessibilityWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
