// app/[locale]/page.tsx
import { type Locale } from '../../lib/i18n';
import ClientHomePage from '@/components/ClientHomePage';

export default function HomePage({
  params: {locale}
}: {
  params: {locale: string}
}) {
  return <ClientHomePage locale={locale as Locale} />;
}