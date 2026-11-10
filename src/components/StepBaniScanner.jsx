import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, ShieldAlert, Sparkles, HelpCircle, Activity } from 'lucide-react';
import { CHAOS_ATTRACTORS } from '../data/careerAttractors';

export function StepBaniScanner({ initialScore, onNext, onBack, studentName }) {
  // 3 tactile sliders (1 to 5)
  const [slider1, setSlider1] = useState(initialScore?.slider1 || 3); // Parálisis aceleración
  const [slider2, setSlider2] = useState(initialScore?.slider2 || 2); // Presión familiar
  const [slider3, setSlider3] = useState(initialScore?.slider3 || 3); // Miedo al examen / cupos

  // Calculate equivalent score on the 7-35 point scale from the manual:
  // (slider1 + slider2 + slider3) / 15 * 35 -> normalized
  const rawSum = slider1 + slider2 + slider3;
  const scaledScore = Math.round(7 + ((rawSum - 3) / 12) * 28); // Maps 3..15 to 7..35

  // Determine traffic light (Semáforo de Riesgo Vocacional OVDIA)
  let status = {
    color: 'emerald',
    badge: '🟢 SEMÁFORO VERDE',
    title: 'Modo Explorador Ágil (Baja Tensión)',
    desc: 'Cuentas con autonomía y serenidad emocional para diseñar tu proyecto. Tu misión en OVDIA es afinar tu perfil 2030, auditar mallas universitarias y blindar tu carrera con microcredenciales.',
    scoreRange: '7 a 15 pts',
    actionPrompt: 'Acelera tu prospección y deconstruye el futuro.'
  };

  if (scaledScore >= 23) {
    status = {
      color: 'rose',
      badge: '🔴 SEMÁFORO ROJO',
      title: 'Alerta de Parálisis Vocacional (Prioridad de Cuidado)',
      desc: 'Tu mente y tu cuerpo están experimentando una sobrecarga por miedo a fallar, pánico al examen o presión familiar. La regla de oro: ¡No elijas carrera bajo pánico! Primero regularemos tu ansiedad y aislaremos Problemas de Gravedad.',
      scoreRange: '23 a 35 pts',
      actionPrompt: 'Desactiva la culpa y recupera el control.'
    };
  } else if (scaledScore >= 16) {
    status = {
      color: 'amber',
      badge: '🟡 SEMÁFORO AMARILLO',
      title: 'En la Neblina (Incertidumbre y FOMO Digital)',
      desc: 'Tienes dudas comprensibles, dispersión entre varias opciones o temor a que la IA vuelva obsoleta tu profesión. Necesitas filtrar tus alternativas con la matriz AEIOU y estructurar dos planes sólidos.',
      scoreRange: '16 a 22 pts',
      actionPrompt: 'Baja el ruido y conecta con tus patrones de energía.'
    };
  }

  // Detect Chaos Attractor
  let detectedAttractor = CHAOS_ATTRACTORS.extrano;
  if (slider2 >= 4) {
    detectedAttractor = CHAOS_ATTRACTORS.torus;
  } else if (slider3 >= 4) {
    detectedAttractor = CHAOS_ATTRACTORS.punto;
  } else if (slider1 >= 4) {
    detectedAttractor = CHAOS_ATTRACTORS.pendulo;
  }

  const handleContinue = () => {
    onNext({
      slider1,
      slider2,
      slider3,
      scaledScore,
      semaphore: status.badge,
      color: status.color,
      attractor: detectedAttractor
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-8 animate-fadeIn">
      
      {/* Step Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Bloque I • Jugada 1.1</span>
          <span>•</span>
          <span>Tamizaje de Tensión BANI</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black">
          ¿En qué estado llega tu mente hoy, <span className="text-cyan-400">{studentName}</span>?
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          En el entorno BANI, la ansiedad no es un defecto personal: es una reacción normal a un mundo no lineal. Mueve los tres deslizadores con total honestidad (1 = Nada, 5 = Mucho).
        </p>
      </div>

      {/* 3 Interactive Sliders */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-8 backdrop-blur-md shadow-xl">
        
        {/* Slider 1: Aceleración BANI & IA */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <label className="font-semibold text-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-bold">1</span>
              Aceleración Tecnológica & Temor a la IA
            </label>
            <span className="font-mono text-cyan-400 font-bold text-base px-2.5 py-0.5 rounded-lg bg-cyan-950/60 border border-cyan-800/60">
              Nivel {slider1}/5
            </span>
          </div>
          <p className="text-xs text-slate-400">
            "Me siento abrumado(a) al pensar en el futuro porque el mercado laboral cambia muy rápido y temo que la IA reemplace lo que estudie."
          </p>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={slider1}
            onChange={(e) => setSlider1(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="flex justify-between text-[11px] text-slate-500 font-medium">
            <span>1: Cero preocupación</span>
            <span>3: Moderado</span>
            <span>5: Parálisis alta</span>
          </div>
        </div>

        {/* Slider 2: Presión Familiar & Mandatos */}
        <div className="space-y-3 pt-2 border-t border-slate-800/60">
          <div className="flex justify-between items-center text-sm">
            <label className="font-semibold text-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center text-xs font-bold">2</span>
              Presión Intergeneracional / Mandato Familiar
            </label>
            <span className="font-mono text-indigo-400 font-bold text-base px-2.5 py-0.5 rounded-lg bg-indigo-950/60 border border-indigo-800/60">
              Nivel {slider2}/5
            </span>
          </div>
          <p className="text-xs text-slate-400">
            "Siento una presión intensa en casa para elegir una carrera tradicional segura o miedo constante a decepcionar a mis padres."
          </p>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={slider2}
            onChange={(e) => setSlider2(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-indigo-400"
          />
          <div className="flex justify-between text-[11px] text-slate-500 font-medium">
            <span>1: Total apoyo libre</span>
            <span>3: Expectativas normales</span>
            <span>5: Presión asfixiante</span>
          </div>
        </div>

        {/* Slider 3: Pánico al Examen / Cupos Universitarios */}
        <div className="space-y-3 pt-2 border-t border-slate-800/60">
          <div className="flex justify-between items-center text-sm">
            <label className="font-semibold text-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-rose-950 text-rose-400 border border-rose-800 flex items-center justify-center text-xs font-bold">3</span>
              Pánico al Examen de Admisión y Cupos Públicos
            </label>
            <span className="font-mono text-rose-400 font-bold text-base px-2.5 py-0.5 rounded-lg bg-rose-950/60 border border-rose-800/60">
              Nivel {slider3}/5
            </span>
          </div>
          <p className="text-xs text-slate-400">
            "Me preocupa profundamente no ser aceptado(a) en la universidad pública y siento que eso arruinaría por completo mi proyecto de vida."
          </p>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={slider3}
            onChange={(e) => setSlider3(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-rose-400"
          />
          <div className="flex justify-between text-[11px] text-slate-500 font-medium">
            <span>1: En paz / Confianza</span>
            <span>3: Nerviosismo normal</span>
            <span>5: Pánico e insomnio</span>
          </div>
        </div>

      </div>

      {/* Live Calculated OVDIA Diagnosis Box */}
      <div className={`rounded-3xl p-6 md:p-8 border transition-all duration-300 ${
        status.color === 'rose'
          ? 'bg-rose-950/40 border-rose-500/50 shadow-lg shadow-rose-950/50'
          : status.color === 'amber'
          ? 'bg-amber-950/40 border-amber-500/50 shadow-lg shadow-amber-950/50'
          : 'bg-emerald-950/40 border-emerald-500/50 shadow-lg shadow-emerald-950/50'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider bg-slate-950 border border-slate-700">
                {status.badge}
              </span>
              <span className="text-xs text-slate-400">
                Puntaje Estimado: <strong>{scaledScore} / 35 pts</strong>
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-black mt-2 text-white">
              {status.title}
            </h3>
          </div>
          
          {/* Attractor badge */}
          <div className="text-right">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Atractor del Caos Detectado</span>
            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-lg border mt-1 ${detectedAttractor.badgeColor}`}>
              {detectedAttractor.name}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-200 mt-4 leading-relaxed">
          {status.desc}
        </p>

        {/* Life Design Concept: Desactivación de Problemas de Gravedad */}
        <div className="mt-5 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider">
            <Activity className="w-4 h-4" />
            <span>Desactivación de Problema de Gravedad (Stanford Life Design):</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
              <strong className="text-rose-400 block mb-1">🚫 No puedes cambiar (Gravedad):</strong>
              Los cupos limitados en universidades públicas ni la aceleración con la que avanza la IA. Luchar mentalmente contra esto solo drena tu energía.
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
              <strong className="text-emerald-400 block mb-1">✅ Dónde SÍ tienes control total:</strong>
              En diseñar tu <span className="text-cyan-300 font-semibold">Ruta Bimodal</span>, en tus hábitos y en las microcredenciales de 3 meses que puedes cursar en paralelo.
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-sm font-medium transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Atrás</span>
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 text-sm font-heading font-black tracking-wide shadow-lg shadow-cyan-500/20 transition-all transform active:scale-95 cursor-pointer"
        >
          <span>Avanzar a la Brújula de Flujo AEIOU</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
