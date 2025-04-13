import { Metadata } from 'next';
import LeistungenContent from './LeistungenContent';

export const metadata: Metadata = {
  title: 'Leistungen | KI-Automatisierung & Beratung | Axora Solutions',
  description: 'Entdecken Sie unsere KI-Dienstleistungen: Von strategischer Beratung über maßgeschneiderte Automatisierungslösungen bis zu innovativen SaaS-Produkten. Profitieren Sie von unserer Expertise in KI-Technologien.',
};

export default function LeistungenPage() {
  return <LeistungenContent />;
} 