import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';
import SecurityDoorsContent from './SecurityDoorsContent';

export const metadata: Metadata = {
  title: "Bezpečnostné dvere HISEC | PS Building",
  description: "Ponúkame certifikované bezpečnostné dvere HISEC v prevedeniach KLASIC, TREND a ELEGANTE. Zabezpečte svoj domov štýlovo a kvalitne.",
};

export default function SecurityDoorsPage() {
  return (
    <main>
      <PageHeader title="BEZPEČNOSTNÉ DVERE" />
      <SecurityDoorsContent />
    </main>
  );
}
