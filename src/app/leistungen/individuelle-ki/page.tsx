import { Metadata } from 'next';
import IndividuelleKIContent from './IndividuelleKIContent';

export const metadata: Metadata = {
  title: 'Individuelle KI-Lösungen | Axora Solutions',
  description: 'Maßgeschneiderte KI-Entwicklung für Ihre spezifischen Anforderungen. Von GPT-Integration bis Computer Vision - wir entwickeln Ihre individuelle KI-Lösung.',
};

export default function IndividuelleKI() {
  return <IndividuelleKIContent />;
} 