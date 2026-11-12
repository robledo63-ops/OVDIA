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
    desc: 'Cuentas con tranquilidad y seguridad para diseñar tu proyecto. Tu misión en OVDIA es conocer tu perfil al 2030, revisar las materias universitarias y complementar tu carrera con cursos prácticos cortos.',
    scoreRange: '7 a 15 pts',
    actionPrompt: 'Acelera tu proyecto y diseña tu futuro.'
  };

  if (scaledScore >= 23) {
    status = {
      color: 'rose',
      badge: '🔴 SEMÁFORO ROJO',
      title: 'Alerta de Parálisis Vocacional (Prioridad de Cuidado)',
      desc: 'Sientes mucha presión por miedo a fallar, nervios por el examen o expectativas en casa. La regla de oro: ¡No elijas carrera bajo pánico! Primero bajaremos ese estrés y separaremos lo que no puedes cambiar de lo que sí está en tus manos.',
      scoreRange: '23 a 35 pts',
      actionPrompt: 'Desactiva la culpa y recupera la calma.'
    };
  } else if (scaledScore >= 16) {
    status = {
      color: 'amber',
      badge: '🟡 SEMÁFORO AMARILLO',
      title: 'En la Neblina (Dudas y Miedo a Quedarse Atrás)',
      desc: 'Tienes dudas normales, estás entre varias carreras o temes que la tecnología cambie tu profesión. Con OVDIA vas a aclarar tus opciones paso a paso y armar dos planes sólidos.',
      scoreRange: '16 a 22 pts',
      actionPrompt: 'Baja las dudas y enfócate en lo que te gusta.'
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
          <span>Termómetro de Estrés y Presión</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black">
          ¿En qué estado llega tu mente hoy, <span className="text-cyan-400">{studentName}</span>?
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Sentir nervios o dudas sobre tu futuro no es un defecto: es totalmente normal ante los cambios rápidos de hoy en día. Mueve los tres controles con honestidad (1 = Nada, 5 = Mucho).
        </p>
      </div>

      {/* 3 Interactive Sliders */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-8 backdrop-blur-md shadow-xl">
        
        {/* Slider 1: Aceleración BANI & IA */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <label className="font-semibold text-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-bold">1</span>
              Rapidez de la Tecnología & Temor a la IA
            </label>
            <span className="font-mono text-cyan-400 font-bold text-base px-2.5 py-0.5 rounded-lg bg-cyan-950/60 border border-cyan-800/60">
              Nivel {slider1}/5
            </span>
          </div>
          <p className="text-xs text-slate-400">
            "Me da incertidumbre pensar en el futuro porque el trabajo cambia muy rápido y temo que la tecnología reemplace lo que estudie."
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
            <span>5: Mucha preocupación</span>
          </div>
        </div>

        {/* Slider 2: Presión Familiar & Mandatos */}
        <div className="space-y-3 pt-2 border-t border-slate-800/60">
          <div className="flex justify-between items-center text-sm">
            <label className="font-semibold text-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center text-xs font-bold">2</span>
              Presión Familiar y Expectativas de Casa
            </label>
            <span className="font-mono text-indigo-400 font-bold text-base px-2.5 py-0.5 rounded-lg bg-indigo-950/60 border border-indigo-800/60">
              Nivel {slider2}/5
            </span>
          </div>
          <p className="text-xs text-slate-400">
            "Siento presión en casa para elegir una carrera tradicional que ellos aprueben, o me da miedo decepcionar a mis papás."
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
            <span>1: Cero presión / Me apoyan</span>
            <span>3: Expectativas normales</span>
            <span>5: Siento que no puedo fallar</span>
          </div>
        </div>

        {/* Slider 3: Pánico al Examen / Cupos Universitarios */}
        <div className="space-y-3 pt-2 border-t border-slate-800/60">
          <div className="flex justify-between items-center text-sm">
            <label className="font-semibold text-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-rose-950 text-rose-400 border border-rose-800 flex items-center justify-center text-xs font-bold">3</span>
              Nervios o Miedo al Examen de Admisión
            </label>
            <span className="font-mono text-rose-400 font-bold text-base px-2.5 py-0.5 rounded-lg bg-rose-950/60 border border-rose-800/60">
              Nivel {slider3}/5
            </span>
          </div>
          <p className="text-xs text-slate-400">
            "Me preocupa no ser aceptado(a) en la universidad pública y siento que eso frenaría mis planes."
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
            <span>1: Muy tranquilo(a)</span>
            <span>3: Nervios normales</span>
            <span>5: Mucho pánico</span>
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
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Tu Patrón de Reacción al Estrés</span>
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
            <span>Lo que puedes controlar vs. Lo que no está en tus manos:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
              <strong className="text-rose-400 block mb-1">🚫 No te desgastes en lo que no puedes cambiar:</strong>
              Los lugares limitados en universidades públicas ni la rapidez con que avanza la tecnología. Preocuparte por eso solo te quita energía.
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
              <strong className="text-emerald-400 block mb-1">✅ Dónde SÍ tienes el control total:</strong>
              En diseñar tu <span className="text-cyan-300 font-semibold">Ruta de Dos Caminos</span>, en tus hábitos y en los cursos prácticos cortos que puedes tomar para complementar.
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
