import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://clearbooks.com'),
  title: 'ClearBooks - Affordable Bookkeeping for Small Businesses',
  description: 'Professional bookkeeping and financial services for small businesses. Navigate tax uncertainty, compliance changes, and staffing challenges with clean, tax-ready books every month.',
  generator: 'Next.js',
  applicationName: 'ClearBooks',
  keywords: ['bookkeeping', 'small business', 'accounting', 'payroll', 'tax preparation', 'QuickBooks', 'financial services', 'cash flow', 'compliance', 'bookkeeper'],
  authors: [{ name: 'ClearBooks' }],
  creator: 'ClearBooks',
  publisher: 'ClearBooks',

  // Additional meta tags for better social sharing
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:type': 'website',
    'og:rich_attachment': 'true',
    'twitter:image:width': '1200',
    'twitter:image:height': '630',
  },

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
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ClearBooks - Professional Bookkeeping and Financial Services with Calculator Icon',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'ClearBooks - Affordable Bookkeeping for Small Businesses',
    description: 'Professional bookkeeping and financial services for small businesses. Navigate tax uncertainty, compliance changes, and staffing challenges with clean, tax-ready books every month.',
    images: ['/og-image.png'],
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

  // Icons and manifest
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
