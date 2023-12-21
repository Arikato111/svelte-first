import { ReactNode } from 'react';
import CertificatesData from '../../../data/CertificatesData.json'
import { Metadata } from 'next'

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    let cer = CertificatesData.filter(c => c.id == Number(params.id))[0]
    if (!cer?.title) return {
        title: "Not found page"
    }
    return {
        title: `${cer.title} | Arikato111`,
    };
}

export default function CertificatesIdLayout({ children }: { children: ReactNode }) {
    return children
}