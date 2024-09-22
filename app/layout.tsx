import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"

export const metadata: Metadata = {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
      icon: "/icon.ico",
    },
    openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.siteName,
    },
  
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`antialiased`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <div className="relative flex flex-col h-screen">
          <main>
            {children}
          </main>
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
