import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Überprüfen Sie die erforderlichen Felder
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Gmail SMTP-Transport konfigurieren
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: 'dreni.aliji@axoralutions.de',
        pass: 'Dreni2006'
      },
      tls: {
        minVersion: 'TLSv1.2'
      }
    });

    // E-Mail-Nachricht erstellen
    const mailOptions = {
      from: 'dreni.aliji@axoralutions.de',
      to: 'dreni.aliji@axoralutions.de',
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
        Name: ${name}
        E-Mail: ${email}
        Unternehmen: ${company}
        
        Nachricht:
        ${message}
      `,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Unternehmen:</strong> ${company}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    return NextResponse.json(
      { error: 'Interner Server-Fehler' },
      { status: 500 }
    );
  }
} 