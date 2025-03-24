import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Axora <onboarding@resend.dev>',
      to: email,
      subject: subject,
      html: message,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Senden der E-Mail' }, { status: 500 });
  }
} 