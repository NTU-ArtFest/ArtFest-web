// sendEmail.js
import nodemailer from 'nodemailer';

export async function sendEmail(email: string) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP configuration is missing');
  }
  if (!email) {
    throw new Error('Email is required');
  }
  
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

  return transporter.sendMail(mailOptions);
}