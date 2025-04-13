import type { Metadata } from 'next';
import { WerteKulturContent } from './WerteKulturContent';

export const metadata: Metadata = {
  title: 'Werte & Kultur | Axoralutions',
  description: 'Entdecken Sie die Werte und Kultur von Axoralutions - Innovation, Qualität und Kundenorientierung stehen im Mittelpunkt unseres Handelns.',
};

export default function WerteKulturPage() {
  return <WerteKulturContent />;
} 