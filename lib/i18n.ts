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
export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = messages[locale];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

// Hook pour les composants clients
export function useTranslation(locale: Locale) {
  const t = (key: string) => getTranslation(locale, key);
  return { t, locale };
}