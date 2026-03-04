import { useTranslations } from 'next-intl';
import Quiz from '@/components/Quiz';
import VoiceConsultant from '@/components/VoiceConsultant';
import { Language } from '@/lib/types';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Quiz locale={locale} />
      <VoiceConsultant currentLang={locale as Language} />
    </main>
  );
}
