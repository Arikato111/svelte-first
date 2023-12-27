import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: "Questions | Arikato111"
}

export default function QuestionsLayout({ children }: { children: ReactNode }) {
    return children
}