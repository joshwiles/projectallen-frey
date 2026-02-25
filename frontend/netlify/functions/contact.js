import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const serviceLabels = {
  kitchen: 'Kitchen Remodeling',
  bathroom: 'Bathroom Remodeling',
  'room-additions': 'Room Additions',
  'home-builder': 'Home Building',
  'home-maintenance': 'Home Maintenance'
};

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, phone, service, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    await resend.emails.send({
      from: 'Allen Frey Contracting <onboarding@resend.dev>',
      to: 'jwiles2000@gmail.com',
      reply_to: email,
      subject: `New Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Service:</strong> ${serviceLabels[service] || service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error('Email error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send message' }) };
  }
};
