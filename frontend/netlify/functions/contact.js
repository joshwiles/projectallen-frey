import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const serviceLabels = {
  kitchen: 'Kitchen Remodeling',
  bathroom: 'Bathroom Remodeling',
  'room-additions': 'Room Additions',
  'home-builder': 'Home Building',
  'home-maintenance': 'Home Maintenance'
};

const bestTimeLabels = {
  morning: 'Morning (8am – 12pm)',
  afternoon: 'Afternoon (12pm – 5pm)',
  evening: 'Evening (5pm – 8pm)',
  weekends: 'Weekends',
  anytime: 'Anytime'
};

const preferredContactLabels = {
  email: 'Email',
  phone: 'Phone',
  either: 'Either'
};

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const {
      name,
      email,
      phone,
      preferredContact,
      subject,
      // Get Started specific fields
      bestTime,
      services,
      serviceAddress,
      message
    } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    const isGetStarted = Array.isArray(services);
    const emailSubject = isGetStarted
      ? `New Quote Request: ${name}`
      : `New Contact: ${subject || name}`;

    const rows = [
      `<p><strong>Name:</strong> ${name}</p>`,
      `<p><strong>Email:</strong> ${email}</p>`,
      phone ? `<p><strong>Phone:</strong> ${phone}</p>` : '',
      preferredContact ? `<p><strong>Preferred Contact:</strong> ${preferredContactLabels[preferredContact] || preferredContact}</p>` : '',
      subject ? `<p><strong>Subject:</strong> ${subject}</p>` : '',
      bestTime ? `<p><strong>Best Time to Contact:</strong> ${bestTimeLabels[bestTime] || bestTime}</p>` : '',
      services && services.length > 0 ? `<p><strong>Services Interested In:</strong> ${services.map(s => serviceLabels[s] || s).join(', ')}</p>` : '',
      serviceAddress ? `<p><strong>Service Address:</strong> ${serviceAddress}</p>` : '',
      `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`
    ].filter(Boolean).join('\n');

    await resend.emails.send({
      from: 'Allen Frey Contracting <onboarding@resend.dev>',
      to: 'jwiles2000@gmail.com',
      reply_to: email,
      subject: emailSubject,
      html: `
        <h2>${isGetStarted ? 'New Quote Request' : 'New Contact Form Submission'}</h2>
        ${rows}
      `
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error('Email error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send message' }) };
  }
};
