import { Metadata } from 'next';
import SaaSLoesungenContent from './SaaSLoesungenContent';

export const metadata: Metadata = {
  title: 'SaaS-Lösungen | Cloud-basierte KI-Software | Axora Solutions',
  description: 'Entwicklung skalierbarer, sicherer und intelligenter Software-as-a-Service Lösungen mit KI-Integration. Enterprise SaaS-Lösungen für maximale Flexibilität und Performance.',
};

export default function SaaSLoesungenPage() {
  return <SaaSLoesungenContent />;
} 