import { ReactNode } from 'react';
import CertificatesData from '../../../data/CertificatesData.json'
import { Metadata } from 'next'
import { DefaultMetaTag, MetaTag } from '../../../components/MetaTag'

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    let cer = CertificatesData.filter(c => c.id == Number(params.id))[0]
    if (!cer?.title) return {
        ...(DefaultMetaTag("Not found page")),
        title: "Not found page"
    }
    return {
        ...(MetaTag({
            title: `${cer.type} | Arikato111`,
            description: cer.title,
            image: cer.img.high,
            url: "https://nawasan.dev"
        })),
        title: `${cer.title} | Arikato111`,
    };
}

export default function CertificatesIdLayout({ children }: { children: ReactNode }) {
    return children
}