import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Desktop Portfolio',
  description: 'A modern desktop-style portfolio',
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