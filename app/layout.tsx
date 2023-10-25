import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Container from '@/components/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Template and Styling'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
