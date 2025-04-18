import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { APP_NAME, RECEIVER_EMAIL_ADDRESS } from '@/lib/constants';

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
    //   from: `Contact Form <onboarding@resend.dev>`, // Use verified domain
    //   to: RECEIVER_EMAIL_ADDRESS,
        from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
    
       // So replies go to the sender
      subject: `New message from ${name} via ${APP_NAME} Platform`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
