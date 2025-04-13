import { sendEmail } from '@/components/email/send_email';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
    }

    await sendEmail(email);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}