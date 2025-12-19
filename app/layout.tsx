import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-futuristic',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-cinematic',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'SaaSFlow - Subscription & Billing Platform',
  description: 'The future of subscription management. Built for modern businesses that demand precision, security, and scale.',
  keywords: 'SaaS, subscription, billing, payments, Stripe, management platform',
  authors: [{ name: 'SaaSFlow Team' }],
  openGraph: {
    title: 'SaaSFlow - Subscription & Billing Platform',
    description: 'Transform your subscription business with our cutting-edge platform.',
    type: 'website',
    url: 'https://saasflow.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaSFlow - Subscription & Billing Platform',
    description: 'Transform your subscription business with our cutting-edge platform.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}