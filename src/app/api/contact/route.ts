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

    // E-Mail-Text formatieren
    const emailText = `
      Neue Kontaktanfrage:
      
      Name: ${name}
      E-Mail: ${email}
      Unternehmen: ${company || 'Nicht angegeben'}
      
      Nachricht:
      ${message}
    `;

    // Transporter für Gmail konfigurieren
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // E-Mail-Optionen
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'dreni.aliji@axoralutions.de',
      subject: `Neue Kontaktanfrage von ${name}`,
      text: emailText,
      replyTo: email,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Nachricht erfolgreich gesendet' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    return NextResponse.json(
      { error: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
} 