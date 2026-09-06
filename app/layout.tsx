import "./globals.css";

export const metadata = {
  title: 'Devin Lee - About me',
  description: 'Senior Data Analyst specializing in data analytics, automation, business intelligence, and data visualization.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
