// app/[locale]/layout.tsx
import { notFound } from 'next/navigation';
import { locales } from '../../lib/i18n';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}) {
  if (!locales.includes(locale as any)) {
    return {};
  }

  return {
    title: locale === 'fr' 
      ? 'IT Cloud Consultings - Solutions Cloud Innovantes' 
      : 'IT Cloud Consultings - Innovative Cloud Solutions',
    description: locale === 'fr'
      ? 'Transformez votre infrastructure avec nos services cloud de pointe'
      : 'Transform your infrastructure with our cutting-edge cloud services',
    alternates: {
      languages: {
        'fr': '/fr',
        'en': '/en',
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}