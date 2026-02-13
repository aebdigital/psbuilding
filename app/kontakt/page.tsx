import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';
import ContactFormSection from './ContactFormSection';

export const metadata: Metadata = {
  title: "Kontakt | PS Building",
  description: "Máte otázky? Kontaktujte nás telefonicky, emailom alebo cez formulár. Radi vám pripravíme cenovú ponuku na mieru.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader title="KONTAKT" />
      <ContactFormSection />
    </main>
  );
}
