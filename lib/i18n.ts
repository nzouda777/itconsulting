// lib/i18n.ts
export const locales = ['fr', 'en'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'fr';

// Importer les messages de traduction
import frMessages from '../messages/fr.json';
import enMessages from '../messages/en.json';

export const messages = {
  fr: frMessages,
  en: enMessages,
} as const;

// Fonction utilitaire pour obtenir une traduction
export function getTranslation<T = string>(locale: Locale, key: string): T {
  const keys = key.split('.');
  let value: unknown = messages[locale] as unknown;
  
  for (const k of keys) {
    value = (value as any)?.[k];
  }
  
  return (value as T) ?? ((key as unknown) as T);
}

// Hook pour les composants clients
export function useTranslation(locale: Locale) {
  const t = <T = string>(key: string) => getTranslation<T>(locale, key);
  return { t, locale };
}