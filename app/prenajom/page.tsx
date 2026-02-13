import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';
import RentalContent from './RentalContent';

export const metadata: Metadata = {
  title: "Prenájom náradia a lešenia | PS Building",
  description: "Ponúkame prenájom profesionálneho náradia, lešenia a prívesných vozíkov. Kvalitná technika pre vaše stavebné projekty.",
};

export default function RentalPage() {
  return (
    <main>
      <PageHeader title="PRENÁJOM" />
      <RentalContent />
    </main>
  );
}
