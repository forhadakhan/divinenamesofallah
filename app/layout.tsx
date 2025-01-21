/**
 * FILE: `app/layout.tsx`
 * DESC: This is the root layout component that wraps around all the pages, used to provide a consistent layout.
 */

import "@/styles/base.css";
import "@/styles/custom.css";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { MetaInfo } from "@/metadata/info";
import { Footer } from "@/components/footer";
import { Heading } from "@/components/heading";
import { MenuBar } from "@/components/menu-bar";
import { fontVariables } from "@/lib/fonts/config";
import { ViewProvider } from "@/context/ViewContext";
import { WebSiteSchemaMarkup } from "@/metadata/schema";
import { ThemeProvider } from "@/components/theme-provider";
import { TAGLINE, TAGLINE_BN, DESCRIPTION, DESCRIPTION_BN } from "@/metadata/data";

// Define metadata using Next.js Metadata API
export const metadata: Metadata = MetaInfo;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add JSON-LD schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WebSiteSchemaMarkup) }}
        />
      </head>
      <body
        className={cn(
          "flex flex-col items-center justify-between",
          "min-h-screen bg-gray-100 dark:bg-gray-950 antialiased",
          ...Object.values(fontVariables) // Spread the values of fontVariables
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        // enableSystem
        // disableTransitionOnChange
        >
          <header className="container mx-auto">
            <h1 className="sr-only">{TAGLINE} | {TAGLINE_BN}</h1>
            <p className="sr-only">{DESCRIPTION}</p>
            <p className="sr-only">{DESCRIPTION_BN}</p>

            <Heading />

            <ViewProvider>
              <MenuBar /> {/* Client component (as wrapped in ViewProvider) */}
            </ViewProvider>

          </header>

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
