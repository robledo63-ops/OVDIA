import React, { useState, useEffect } from 'react';
import { School, TrendingDown, Users, CheckCircle2, ShieldCheck, Copy, Award, BarChart3, AlertTriangle, Key, Cpu, Sparkles, AlertCircle, Eye, EyeOff, Loader2 } from 'lucide-react';
import { getAiApiKey, saveAiApiKey, testAiConnection, detectProvider } from '../services/aiService';

export function UniversityDashboardModal({ isOpen, onClose, fairStats }) {
  const [copied, setCopied] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [testStatus, setTestStatus] = useState(null); // { loading, success, message }

  useEffect(() => {
    if (isOpen) {
      setApiKeyInput(getAiApiKey());
      setTestStatus(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveAndTest = async () => {
    setTestStatus({ loading: true, message: 'Probando conexión con la API de IA...' });
    const clean = apiKeyInput.trim();
    saveAiApiKey(clean);
    
    if (!clean) {
      setTestStatus({ loading: false, success: false, message: 'Clave eliminada. El Kiosco operará con el motor heurístico local.' });
      return;
    }

    const result = await testAiConnection(clean);
    setTestStatus({
      loading: false,
      success: result.success,
      message: result.message
    });
  };

  const letterText = `Estimado(a) Director(a) / Rector(a):

En los últimos años, todos los planteles de educación media superior y superior enfrentan tres dolores críticos: la angustia y desorientación de los alumnos ante el egreso, la frustración de las familias frente a carreras tradicionales saturadas y el riesgo de deserción en el primer año universitario, que ronda entre el 25% y 30%.

Las pruebas psicométricas estáticas que aplicamos durante décadas ya no resuelven este problema: entregan etiquetas rígidas del siglo pasado para un mercado laboral dominado por la Inteligencia Artificial.

El Programa OVDIA (Orientación Vocacional Disruptiva con Inteligencia Artificial) es un modelo probado de 4 semanas que transforma esta realidad:
1. Aplica un Tamizaje Digital Masivo en 10 minutos para clasificar grupos en Semáforos de Riesgo, detectando a tiempo a los jóvenes con parálisis severa.
2. Enseña a los estudiantes a usar la IA como copiloto para deconstruir profesiones al 2030, encontrando sus habilidades humanas insustituibles.
3. Cada alumno egresa con un Plan A universitario respaldado por una Ruta Bimodal de certificaciones técnicas y un Reporte Ejecutivo formal que pacifica el diálogo en casa.

En nuestra prueba de campo con 240 estudiantes de bachillerato técnico, OVDIA demostró una reducción del 20.1% en los niveles de estrés en alumnos con ansiedad severa (d de Cohen = 0.91) y un 96.6% de aprobación institucional.

Nuestra propuesta es implementar este programa protocolizado en su institución, capacitando a sus orientadores o facilitándolo directamente, blindando a sus alumnos y posicionando a su colegio como un referente de innovación educativa de vanguardia.

Atentamente,
Lic. Francisco Javier Robledo Zatarain
Titular Metodológico OVDIA • Tijuana, B.C.`;

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-950 text-indigo-400 border border-indigo-800">
              <School className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-black text-xl text-white">
                  Panel Institucional para Universidades y Directores
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                  Modo Rector / Stand
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Evidencia empírica, analítica del stand en vivo y modelo de vinculación oficial
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

        {/* Live Fair Kiosk Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Alumnos Atendidos</span>
            <span className="text-2xl font-heading font-black text-cyan-400">{fairStats.totalEvaluated}</span>
            <span className="text-[11px] text-slate-500 block">En este módulo de feria</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Reducción de Estrés</span>
            <span className="text-2xl font-heading font-black text-emerald-400">-20.1%</span>
            <span className="text-[11px] text-slate-500 block">En Semáforo Rojo (d = 0.91)</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Aprobación Estudiantil</span>
            <span className="text-2xl font-heading font-black text-indigo-400">96.6%</span>
            <span className="text-[11px] text-slate-500 block">Recomienda el programa</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Equivalencia UTMACH</span>
            <span className="text-2xl font-heading font-black text-amber-400">80.1%</span>
            <span className="text-[11px] text-slate-500 block">Frente a psicometría oficial</span>
          </div>
        </div>

        {/* Traffic Light Distribution */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            Distribución Típica en Bachillerato Técnico (Cohorte Validada N=240):
          </span>

          <div className="space-y-2 text-xs">
            <div>
              <div className="flex justify-between font-semibold text-slate-300 mb-1">
                <span className="text-emerald-400">🟢 Semáforo Verde (Exploración / Agilidad): 55%</span>
                <span>Requiere laboratorio grupal</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '55%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-300 mb-1">
                <span className="text-amber-400">🟡 Semáforo Amarillo (Duda / Saturación / FOMO): 30%</span>
                <span>Requiere deconstrucción focalizada</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '30%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-300 mb-1">
                <span className="text-rose-400">🔴 Semáforo Rojo (Parálisis Severa / Pánico al Examen): 15%</span>
                <span className="text-rose-400 font-bold">Prioridad Clínica: Ficha 50 min</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full rounded-full" style={{ width: '15%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Live AI Engine Settings (OpenAI / Gemini) */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-800/60 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/80">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  Motor de IA en Vivo ({detectProvider(apiKeyInput) === 'openai' ? 'OpenAI GPT-4o-mini' : 'Google Gemini'})
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Semana 2
                  </span>
                </h4>
                <p className="text-[11px] text-slate-400">
                  Responde en tiempo real a carreras inéditas escritas por alumnos en el kiosco
                </p>
              </div>
            </div>
            {detectProvider(apiKeyInput) === 'openai' && (
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
                🟢 OpenAI Detectado
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-cyan-400" />
                Clave API (OpenAI <code className="text-cyan-300 font-mono">sk-...</code> o Gemini <code className="text-cyan-300 font-mono">AIza...</code>)
              </span>
              <span className="text-[10px] text-slate-400">
                Auto-detección de proveedor
              </span>
            </label>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type={showKey ? 'text' : 'password'}
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  placeholder="Pega aquí tu clave: sk-proj-... o AIzaSy..."
                  className="w-full px-3 py-2 pr-10 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200"
                >
                  {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>

              <button
                type="button"
                onClick={handleSaveAndTest}
                disabled={testStatus?.loading}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              >
                {testStatus?.loading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Probando...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Guardar y Probar</span>
                  </>
                )}
              </button>
            </div>

            {testStatus && (
              <div
                className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                  testStatus.loading
                    ? 'bg-slate-950/80 border border-slate-700 text-slate-300'
                    : testStatus.success
                    ? 'bg-emerald-950/60 border border-emerald-700/60 text-emerald-300'
                    : 'bg-rose-950/60 border border-rose-700/60 text-rose-300'
                }`}
              >
                {testStatus.loading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-400 shrink-0" />
                ) : testStatus.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                )}
                <span>{testStatus.message}</span>
              </div>
            )}

            <div className="text-[11px] text-slate-500 leading-snug pt-1">
              💡 <strong>Arquitectura Blindada:</strong> La clave queda guardada de forma segura en este navegador. Si el internet del stand se cae, el Kiosco activa automáticamente el <em>Motor Heurístico Local OVDIA</em> sin que el alumno note ningún error.
            </div>
          </div>
        </div>

        {/* Pitch Letter for University Rectors & Principals */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Carta Modelo de Presentación para Autoridades Escolares:
            </span>
            <button
              onClick={handleCopyLetter}
              className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? '¡Copiado al Portapapeles!' : 'Copiar Carta Oficial'}</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed whitespace-pre-line max-h-48 overflow-y-auto">
            {letterText}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all cursor-pointer"
        >
          Cerrar Panel
        </button>

      </div>
    </div>
  );
}
