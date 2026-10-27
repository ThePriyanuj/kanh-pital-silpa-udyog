import React, { useState } from 'react';
import { X, Key, ShieldCheck, AlertCircle } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface ChangePinModalProps {
  isAssamese: boolean;
}

export const ChangePinModal: React.FC<ChangePinModalProps> = ({ isAssamese }) => {
  const { isPinModalOpen, closePinModal, changePin } = useAdmin();
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isPinModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (newPin !== confirmPin) {
      setErrorMsg(isAssamese ? 'নতুন PIN দুটা মিল নাই।' : 'New PINs do not match.');
      return;
    }

    const res = changePin(oldPin, newPin);
    if (!res.success) {
      setErrorMsg(res.error || 'Failed to update PIN.');
    } else {
      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
        setOldPin('');
        setNewPin('');
        setConfirmPin('');
        closePinModal();
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl border border-[#E8E2D2] shadow-2xl overflow-hidden p-6 sm:p-8 space-y-5"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={closePinModal}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-1.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-[#B8860B] mx-auto flex items-center justify-center shadow-xs">
            <Key className="w-6 h-6" />
          </div>
          <h3 className="font-serif-heritage text-xl font-bold text-[#0F172A]">
            {isAssamese ? 'PIN সলনি কৰক' : 'Change Admin PIN'}
          </h3>
          <p className="text-xs text-[#475569]">
            {isAssamese ? 'সুৰক্ষাৰ বাবে নতুন ৪-অংকৰ PIN বাছক।' : 'Update your secret admin passkey.'}
          </p>
        </div>

        {successMsg ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center text-emerald-800 space-y-1">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
            <p className="text-xs font-bold">
              {isAssamese ? 'PIN সফলতাৰে সলনি কৰা হ’ল!' : 'PIN successfully updated!'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            {errorMsg && (
              <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="space-y-1">
              <label className="font-semibold text-[#0F172A] block">
                {isAssamese ? 'বৰ্তমানৰ PIN:' : 'Current PIN:'}
              </label>
              <input
                type="password"
                maxLength={6}
                value={oldPin}
                onChange={(e) => setOldPin(e.target.value)}
                required
                className="w-full h-11 px-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B] text-center font-mono tracking-widest text-lg"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-[#0F172A] block">
                {isAssamese ? 'নতুন PIN:' : 'New PIN (4+ digits):'}
              </label>
              <input
                type="password"
                maxLength={6}
                value={newPin}
                onChange={(e) => setNewPin(e.target.value)}
                required
                className="w-full h-11 px-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B] text-center font-mono tracking-widest text-lg"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-[#0F172A] block">
                {isAssamese ? 'নতুন PIN পুনৰ নিশ্চিত কৰক:' : 'Confirm New PIN:'}
              </label>
              <input
                type="password"
                maxLength={6}
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value)}
                required
                className="w-full h-11 px-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B] text-center font-mono tracking-widest text-lg"
              />
            </div>

            <button
              type="submit"
              className="btn-gold-metallic w-full h-12 mt-2 rounded-xl font-bold text-xs shadow-md"
            >
              {isAssamese ? 'PIN সংৰক্ষণ কৰক' : 'Save New PIN'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
