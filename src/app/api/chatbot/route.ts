import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    // Validierung der Eingaben
    if (!message) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine Nachricht ein.' },
        { status: 400 }
      );
    }

    // n8n Webhook URL für den Chatbot
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!n8nWebhookUrl) {
      return NextResponse.json(
        { error: 'N8N Webhook URL ist nicht konfiguriert.' },
        { status: 500 }
      );
    }

    // Senden der Nachricht an n8n
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!n8nResponse.ok) {
      throw new Error('Fehler beim Senden der Nachricht an den Chatbot');
    }

    // Antwort von n8n verarbeiten
    const responseData = await n8nResponse.json();

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error('Fehler beim Verarbeiten der Chatbot-Anfrage:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
} 