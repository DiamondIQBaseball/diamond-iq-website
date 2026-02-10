import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diamond IQ - Baseball Training & Skills App",
  description: "Elevate your baseball game with Diamond IQ. Track your training, improve your skills, and compete with players worldwide.",
  keywords: ["baseball", "training", "skills", "app", "youth baseball", "coaching"],
  openGraph: {
    title: "Diamond IQ - Baseball Training & Skills App",
    description: "Elevate your baseball game with Diamond IQ.",
    type: "website",
    url: "https://diamondiqbaseball.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
