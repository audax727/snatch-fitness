import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://befitsangareddy.in'),
  title: {
    default: 'Be Fit Gym - Sangareddy | Premium Fitness Facility',
    template: '%s | Be Fit Gym',
  },
  description: 'Premium fitness facility in Sangareddy with state-of-the-art equipment, expert trainers, and dynamic classes.',
  keywords: ['gym', 'fitness', 'Sangareddy', 'personal training', 'Be Fit', 'workout', 'health club'],
  authors: [{ name: 'Be Fit Gym' }],
  creator: 'Be Fit Gym',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://befitsangareddy.in',
    title: 'Be Fit Gym - Sangareddy | Premium Fitness Facility',
    description: 'Premium fitness facility in Sangareddy with state-of-the-art equipment, expert trainers, and dynamic classes.',
    siteName: 'Be Fit Gym',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Be Fit Gym - Sangareddy',
    description: 'Premium fitness facility in Sangareddy with state-of-the-art equipment, expert trainers, and dynamic classes.',
  },
  alternates: {
    canonical: 'https://befitsangareddy.in',
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&family=Belleza&family=Montserrat:wght@700;800;900&family=Poppins:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
