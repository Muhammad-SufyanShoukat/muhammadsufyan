import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import StructuredData from '@/components/StructuredData';

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "MERN Stack Developer | Your Name - Portfolio",
    template: "%s | Your Name - MERN Developer"
  },
  description: "Experienced MERN Stack Developer with 2 years of expertise in React.js, Express.js, Next.js, TypeScript, MongoDB, PostgreSQL, and MySQL. View my portfolio and projects.",
  keywords: [
    "MERN Stack Developer",
    "React.js Developer", 
    "Next.js Developer",
    "TypeScript Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "MySQL Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Projects"
  ],
  authors: [{ name: "Your Name", url: "https://yourportfolio.com" }],
  creator: "Your Name",
  publisher: "Your Name",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourportfolio.com'),
  alternates: {
    canonical: '/',
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "MERN Stack Developer | Your Name - Portfolio",
    description: "Experienced MERN Stack Developer with 2 years of expertise in React.js, Express.js, Next.js, TypeScript, MongoDB, PostgreSQL, and MySQL.",
    siteName: "Your Name - MERN Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MERN Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MERN Stack Developer | Your Name - Portfolio",
    description: "Experienced MERN Stack Developer with 2 years of expertise in React.js, Express.js, Next.js, TypeScript, MongoDB, PostgreSQL, and MySQL.",
    images: ["/og-image.jpg"],
    creator: "@yourusername",
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData type="Person" />
        <StructuredData type="WebSite" />
        <StructuredData type="Organization" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
