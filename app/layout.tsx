import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Djembar Arafat - Portfolio",
  description: "Developer based in Indonesia with a passion for code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async strategy="afterInteractive" />
        <elevenlabs-convai agent-id="agent_2701kdf79z7pf708exw3jjmgcpdv"></elevenlabs-convai>
      </body>
    </html>
  );
}
