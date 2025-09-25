'use client';

import { useParams } from 'next/navigation';
import { locales, defaultLocale, type Locale } from '../lib/i18n';

export function useLocale(): Locale {
  const params = useParams();
  const locale = params?.locale as string;
  
  // Vérifier si la locale est valide
  if (locale && locales.includes(locale as Locale)) {
    return locale as Locale;
  }
  
  // Fallback vers la locale par défaut
  return defaultLocale;
}