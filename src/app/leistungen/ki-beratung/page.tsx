import { Metadata } from 'next';
import KIBeratungContent from './KIBeratungContent';

export const metadata: Metadata = {
  title: 'KI-Beratung | Strategische KI-Implementierung | Axora Solutions',
  description: 'Profitieren Sie von unserer Expertise in der strategischen KI-Beratung. Wir unterstützen Sie bei der erfolgreichen Integration von KI in Ihr Unternehmen.',
};

export default function KIBeratungPage() {
  return <KIBeratungContent />;
} 