import type { Metadata } from "next";
import { ThemeProvider } from "@/app/components/theme-provider"
import { GoogleAnalytics } from '@next/third-parties/google'
import { robotoMono } from "@/app/lib/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${robotoMono.className} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.GOOGLEANALYTICS_ID || ''} />
      </body>
    </html>
  );
}
