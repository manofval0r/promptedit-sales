import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PromptEdit | The AI Video Prompt Marketplace",
  description:
    "Turn your best AI video prompts into passive income. PromptEdit is where AI video creators sell the prompts that actually work for Sora, Runway, Kling, Pika, and Luma.",
  metadataBase: new URL("https://contentcreator.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} dark antialiased`}
    >
      <body className="min-h-screen flex flex-col relative bg-bg-base text-text-primary selection:bg-accent-primary selection:text-white">
        <div className="dot-grid-overlay" />
        {children}
      </body>
    </html>
  );
}
