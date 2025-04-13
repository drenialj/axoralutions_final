import type { Metadata } from 'next';
import { KontaktContent } from './KontaktContent';

export const metadata: Metadata = {
  title: 'Kontakt | Axoralutions',
  description: 'Kontaktieren Sie Axoralutions für Ihre KI-Projekte. Vereinbaren Sie ein kostenloses Erstgespräch.',
};

export default function KontaktPage() {
  return <KontaktContent />;
} 