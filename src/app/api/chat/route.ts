import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Hier die n8n Webhook-URL einfügen
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!n8nWebhookUrl) {
      throw new Error('N8N Webhook URL ist nicht konfiguriert');
    }

    // Anfrage an n8n senden
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('Fehler bei der Kommunikation mit n8n');
    }

    const data = await response.json();

    return NextResponse.json({ response: data.response });
  } catch (error) {
    console.error('Fehler in der Chat-API:', error);
    return NextResponse.json(
      { error: 'Interner Server-Fehler' },
      { status: 500 }
    );
  }
} 