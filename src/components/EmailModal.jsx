import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Loader2, Sparkles, FileText, ArrowRight, Share2, Download, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { findCareerOrGenerate } from '../data/ovdiaKnowledgeBase';

const DEFAULT_EMAILJS = {
  serviceId: 'service_zo8yabm',
  templateId: 'template_vu80u59',
  publicKey: '5Eao8q2W0LxMwiaWh'
};

export function EmailModal({ isOpen, onClose, studentData, baniData, aeiouData }) {
  const [emailInput, setEmailInput] = useState(studentData?.email || '');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null); // { success: boolean, message: string }
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // EmailJS config (preconfigurado de fábrica con tus credenciales)
  const [emailJsConfig] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ovdia_emailjs_config');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && (parsed.serviceId || parsed.templateId || parsed.publicKey)) {
            const isOldService = !parsed.serviceId || parsed.serviceId === 'service_s9smlgp' || parsed.serviceId === 'service_rwv9bvd';
            const svc = isOldService ? DEFAULT_EMAILJS.serviceId : parsed.serviceId.trim();
            return {
              serviceId: svc,
              templateId: parsed.templateId?.trim() || DEFAULT_EMAILJS.templateId,
              publicKey: parsed.publicKey?.trim() || DEFAULT_EMAILJS.publicKey
            };
          }
        } catch (e) {}
      }
    }
    return DEFAULT_EMAILJS;
  });

  const isOld = !emailJsConfig?.serviceId || emailJsConfig?.serviceId === 'service_s9smlgp' || emailJsConfig?.serviceId === 'service_rwv9bvd';
  const activeConfig = {
    serviceId: isOld ? DEFAULT_EMAILJS.serviceId : emailJsConfig.serviceId.trim(),
    templateId: emailJsConfig?.templateId?.trim() || DEFAULT_EMAILJS.templateId,
    publicKey: emailJsConfig?.publicKey?.trim() || DEFAULT_EMAILJS.publicKey
  };

  if (!isOpen) return null;

  const careerData = findCareerOrGenerate(studentData?.career);

  // Build the complete email text body (fallback)
  const buildEmailBody = () => {
    const superpowers = (aeiouData?.humanSuperpowers || careerData.humanSuperpowers.slice(0, 3)).join('\n• ');
    return `REPORTE EJECUTIVO DE PROSPECCIÓN Y EGRESO 2030 (MODELO OVDIA)
Metodología avalada por el Lic. Francisco Javier Robledo Zatarain
Fecha: ${new Date().toLocaleDateString('es-MX')}

============================================================
DATOS DEL ASPIRANTE
============================================================
Estudiante: ${studentData?.name || 'Aspirante OVDIA'}
Nivel Académico: ${studentData?.grade || '5.º Semestre de Bachillerato'}
Plan A Universitario: ${careerData.name}
Rol Híbrido 2030: ${careerData.emergentRole2030}
Clasificación de Entrada: ${baniData?.semaphore || 'SEMÁFORO VERDE'}
Dinámica Psicológica: ${baniData?.attractor?.name || 'Atractor Extraño'}

============================================================
1. DIAGNÓSTICO DE VIABILIDAD BANI (2030)
============================================================
${careerData.summary2030}
(Automatización operativa estimada: ${careerData.disruptionScore}%)

============================================================
2. TUS 3 SUPERPODERES HUMANOS INSUSTITUIBLES (EL 30% ESTRATÉGICO)
============================================================
• ${superpowers}

============================================================
3. AUDITORÍA DE BRECHA CURRICULAR (UNIVERSIDAD VS. MERCADO)
============================================================
Materias tradicionales en riesgo de desfase:
• ${careerData.obsoleteSubjects.join('\n• ')}

Exigencias del mercado corporativo actual (Puntos ciegos):
• ${careerData.curriculumBlindSpots.join('\n• ')}

============================================================
4. ESTRUCTURA DE RUTA BIMODAL (PLAN A + B INTEGRADOS)
============================================================
- Vía 1 (Universidad formal 4 a 5 años): ${careerData.bimodalPath.via1}
- Vía 2 (Microcredenciales técnicas 3 a 6 meses): ${careerData.bimodalPath.via2}
Ingresos tempranos: ${careerData.bimodalPath.earlyIncome || 'Proyectos y consultoría junior desde 2.° año.'}

============================================================
5. ALTERNATIVA DE ALTO IMPACTO & PROTOTIPADO RÁPIDO STANFORD
============================================================
- Acelerador Táctico (Plan B): ${careerData.odysseyPlans.plan2.title}
- Prototipado Rápido a 7 Días: ${careerData.rapidPrototype.interviewTitle}

============================================================
DECLARACIÓN DE SINTONÍA Y COMPROMISO FAMILIAR (ACUERDO A 30 DÍAS)
============================================================
"Presento este reporte a mi familia como resultado de una investigación seria y basada en datos, comprometiéndome a actuar con disciplina, adaptabilidad y perseverancia. Acordamos dialogar bajo el protocolo de tregua de 30 días para evaluar la evidencia de campo y las microcredenciales antes de cualquier decisión apresurada."

Emitido bajo el Modelo OVDIA 2030 • Lic. Francisco Javier Robledo Zatarain
`;
  };

  // Build the complete modern HTML email layout
  const buildEmailHtml = () => {
    const superpowersList = aeiouData?.humanSuperpowers?.length
      ? aeiouData.humanSuperpowers.slice(0, 3)
      : careerData.humanSuperpowers.slice(0, 3);
    const semaphoreText = baniData?.semaphore || 'SEMÁFORO VERDE - ALTA PROSPECCIÓN 2030';
    const isGreen = semaphoreText.includes('VERDE');
    const isYellow = semaphoreText.includes('AMARILLO') || semaphoreText.includes('ÁMBAR');
    const semColor = isGreen ? '#10b981' : isYellow ? '#f59e0b' : '#ef4444';
    const semBg = isGreen ? '#064e3b' : isYellow ? '#78350f' : '#7f1d1d';
    const dateFormatted = new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reporte Vocacional OVDIA 2030</title>
</head>
<body style="margin: 0; padding: 20px 10px; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
    
    <!-- HEADER -->
    <tr>
      <td style="padding: 32px 28px 24px; background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); border-bottom: 2px solid #3b82f6;">
        <div style="font-size: 11px; font-weight: 800; letter-spacing: 2px; color: #60a5fa; text-transform: uppercase; margin-bottom: 8px;">
          PROSPECCIÓN VOCACIONAL DISRUPTIVA • OVDIA 2030
        </div>
        <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; line-height: 1.25;">
          Reporte Ejecutivo de Prospección & Egreso 2030
        </h1>
        <div style="margin-top: 8px; font-size: 13px; color: #94a3b8;">
          Metodología avalada por el <strong style="color: #e2e8f0;">Lic. Francisco Javier Robledo Zatarain</strong> • ${dateFormatted}
        </div>
      </td>
    </tr>

    <!-- TARJETA DEL ESTUDIANTE -->
    <tr>
      <td style="padding: 24px 28px;">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #1e293b; border-radius: 12px; border: 1px solid #334155;">
          <tr>
            <td style="padding: 18px 20px;">
              <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Aspirante Evaluado</div>
              <div style="font-size: 20px; font-weight: 800; color: #38bdf8; margin: 4px 0 2px;">
                ${studentData?.name || 'Aspirante OVDIA'}
              </div>
              <div style="font-size: 13px; color: #cbd5e1;">${studentData?.grade || '5.º Semestre de Bachillerato'}</div>
              
              <div style="margin-top: 14px; padding-top: 14px; border-top: 1px solid #334155;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td valign="top" style="width: 60%;">
                      <div style="font-size: 11px; color: #94a3b8; text-transform: uppercase;">Plan A Universitario</div>
                      <div style="font-size: 15px; font-weight: 700; color: #ffffff;">${careerData.name}</div>
                      <div style="font-size: 12px; color: #818cf8; margin-top: 2px;">Rol: ${careerData.emergentRole2030}</div>
                    </td>
                    <td valign="top" align="right" style="width: 40%;">
                      <div style="display: inline-block; padding: 6px 12px; background-color: ${semBg}; border: 1px solid ${semColor}; border-radius: 20px; color: ${semColor}; font-size: 11px; font-weight: 800; text-align: center;">
                        ● ${semaphoreText}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- SECCION 1: VIABILIDAD BANI -->
    <tr>
      <td style="padding: 0 28px 20px;">
        <div style="background-color: #0f172a; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px 18px; border: 1px solid #1e293b; border-left: 4px solid #3b82f6;">
          <div style="font-size: 12px; font-weight: 800; color: #60a5fa; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
            1. Diagnóstico de Viabilidad BANI (Horizonte 2030)
          </div>
          <p style="margin: 0; font-size: 14px; color: #cbd5e1; line-height: 1.6;">
            ${careerData.summary2030}
          </p>
          <div style="margin-top: 10px; font-size: 12px; color: #94a3b8; font-weight: 600;">
            ⚡ Exposición a Automatización Operativa: <strong style="color: #f59e0b;">${careerData.disruptionScore}%</strong>
          </div>
        </div>
      </td>
    </tr>

    <!-- SECCION 2: 3 SUPERPODERES HUMANOS -->
    <tr>
      <td style="padding: 0 28px 24px;">
        <div style="font-size: 13px; font-weight: 800; color: #f1f5f9; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
          2. Tus 3 Superpoderes Humanos Insustituibles (El 30% Estratégico)
        </div>
        ${superpowersList.map((sp, idx) => `
          <div style="background-color: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 12px 16px; margin-bottom: 8px;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td style="width: 28px; vertical-align: top;">
                  <div style="width: 22px; height: 22px; border-radius: 50%; background-color: #3b82f6; color: #ffffff; text-align: center; font-size: 12px; line-height: 22px; font-weight: 800;">
                    ${idx + 1}
                  </div>
                </td>
                <td style="vertical-align: middle; padding-left: 8px;">
                  <div style="font-size: 14px; font-weight: 600; color: #f8fafc;">${sp}</div>
                </td>
              </tr>
            </table>
          </div>
        `).join('')}
      </td>
    </tr>

    <!-- SECCION 3: BRECHA CURRICULAR -->
    <tr>
      <td style="padding: 0 28px 24px;">
        <div style="font-size: 13px; font-weight: 800; color: #f1f5f9; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
          3. Auditoría de Brecha Curricular (Universidad vs. Mercado)
        </div>
        <table width="100%" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td valign="top" style="width: 50%; padding-right: 6px;">
              <div style="background-color: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 14px 14px; min-height: 120px;">
                <div style="font-size: 11px; font-weight: 800; color: #f87171; text-transform: uppercase; margin-bottom: 8px;">
                  ⚠️ Materias con Riesgo de Desfase
                </div>
                <ul style="margin: 0; padding-left: 16px; font-size: 12px; color: #fca5a5; line-height: 1.5;">
                  ${careerData.obsoleteSubjects.map(s => `<li style="margin-bottom: 4px;">${s}</li>`).join('')}
                </ul>
              </div>
            </td>
            <td valign="top" style="width: 50%; padding-left: 6px;">
              <div style="background-color: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 14px 14px; min-height: 120px;">
                <div style="font-size: 11px; font-weight: 800; color: #34d399; text-transform: uppercase; margin-bottom: 8px;">
                  🎯 Exigencias Reales del Mercado
                </div>
                <ul style="margin: 0; padding-left: 16px; font-size: 12px; color: #6ee7b7; line-height: 1.5;">
                  ${careerData.curriculumBlindSpots.map(s => `<li style="margin-bottom: 4px;">${s}</li>`).join('')}
                </ul>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- SECCION 4: RUTA BIMODAL & PLAN B -->
    <tr>
      <td style="padding: 0 28px 24px;">
        <div style="background-color: #1e1b4b; border: 1px solid #4338ca; border-radius: 12px; padding: 18px 20px;">
          <div style="font-size: 12px; font-weight: 800; color: #a5b4fc; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
            4. Ruta Bimodal & Acelerador Táctico
          </div>
          <div style="font-size: 13px; color: #e0e7ff; margin-bottom: 8px; line-height: 1.5;">
            <strong>🎓 Vía 1 (Universidad 4-5 años):</strong> ${careerData.bimodalPath.via1}
          </div>
          <div style="font-size: 13px; color: #e0e7ff; margin-bottom: 8px; line-height: 1.5;">
            <strong>⚡ Vía 2 (Microcredenciales 3-6 meses):</strong> ${careerData.bimodalPath.via2}
          </div>
          <div style="font-size: 13px; color: #fbbf24; margin-bottom: 12px; line-height: 1.5;">
            <strong>🛡️ Alternativa Plan B:</strong> ${careerData.odysseyPlans.plan2.title}
          </div>
          <div style="background-color: rgba(0,0,0,0.3); border-radius: 6px; padding: 10px 12px; font-size: 12px; color: #cbd5e1;">
            📍 <strong>Misión Prototipado Stanford (7 Días):</strong> ${careerData.rapidPrototype.interviewTitle}
          </div>
        </div>
      </td>
    </tr>

    <!-- SECCION 5: COMPROMISO FAMILIAR -->
    <tr>
      <td style="padding: 0 28px 28px;">
        <div style="background-color: #0f172a; border-radius: 8px; padding: 16px 18px; border: 1px solid #1e293b; font-size: 12px; color: #94a3b8; font-style: italic; line-height: 1.6;">
          "Presento este reporte a mi familia como resultado de una investigación seria y basada en datos, comprometiéndome a actuar con disciplina y adaptabilidad bajo el protocolo de tregua de 30 días para evaluar la evidencia de campo y microcredenciales."
        </div>
      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td style="padding: 24px 28px; background-color: #0b0f19; border-top: 1px solid #1f2937; text-align: center;">
        <div style="font-size: 13px; font-weight: 700; color: #f1f5f9;">
          Lic. Francisco Javier Robledo Zatarain
        </div>
        <div style="font-size: 11px; color: #64748b; margin-top: 4px;">
          Orientación Vocacional Disruptiva con Inteligencia Artificial (OVDIA 2030)
        </div>
        <div style="font-size: 11px; color: #475569; margin-top: 6px;">
          Contacto: psicfjrz@hotmail.com • Tijuana, Baja California, México
        </div>
      </td>
    </tr>

  </table>
</body>
</html>
    `.trim();
  };

  const emailSubject = `Tu Reporte Vocacional OVDIA 2030 - ${studentData?.name || 'Aspirante'}`;
  const emailBody = buildEmailBody();
  const emailHtml = buildEmailHtml();

  const isConfigured = Boolean(
    activeConfig.serviceId && activeConfig.templateId && activeConfig.publicKey
  );

  // 1. Envío 100% Automático en 1 Clic
  const handleSendAutomaticEmail = async () => {
    if (!emailInput || !emailInput.includes('@')) {
      setSendStatus({ success: false, message: 'Por favor ingresa un correo electrónico válido.' });
      return;
    }

    setIsSending(true);
    setSendStatus(null);

    // Intento 1: Intentar mediante Endpoint Serverless de Vercel
    try {
      const serverRes = await fetch('/api/send-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: emailInput,
          studentName: studentData?.name || 'Aspirante',
          emailSubject,
          emailText: emailBody
        })
      });

      if (serverRes.ok) {
        setIsSending(false);
        setSendStatus({
          success: true,
          message: `¡Reporte enviado con éxito a ${emailInput}! Revisa tu bandeja de entrada.`
        });
        return;
      }
    } catch (e) {
      // Continuar al intento 2 si falla el endpoint
    }

    // Intento 2: Mediante EmailJS configurado en el Kiosco
    if (isConfigured) {
      try {
        await emailjs.send(
          activeConfig.serviceId,
          activeConfig.templateId,
          {
            to_email: emailInput,
            email: emailInput,
            to_name: studentData?.name || 'Aspirante',
            name: studentData?.name || 'Aspirante',
            student_name: studentData?.name || 'Aspirante',
            career_name: careerData.name,
            subject: emailSubject,
            title: emailSubject,
            message: emailHtml,
            message_html: emailHtml,
            message_text: emailBody
          },
          activeConfig.publicKey
        );

        setIsSending(false);
        setSendStatus({
          success: true,
          message: `¡Reporte enviado en automático a ${emailInput}! Revisa tu bandeja de entrada.`
        });
        return;
      } catch (err) {
        console.error('Error con EmailJS:', err);
        setIsSending(false);
        setSendStatus({
          success: false,
          message: `Error al enviar: ${err.text || err.message || 'Verifica la configuración de correo'}. Puedes usar la opción de Gmail abajo.`
        });
        return;
      }
    }

    // Si no hay configuración de servidor ni de EmailJS
    setIsSending(false);
    setSendStatus({
      success: false,
      message: 'No se pudo contactar el servicio de correo. Puedes usar el botón de Gmail o WhatsApp abajo.'
    });
  };

  // Opciones manuales
  const handleOpenGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailInput)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(emailBody);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2500);
  };

  const handleDownloadEml = () => {
    const emlContent = `To: ${emailInput}\nSubject: ${emailSubject}\nX-Unsent: 1\nContent-Type: text/plain; charset="utf-8"\n\n${emailBody}`;
    const blob = new Blob([emlContent], { type: 'message/rfc822' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Reporte_Vocacional_2030_${studentData?.name ? studentData.name.replace(/\s+/g, '_') : 'OVDIA'}.eml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-xl w-full shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-white">
                Enviar Reporte Vocacional 2030
              </h3>
              <p className="text-xs text-slate-400">
                Despacho oficial al correo del estudiante
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-300 text-lg cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Recipient Input */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span>Correo electrónico del alumno:</span>
            {isConfigured && (
              <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Correo Emisor Activo
              </span>
            )}
          </label>
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="alumno@ejemplo.com"
            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm font-medium"
          />
        </div>

        {/* Primary Action: 1-Click Automatic Send */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleSendAutomaticEmail}
            disabled={isSending}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-heading font-black text-sm shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            {isSending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                <span>Despachando correo al instante...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-slate-950" />
                <span>Enviar Reporte Automático por Correo</span>
              </>
            )}
          </button>

          {/* Feedback Status Alert */}
          {sendStatus && (
            <div
              className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 animate-fadeIn ${
                sendStatus.success
                  ? 'bg-emerald-950/80 border border-emerald-700/70 text-emerald-300'
                  : 'bg-rose-950/80 border border-rose-700/70 text-rose-300'
              }`}
            >
              {sendStatus.success ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <span>{sendStatus.message}</span>
              </div>
            </div>
          )}
        </div>

        {/* Secondary Manual Channels (Collapsible / Alternative) */}
        <div className="pt-2 border-t border-slate-800/80 space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Opciones de respaldo manual:
          </span>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleOpenGmail}
              className="py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-red-400" />
              <span>Abrir en Gmail</span>
            </button>

            <button
              type="button"
              onClick={handleCopyText}
              className="py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{copiedSuccess ? '¡Copiado!' : 'Copiar WhatsApp'}</span>
            </button>
          </div>
        </div>

        {/* Nota de privacidad y confidencialidad */}
        <p className="text-[11px] text-slate-500 text-center leading-relaxed">
          🔒 Tus datos son tratados bajo estricta confidencialidad para el despacho de tu reporte y seguimiento vocacional por el <strong className="text-slate-400">Lic. Francisco Javier Robledo Zatarain</strong>.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all cursor-pointer"
        >
          Cerrar
        </button>

      </div>
    </div>
  );
}
