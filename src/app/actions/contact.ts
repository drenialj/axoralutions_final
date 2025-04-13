'use server';

import { Resend } from 'resend';
import { ContactEmail } from '@/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { name, email, company, message } = formData;

    // Einfache Validierung
    if (!name || !email || !message) {
      return {
        error: 'Bitte füllen Sie alle Pflichtfelder aus.'
      };
    }

    // E-Mail an den Empfänger senden (mit vollständiger Nachricht)
    await resend.emails.send({
      from: 'Axoralutions Kontaktformular <dreni.aliji@axoralutions.de>',
      to: 'dreni.aliji@axoralutions.de',
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
        Name: ${name}
        E-Mail: ${email}
        Unternehmen: ${company || 'Nicht angegeben'}
        
        Nachricht:
        ${message}
      `
    });

    // Bestätigungs-E-Mail an den Absender
    await resend.emails.send({
      from: 'Axoralutions <dreni.aliji@axoralutions.de>',
      to: email,
      subject: 'Ihre Anfrage bei Axoralutions',
      text: `
        Sehr geehrte(r) ${name},

        vielen Dank für Ihre Anfrage. Wir haben folgende Nachricht von Ihnen erhalten:

        "${message}"

        Wir werden uns schnellstmöglich bei Ihnen melden.

        Mit freundlichen Grüßen
        Ihr Axoralutions Team
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    return {
      error: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.'
    };
  }
} 