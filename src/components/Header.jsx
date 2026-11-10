import React from 'react';
import { Compass, Sparkles, LayoutDashboard, RotateCcw, ShieldCheck, School } from 'lucide-react';

export function Header({ currentStep, totalSteps, onReset, onOpenDashboard, fairStats }) {
  return (
    <header className="no-print border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand & Metodología */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onReset}>
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Compass className="w-5 h-5 text-cyan-400 animate-spin-slow" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                OVDIA 2030
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 hidden sm:inline-block">
                Kiosco Universitario
              </span>
            </div>
            <div className="text-xs text-slate-400 hidden md:block leading-tight mt-1">
              <p className="text-slate-400">Orientación Vocacional Disruptiva con IA</p>
              <p className="text-[11px] text-cyan-400 font-medium whitespace-nowrap">
                Lic. Francisco Javier Robledo Zatarain
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar (if in step flow) */}
        {currentStep > 0 && currentStep <= totalSteps && (
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-400">
              Fase {currentStep} de {totalSteps}
            </span>
            <div className="w-40 h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500 rounded-full"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* University Live Counter */}
          <button
            onClick={onOpenDashboard}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 text-xs font-medium transition-all cursor-pointer shadow-sm"
            title="Ver Panel Institucional para Universidades y Directores"
          >
            <School className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Stand Feria:</span>
            <span className="font-bold text-cyan-300">{fairStats.totalEvaluated} Alumnos</span>
          </button>

          {/* Reset Kiosk */}
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all cursor-pointer"
            title="Reiniciar Kiosco para nuevo estudiante"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden md:inline">Nuevo Alumno</span>
          </button>
        </div>

      </div>
    </header>
  );
}
