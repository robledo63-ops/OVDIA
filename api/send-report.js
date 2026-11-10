// Endpoint Serverless para Envío Automático de Correo en Vercel
// Metodología: Lic. Francisco Javier Robledo Zatarain

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { to, studentName, emailSubject, emailHtml, emailText } = req.body || {};

  if (!to || !to.includes('@')) {
    return res.status(400).json({ error: 'Dirección de correo no válida' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'OVDIA 2030 <onboarding@resend.dev>',
          to: [to],
          subject: emailSubject || `Tu Reporte Vocacional 2030 - ${studentName || 'Aspirante'}`,
          text: emailText,
          html: emailHtml
        })
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || `Error ${response.status}`);
      }

      const data = await response.json();
      return res.status(200).json({ success: true, id: data.id });
    } catch (err) {
      console.error('Error al enviar con Resend:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  // Si no hay proveedor configurado en el servidor
  return res.status(503).json({
    error: 'Proveedor de correo no configurado en el servidor.',
    hint: 'Configura RESEND_API_KEY en Vercel o utiliza la integración directa con EmailJS en el Kiosco.'
  });
}
