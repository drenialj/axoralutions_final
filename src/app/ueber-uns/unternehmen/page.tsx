import type { Metadata } from 'next';
import UnternehmenContent from './UnternehmenContent';

export const metadata: Metadata = {
  title: 'Unternehmen | Axoralutions',
  description: 'Lernen Sie unser Unternehmen kennen - Innovation, Expertise und Kundenorientierung zeichnen Axoralutions aus.',
};

export default function UnternehmenPage() {
  return <UnternehmenContent />;
} 