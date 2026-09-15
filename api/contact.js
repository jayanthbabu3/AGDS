export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { name, company, email, phone, serviceRequired, projectDetails } = req.body || {};

  if (!name || !email || !projectDetails) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL || 'Sales@AGDSglobal.com';

  if (!RESEND_API_KEY) {
    return res.status(500).json({ success: false, error: 'Email service not configured' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AGDS Website <onboarding@resend.dev>',
        to: [NOTIFY_EMAIL],
        reply_to: email,
        subject: `New Inquiry: ${serviceRequired || 'General'} — ${name}`,
        html: `
          <h2>New Contact Form Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || '-'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || '-'}</p>
          <p><strong>Service Required:</strong> ${serviceRequired || '-'}</p>
          <p><strong>Project Details:</strong></p>
          <p>${projectDetails}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Resend API error');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
