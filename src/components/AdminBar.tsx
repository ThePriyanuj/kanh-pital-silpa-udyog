import React from 'react';
import { ShieldCheck, Plus, Key, RotateCcw, LogOut } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface AdminBarProps {
  isAssamese: boolean;
}

export const AdminBar: React.FC<AdminBarProps> = ({ isAssamese }) => {
  const { isAdmin, logout, openAddProduct, openPinModal, resetProducts } = useAdmin();

  if (!isAdmin) return null;

  const handleReset = () => {
    if (
      window.confirm(
        isAssamese
          ? 'আপুনি নিশ্চিতনে? এই কাৰ্যই সকলো সামগ্ৰী মূল অৱস্থালৈ ঘূৰাই আনিব।'
          : 'Are you sure you want to restore the default product catalog? Any custom added items will be reset.'
      )
    ) {
      resetProducts();
    }
  };

  return (
    <aside
      aria-label="Admin Control Bar"
      className="sticky top-16 z-30 bg-slate-900 text-white border-b border-amber-500/30 px-4 py-2.5 shadow-lg backdrop-blur-md animate-in slide-in-from-top-2 duration-200"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{isAssamese ? 'প্ৰশাসক মোড সক্ৰিয় (সম্পাদনাৰ অনুমতি)' : 'Admin Mode Active (Write Access)'}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={openAddProduct}
            className="btn-gold-metallic h-8 px-3 rounded-lg font-bold text-xs flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{isAssamese ? 'নতুন সামগ্ৰী +' : 'Add Product +'}</span>
          </button>

          <button
            type="button"
            onClick={openPinModal}
            className="h-8 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white font-medium text-xs flex items-center gap-1.5 transition-colors"
            title="Change Admin PIN"
          >
            <Key className="w-3 h-3 text-amber-400" />
            <span className="hidden sm:inline">{isAssamese ? 'PIN সলনি' : 'Change PIN'}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="h-8 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white font-medium text-xs flex items-center gap-1.5 transition-colors"
            title="Reset to default products"
          >
            <RotateCcw className="w-3 h-3 text-slate-400" />
            <span className="hidden sm:inline">{isAssamese ? 'পূৰ্বৰ অৱস্থা' : 'Reset'}</span>
          </button>

          <button
            type="button"
            onClick={logout}
            className="h-8 px-3 rounded-lg bg-red-600/80 hover:bg-red-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
            title="Exit Admin Mode"
          >
            <LogOut className="w-3 h-3" />
            <span>{isAssamese ? 'প্ৰস্থান' : 'Exit Admin'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
