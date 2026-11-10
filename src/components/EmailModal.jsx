import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Loader2, Sparkles, FileText, ArrowRight, Settings, ExternalLink, Copy, Share2, Download, AlertCircle, Key, ChevronDown, ChevronUp } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { findCareerOrGenerate } from '../data/ovdiaKnowledgeBase';

export function EmailModal({ isOpen, onClose, studentData, baniData, aeiouData }) {
  const [emailInput, setEmailInput] = useState(studentData?.email || '');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null); // { success: boolean, message: string }
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  // EmailJS config stored in localStorage for the kiosk stand
  const [emailJsConfig, setEmailJsConfig] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ovdia_emailjs_config');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) {}
      }
    }
    return { serviceId: '', templateId: '', publicKey: '' };
  });

  const [configInputs, setConfigInputs] = useState(emailJsConfig);
  const [configSavedNotice, setConfigSavedNotice] = useState(false);

  if (!isOpen) return null;

  const careerData = findCareerOrGenerate(studentData?.career);

  // Build the complete email text body
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

  const emailSubject = `Tu Reporte Vocacional OVDIA 2030 - ${studentData?.name || 'Aspirante'}`;
  const emailBody = buildEmailBody();

  const isConfigured = Boolean(
    emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey
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
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          {
            to_email: emailInput,
            student_name: studentData?.name || 'Aspirante',
            career_name: careerData.name,
            subject: emailSubject,
            message: emailBody
          },
          emailJsConfig.publicKey
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
      isUnconfigured: true,
      message: 'Aún no se ha registrado una cuenta emisora oficial. Registra tu correo abajo en "Configuración de Correo Emisor" o usa el botón de Gmail.'
    });
  };

  // Guardar configuración de EmailJS
  const handleSaveConfig = () => {
    localStorage.setItem('ovdia_emailjs_config', JSON.stringify(configInputs));
    setEmailJsConfig(configInputs);
    setConfigSavedNotice(true);
    setTimeout(() => setConfigSavedNotice(false), 2500);
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
                {sendStatus.isUnconfigured && (
                  <button
                    type="button"
                    onClick={() => setShowConfig(true)}
                    className="block text-cyan-300 underline font-semibold mt-1 cursor-pointer"
                  >
                    Registrar correo emisor ahora (Toma 2 minutos) →
                  </button>
                )}
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

        {/* Sender Email Setup (Acordeón para el Lic. Robledo) */}
        <div className="pt-2 border-t border-slate-800/80">
          <button
            type="button"
            onClick={() => setShowConfig(!showConfig)}
            className="flex items-center justify-between w-full text-xs text-slate-400 hover:text-slate-200 font-semibold cursor-pointer py-1"
          >
            <span className="flex items-center gap-1.5">
              <Settings className="w-3.5 h-3.5 text-cyan-400" />
              <span>Configuración de Correo Emisor (EmailJS)</span>
            </span>
            {showConfig ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showConfig && (
            <div className="mt-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 animate-fadeIn text-xs">
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Para enviar correos <strong>100% automáticos</strong> desde tu propia cuenta de Gmail:
                <br />
                1. Crea una cuenta gratuita en <a href="https://www.emailjs.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline">EmailJS.com ↗</a>.
                <br />
                2. En <em>Email Services</em> vincula tu correo de Gmail (ej. <code className="text-cyan-300">diplomadoia2025tj@gmail.com</code>).
                <br />
                3. Pega aquí tus 3 identificadores:
              </p>

              <div className="space-y-2">
                <input
                  type="text"
                  value={configInputs.serviceId}
                  onChange={(e) => setConfigInputs({ ...configInputs, serviceId: e.target.value })}
                  placeholder="Service ID (ej. service_gmail_ovdia)"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs font-mono"
                />
                <input
                  type="text"
                  value={configInputs.templateId}
                  onChange={(e) => setConfigInputs({ ...configInputs, templateId: e.target.value })}
                  placeholder="Template ID (ej. template_ovdia2030)"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs font-mono"
                />
                <input
                  type="text"
                  value={configInputs.publicKey}
                  onChange={(e) => setConfigInputs({ ...configInputs, publicKey: e.target.value })}
                  placeholder="Public Key (ej. user_xxxxxxxxxxxx)"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs font-mono"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={handleSaveConfig}
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer"
                >
                  Guardar Cuenta Emisora
                </button>
                {configSavedNotice && (
                  <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> ¡Guardado con éxito!
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

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
