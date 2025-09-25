'use client'
import { useParams } from 'next/navigation';
import frMessages from '../messages/fr.json';
import enMessages from '../messages/en.json';

const messages = {
  fr: frMessages,
  en: enMessages,
};

export function useTranslation() {
  const params = useParams();
  const locale = (params.locale as string) || 'fr';
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = messages[locale as keyof typeof messages];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t, locale };
}