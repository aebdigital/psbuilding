import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export const metadata: Metadata = {
    title: "Ochrana osobných údajov | PS Building",
    description: "Zásady spracovania a ochrany osobných údajov spoločnosti PS Building s.r.o. v súlade s nariadením GDPR.",
};

export default function PrivacyPolicy() {
    return (
        <main>
            <PageHeader title="Zásady ochrany osobných údajov" />
            <PrivacyPolicyContent />
        </main>
    );
}
