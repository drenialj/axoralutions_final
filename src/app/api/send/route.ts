import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Typen für die E-Mail-Daten
interface EmailData {
  email: string;
  subject: string;
  message: string;
}

// Validierung der E-Mail-Daten
function validateEmailData(data: unknown): data is EmailData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'email' in data &&
    'subject' in data &&
    'message' in data &&
    typeof (data as EmailData).email === 'string' &&
    typeof (data as EmailData).subject === 'string' &&
    typeof (data as EmailData).message === 'string'
  );
}

// Resend-Client initialisieren
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Request-Body parsen und validieren
    const body = await req.json();
    
    if (!validateEmailData(body)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Daten' },
        { status: 400 }
      );
    }

    const { email, subject, message } = body;

    // E-Mail senden
    const data = await resend.emails.send({
      from: 'Axora <onboarding@resend.dev>',
      to: email,
      subject,
      html: message,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('E-Mail-Fehler:', error);
    
    // Spezifische Fehlermeldungen basierend auf dem Fehlertyp
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Fehler beim Senden der E-Mail: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten' },
      { status: 500 }
    );
  }
} 