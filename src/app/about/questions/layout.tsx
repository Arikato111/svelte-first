import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: "questions | Arikato111"
}

export default function QuestionsLayout({ children }: { children: ReactNode }) {
    return children
}