import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Loader2, Sparkles, FileText, ArrowRight, Settings, ExternalLink, Copy, Share2, Download } from 'lucide-react';
import { findCareerOrGenerate } from '../data/ovdiaKnowledgeBase';

export function EmailModal({ isOpen, onClose, studentData, baniData, aeiouData }) {
  const [emailInput, setEmailInput] = useState(studentData?.email || '');
  const [isSending, setIsSending] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  // EmailJS optional config stored in localStorage
  const [emailJsConfig, setEmailJsConfig] = useState(() => {
    const saved = localStorage.getItem('ovdia_emailjs_config');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return { serviceId: '', templateId: '', publicKey: '' };
  });

  if (!isOpen) return null;

  const careerData = findCareerOrGenerate(studentData?.career);

  // Build the complete email text body
  const buildEmailBody = () => {
    const superpowers = (aeiouData?.humanSuperpowers || careerData.humanSuperpowers.slice(0, 3)).join('\n• ');
    return `REPORTE EJECUTIVO DE PROSPECCIÓN Y EGRESO 2030 (MODELO OVDIA)
Autor Metodológico: Lic. Francisco Javier Robledo Zatarain
Fecha: ${new Date().toLocaleDateString('es-MX')}

ESTUDIANTE: ${studentData?.name || 'Aspirante'}
PLAN A UNIVERSITARIO: ${careerData.name}
ROL HÍBRIDO 2030: ${careerData.emergentRole2030}
SEMÁFORO DE ENTRADA: ${baniData?.semaphore || '🟢 SEMÁFORO VERDE'}
ATRACTOR DEL CAOS: ${baniData?.attractor?.name || 'Atractor Extraño'}

1. DIAGNÓSTICO BANI 2030:
${careerData.summary2030}
(Automatización operativa estimada: ${careerData.disruptionScore}%)

2. TUS 3 SUPERPODERES HUMANOS INSUSTITUIBLES:
• ${superpowers}

3. PUNTOS CIEGOS DE LA UNIVERSIDAD A APRENDER POR TU CUENTA:
• ${careerData.curriculumBlindSpots.join('\n• ')}

4. ESTRATEGIA BIMODAL (BLINDAJE DE EMPLEABILIDAD):
- Vía 1 (Universidad 4-5 años): ${careerData.bimodalPath.via1}
- Vía 2 (Microcredenciales técnicas 3-6 meses): ${careerData.bimodalPath.via2}

5. PLAN B DE CONTINGENCIA & EXPERIMENTO A 7 DÍAS:
- Opción Alterna: ${careerData.odysseyPlans.plan2.title}
- Micro-Experimento (Stanford): ${careerData.rapidPrototype.interviewTitle}

DECLARACIÓN FAMILIAR:
"Presento este reporte a mi familia como resultado de una investigación seria y basada en datos, acordando una tregua de 30 días para evaluar la evidencia antes de tomar decisiones apresuradas."
`;
  };

  const emailSubject = `Tu Reporte Vocacional 2030 (OVDIA) - ${studentData?.name || 'Aspirante'}`;
  const emailBody = buildEmailBody();

  // 1. Direct Webmail (Gmail) Link
  const handleOpenGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailInput)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(gmailUrl, '_blank');
  };

  // 2. Default System Mail Client (Mailto)
  const handleOpenMailto = () => {
    const mailtoUrl = `mailto:${encodeURIComponent(emailInput)}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  // 3. Copy full formatted text for WhatsApp or Email
  const handleCopyText = () => {
    navigator.clipboard.writeText(emailBody);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
  };

  // 4. Download as standard .eml message file
  const handleDownloadEml = () => {
    const emlContent = `To: ${emailInput}
Subject: ${emailSubject}
X-Unsent: 1
Content-Type: text/plain; charset="utf-8"

${emailBody}`;

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
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-white">
                Enviar Reporte 2030 por Correo / WhatsApp
              </h3>
              <p className="text-xs text-slate-400">
                Lleva tu informe formal directo a tu dispositivo
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
          <label className="text-xs font-semibold text-slate-300">
            Correo de destino:
          </label>
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="tu.correo@ejemplo.com"
            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm"
          />
        </div>

        {/* Real Dispatch Actions */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
            Elige cómo deseas despachar el reporte:
          </span>

          {/* Option 1: Open in Gmail */}
          <button
            type="button"
            onClick={handleOpenGmail}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-heading font-bold text-xs shadow-md shadow-red-900/20 flex items-center justify-between transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-white" />
              <span>Abrir Borrador Directo en Gmail</span>
            </div>
            <ExternalLink className="w-4 h-4 text-white/80" />
          </button>

          {/* Option 2: Default Mail App (Mailto) */}
          <button
            type="button"
            onClick={handleOpenMailto}
            className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-heading font-bold text-xs flex items-center justify-between transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Abrir en mi App de Correo (Outlook / Apple Mail)</span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </button>

          {/* Option 3: Copy for WhatsApp */}
          <button
            type="button"
            onClick={handleCopyText}
            className="w-full py-3 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 font-heading font-bold text-xs flex items-center justify-between transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Share2 className="w-4 h-4 text-emerald-400" />
              <span>{copiedSuccess ? '¡Texto Copiado al Portapapeles!' : 'Copiar Texto Completo para WhatsApp Familiar'}</span>
            </div>
            <Copy className="w-4 h-4 text-emerald-400" />
          </button>

          {/* Option 4: Download .eml file */}
          <button
            type="button"
            onClick={handleDownloadEml}
            className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-semibold flex items-center justify-between transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Download className="w-4 h-4 text-slate-400" />
              <span>Descargar Mensaje de Correo (.eml)</span>
            </div>
            <FileText className="w-4 h-4 text-slate-500" />
          </button>
        </div>

        {/* Email Preview Box */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1.5 text-slate-400">
          <span className="font-semibold text-slate-300 block">Vista Previa del Asunto:</span>
          <p className="text-cyan-300 font-mono text-[11px] truncate">
            {emailSubject}
          </p>
          <span className="text-[11px] text-slate-500 block">
            Incluye tu diagnóstico BANI, Superpoderes 30%, Puntos Ciegos y el Acuerdo a 30 Días.
          </span>
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
