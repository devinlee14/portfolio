import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devin Lee | About me",
  description:
    "Senior Data Analyst specializing in data analytics, automation, business intelligence, and data visualization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}