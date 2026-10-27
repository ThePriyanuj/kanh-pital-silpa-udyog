import React, { useState } from 'react';
import { Lock, X, ShieldAlert, KeyRound } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface AdminLoginModalProps {
  isAssamese: boolean;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isAssamese }) => {
  const { isAuthModalOpen, closeAuthModal, login } = useAdmin();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(pin);
    if (!success) {
      setError(true);
      setPin('');
    } else {
      setError(false);
      setPin('');
    }
  };

  const handleKeyPress = (num: string) => {
    if (pin.length < 6) {
      setPin((prev) => prev + num);
      setError(false);
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl border border-[#E8E2D2] shadow-2xl overflow-hidden p-6 sm:p-8 space-y-5"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeAuthModal}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon & Title */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-[#B8860B] mx-auto flex items-center justify-center shadow-xs">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="font-serif-heritage text-xl font-bold text-[#0F172A]">
            {isAssamese ? 'প্ৰশাসক প্ৰৱেশ (Admin Login)' : 'Admin Portal Login'}
          </h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            {isAssamese
              ? 'সামগ্ৰী সম্ভাৰ সংশোধন আৰু পৰিচালনাৰ বাবে সুৰক্ষা PIN দিয়ক।'
              : 'Enter your Admin PIN to unlock write permissions and manage products.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <div className="relative">
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError(false);
                }}
                placeholder="••••"
                autoFocus
                className={`w-full h-14 text-center tracking-[0.5em] text-2xl font-bold rounded-2xl border ${
                  error
                    ? 'border-red-500 bg-red-50/50 text-red-900 focus:ring-red-400'
                    : 'border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:border-[#B8860B] focus:bg-white'
                } focus:outline-none transition-all shadow-inner`}
              />
            </div>
            {error && (
              <p className="text-xs text-red-600 font-semibold flex items-center justify-center gap-1.5 pt-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{isAssamese ? 'ভুল PIN! অনুগ্ৰহ কৰি পুনৰ চেষ্টা কৰক।' : 'Incorrect PIN. Please try again.'}</span>
              </p>
            )}
          </div>

          {/* Quick On-Screen Number Pad (Perfect for Mobile users) */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => handleKeyPress(n)}
                className="h-11 rounded-xl bg-[#FAF8F5] hover:bg-slate-100 border border-[#E8E2D2] text-[#0F172A] font-bold text-base transition-all active:scale-95 flex items-center justify-center"
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPin('')}
              className="h-11 rounded-xl bg-slate-50 hover:bg-slate-100 border border-[#E8E2D2] text-slate-500 text-xs font-semibold active:scale-95 flex items-center justify-center"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => handleKeyPress('0')}
              className="h-11 rounded-xl bg-[#FAF8F5] hover:bg-slate-100 border border-[#E8E2D2] text-[#0F172A] font-bold text-base transition-all active:scale-95 flex items-center justify-center"
            >
              0
            </button>
            <button
              type="button"
              onClick={handleBackspace}
              className="h-11 rounded-xl bg-slate-50 hover:bg-slate-100 border border-[#E8E2D2] text-slate-500 text-xs font-semibold active:scale-95 flex items-center justify-center"
            >
              ⌫
            </button>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              type="submit"
              disabled={pin.length === 0}
              className="btn-gold-metallic w-full h-12 rounded-xl disabled:opacity-50 font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4" />
              <span>{isAssamese ? 'প্ৰৱেশ কৰক' : 'Unlock Admin Mode'}</span>
            </button>

            <div className="text-center">
              <span className="text-[11px] text-[#6B635B] bg-[#FFFBF0] px-3 py-1 rounded-full border border-[#E8E2D2] inline-block">
                Default PIN: <strong className="font-mono gold-gradient-text">1979</strong>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
