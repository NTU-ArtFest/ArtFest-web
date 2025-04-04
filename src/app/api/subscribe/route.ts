import nodemailer from 'nodemailer';


export async function sendEmail(email: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // 例如: 'smtp.gmail.com'
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Your Site Name" <${process.env.SMTP_USER}>`,
    to: email,
    subject: '感謝您訂閱電子報',
    html: `
      <h1>歡迎訂閱！</h1>
      <p>感謝您訂閱我們的電子報，未來我們將定期寄送最新消息與專業資訊給您。</p>
    `,
  };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}

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