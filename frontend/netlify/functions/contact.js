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

const LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  subject: 200,
  serviceAddress: 300,
  message: 5000
};

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

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
      message,
      // Honeypot
      website
    } = JSON.parse(event.body);

    // Honeypot check — bots fill this, humans don't
    if (website) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Invalid submission' }) };
    }

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    // Server-side length validation
    if (String(name).length > LIMITS.name) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Name is too long' }) };
    }
    if (String(email).length > LIMITS.email) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Email is too long' }) };
    }
    if (phone && String(phone).length > LIMITS.phone) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Phone number is too long' }) };
    }
    if (subject && String(subject).length > LIMITS.subject) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Subject is too long' }) };
    }
    if (serviceAddress && String(serviceAddress).length > LIMITS.serviceAddress) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Service address is too long' }) };
    }
    if (String(message).length > LIMITS.message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Message is too long' }) };
    }

    const isGetStarted = Array.isArray(services);
    const emailSubject = isGetStarted
      ? `New Quote Request: ${name}`
      : `New Contact: ${subject || name}`;

    const rows = [
      `<p><strong>Name:</strong> ${esc(name)}</p>`,
      `<p><strong>Email:</strong> ${esc(email)}</p>`,
      phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : '',
      preferredContact ? `<p><strong>Preferred Contact:</strong> ${esc(preferredContactLabels[preferredContact] || preferredContact)}</p>` : '',
      subject ? `<p><strong>Subject:</strong> ${esc(subject)}</p>` : '',
      bestTime ? `<p><strong>Best Time to Contact:</strong> ${esc(bestTimeLabels[bestTime] || bestTime)}</p>` : '',
      services && services.length > 0 ? `<p><strong>Services Interested In:</strong> ${services.map(s => esc(serviceLabels[s] || s)).join(', ')}</p>` : '',
      serviceAddress ? `<p><strong>Service Address:</strong> ${esc(serviceAddress)}</p>` : '',
      `<p><strong>Message:</strong></p><p>${esc(message).replace(/\n/g, '<br>')}</p>`
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
