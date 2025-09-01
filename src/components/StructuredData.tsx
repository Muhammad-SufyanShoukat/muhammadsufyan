import { Metadata } from 'next';

interface StructuredDataProps {
  type: 'Person' | 'WebSite' | 'Organization';
}

const StructuredData: React.FC<StructuredDataProps> = ({ type }) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    };

    switch (type) {
      case 'Person':
        return {
          ...baseData,
          '@type': 'Person',
          name: 'Muhammad Sufyan',
          jobTitle: 'MERN Stack Developer',
          description: 'Experienced MERN Stack Developer with 2 years of expertise in React.js, Express.js, Next.js, TypeScript, MongoDB, PostgreSQL, and MySQL.',
          url: 'https://yourportfolio.com',
          sameAs: [
            'https://github.com/yourusername',
            'https://linkedin.com/in/yourusername',
            'https://twitter.com/yourusername'
          ],
          knowsAbout: [
            'React.js',
            'Next.js',
            'TypeScript',
            'Express.js',
            'Node.js',
            'MongoDB',
            'PostgreSQL',
            'MySQL',
            'JavaScript',
            'Web Development',
            'Full Stack Development'
          ],
          alumniOf: {
            '@type': 'Organization',
            name: 'Your University/Bootcamp'
          },
          worksFor: {
            '@type': 'Organization',
            name: 'Your Current Company'
          }
        };

      case 'WebSite':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: 'MERN Stack Developer Portfolio',
          description: 'Professional portfolio showcasing MERN stack development skills and projects.',
          url: 'https://yourportfolio.com',
          author: {
            '@type': 'Person',
            name: 'Muhammad Sufyan'
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://yourportfolio.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        };

      case 'Organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: 'Muhammad Sufyan - MERN Stack Developer',
          description: 'Professional MERN stack development services',
          url: 'https://yourportfolio.com',
          logo: 'https://yourportfolio.com/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-XXX-XXX-XXXX',
            contactType: 'Customer Service',
            email: 'your.email@example.com'
          },
          sameAs: [
            'https://github.com/yourusername',
            'https://linkedin.com/in/yourusername'
          ]
        };

      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  );
};

export default StructuredData;

// Additional metadata for Next.js
export const generateMetadata = (): Metadata => {
  return {
    title: {
      default: 'MERN Stack Developer | Muhammad Sufyan - Portfolio',
      template: '%s | Muhammad Sufyan - MERN Developer'
    },
    description: 'Experienced MERN Stack Developer with 2 years of expertise in React.js, Express.js, Next.js, TypeScript, MongoDB, PostgreSQL, and MySQL. View my portfolio and projects.',
    keywords: [
      'MERN Stack Developer',
      'React.js Developer',
      'Next.js Developer',
      'TypeScript Developer',
      'Express.js Developer',
      'MongoDB Developer',
      'PostgreSQL Developer',
      'MySQL Developer',
      'Full Stack Developer',
      'JavaScript Developer',
      'Node.js Developer',
      'Web Developer',
      'Frontend Developer',
      'Backend Developer',
      'Portfolio',
      'Projects'
    ],
    authors: [{ name: 'Muhammad Sufyan', url: 'https://yourportfolio.com' }],
    creator: 'Muhammad Sufyan',
    publisher: 'Muhammad Sufyan',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://yourportfolio.com'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://yourportfolio.com',
      title: 'MERN Stack Developer | Muhammad Sufyan - Portfolio',
      description: 'Experienced MERN Stack Developer with 2 years of expertise in React.js, Express.js, Next.js, TypeScript, MongoDB, PostgreSQL, and MySQL.',
      siteName: 'Muhammad Sufyan - MERN Developer Portfolio',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'MERN Stack Developer Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MERN Stack Developer | Muhammad Sufyan - Portfolio',
      description: 'Experienced MERN Stack Developer with 2 years of expertise in React.js, Express.js, Next.js, TypeScript, MongoDB, PostgreSQL, and MySQL.',
      images: ['/og-image.jpg'],
      creator: '@yourusername',
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
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
};