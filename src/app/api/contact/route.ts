import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    // Validierung der Eingaben
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // n8n Webhook URL - Diese müssen Sie später aus Ihrer n8n-Installation einfügen
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!n8nWebhookUrl) {
      return NextResponse.json(
        { error: 'N8N Webhook URL ist nicht konfiguriert.' },
        { status: 500 }
      );
    }

    // Senden der Daten an n8n
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        company,
        message,
      }),
    });

    if (!n8nResponse.ok) {
      throw new Error('Fehler beim Senden der Nachricht');
    }

    return NextResponse.json(
      { message: 'Nachricht wurde erfolgreich gesendet.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fehler beim Verarbeiten der Anfrage:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
} 