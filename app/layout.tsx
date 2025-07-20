import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClearBooks - Affordable Bookkeeping for Small Businesses',
  description: 'Professional bookkeeping and financial services for small businesses. Navigate tax uncertainty, compliance changes, and staffing challenges with clean, tax-ready books every month.',
  keywords: 'bookkeeping, small business, accounting, payroll, tax preparation, QuickBooks, financial services, cash flow, compliance',
  authors: [{ name: 'ClearBooks' }],
  creator: 'ClearBooks',
  publisher: 'ClearBooks',

  // Open Graph for Facebook/LinkedIn/etc
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clearbooks.com',
    siteName: 'ClearBooks',
    title: 'ClearBooks - Affordable Bookkeeping for Small Businesses',
    description: 'Professional bookkeeping and financial services for small businesses. Navigate tax uncertainty, compliance changes, and staffing challenges with clean, tax-ready books every month.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'ClearBooks - Professional Bookkeeping Services',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'ClearBooks - Affordable Bookkeeping for Small Businesses',
    description: 'Professional bookkeeping and financial services for small businesses. Navigate tax uncertainty, compliance changes, and staffing challenges.',
    images: ['/og-image.svg'],
    creator: '@clearbooks',
    site: '@clearbooks',
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons and manifest - using SVG for now
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0d9488',
      },
    ],
  },

  manifest: '/site.webmanifest',

  // Additional meta
  metadataBase: new URL('https://clearbooks.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
