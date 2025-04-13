import type { Metadata } from 'next';
import { UeberUnsContent } from './UeberUnsContent';

export const metadata: Metadata = {
  title: 'Über uns | Axoralutions',
  description: 'Lernen Sie Axoralutions kennen - Ihr Partner für KI-Innovation und digitale Transformation aus Mannheim.',
};

export default function UeberUnsPage() {
  return <UeberUnsContent />;
} 