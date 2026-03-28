import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { fontHeading, fontBody } from "@/lib/fonts";
import { generatePageMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema, generateOrganizationSchema, generateWebSiteSchema, wrapInGraph } from "@/lib/structured-data";
import { siteConfig } from "@/content/site.config";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/integrations/AnnouncementBar";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { BackToTop } from "@/components/ui/BackToTop";
import { TawkToChat } from "@/components/integrations/TawkToChat";
import { PlausibleAnalytics } from "@/components/integrations/PlausibleAnalytics";
import { CookieConsent } from "@/components/integrations/CookieConsent";
import "./globals.css";

export const metadata: Metadata = generatePageMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootSchemas = wrapInGraph(
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebSiteSchema()
  );

  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootSchemas) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ridgeline-pest-defence-theme");if(t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} font-body antialiased pb-14 lg:pb-0`}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <AnnouncementBar />
          <Header />
          {children}
          <Footer />
          <MobileCallBar />
          <BackToTop />
          <Suspense fallback={null}><TawkToChat /></Suspense>
          <Suspense fallback={null}><CookieConsent /></Suspense>
          <Suspense fallback={null}><PlausibleAnalytics /></Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
