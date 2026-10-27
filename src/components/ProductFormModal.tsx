import React, { useState, useEffect } from 'react';
import { X, Upload, Plus, Trash2, Image as ImageIcon, Save } from 'lucide-react';
import { Product, CATEGORIES } from '../data/products';
import { useAdmin } from '../context/AdminContext';

interface ProductFormModalProps {
  isAssamese: boolean;
}

export const ProductFormModal: React.FC<ProductFormModalProps> = ({ isAssamese }) => {
  const { isProductModalOpen, closeProductModal, editingProduct, saveProduct } = useAdmin();

  const [formData, setFormData] = useState<Partial<Product>>({
    nameEn: '',
    nameAs: '',
    category: 'cultural',
    categoryLabelEn: 'Cultural & Xorai',
    categoryLabelAs: 'শৰাই আৰু সাংস্কৃতিক',
    originEn: 'Handcrafted in Assam',
    originAs: 'অসমৰ শিল্পীৰ দ্বাৰা নিৰ্মিত',
    materialEn: 'Pure Sarthebari Bell Metal (কাঁহ)',
    materialAs: 'বিশুদ্ধ সৰ্থেবাৰীৰ কাঁহ',
    image: '/assets/aistudio/image_803311ff.png',
    priceNoteEn: 'Price calibrated by weight',
    priceNoteAs: 'ওজন অনুসৰি মূল্য নিৰূপণ কৰা হয়',
    descriptionEn: '',
    descriptionAs: '',
    featuresEn: ['Pure authentic metal', 'Handcrafted by master artisans'],
    featuresAs: ['বিশুদ্ধ পৰম্পৰাগত ধাতু', 'নিপুণ শিল্পীৰ দ্বাৰা হাতে গঢ়া'],
    weightRangeEn: '500g – 2.5kg',
    weightRangeAs: '৫০০ গ্ৰাম – ২.৫ কেজি',
    popularForEn: 'Traditional gifting & daily use',
    popularForAs: 'পৰম্পৰাগত উপহাৰ আৰু দৈনন্দিন ব্যৱহাৰ',
  });

  const [newFeatureEn, setNewFeatureEn] = useState('');
  const [newFeatureAs, setNewFeatureAs] = useState('');

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    } else {
      setFormData({
        id: `custom-prod-${Date.now()}`,
        nameEn: '',
        nameAs: '',
        category: 'cultural',
        categoryLabelEn: 'Cultural & Xorai',
        categoryLabelAs: 'শৰাই আৰু সাংস্কৃতিক',
        originEn: 'Handcrafted in Assam',
        originAs: 'অসমৰ শিল্পীৰ দ্বাৰা নিৰ্মিত',
        materialEn: 'Pure Sarthebari Bell Metal (কাঁহ)',
        materialAs: 'বিশুদ্ধ সৰ্থেবাৰীৰ কাঁহ',
        image: '/assets/aistudio/image_803311ff.png',
        priceNoteEn: 'Price calibrated by weight',
        priceNoteAs: 'ওজন অনুসৰি মূল্য নিৰূপণ কৰা হয়',
        descriptionEn: '',
        descriptionAs: '',
        featuresEn: ['Pure authentic metal', 'Handcrafted by master artisans'],
        featuresAs: ['বিশুদ্ধ পৰম্পৰাগত ধাতু', 'নিপুণ শিল্পীৰ দ্বাৰা হাতে গঢ়া'],
        weightRangeEn: '500g – 2.5kg',
        weightRangeAs: '৫০০ গ্ৰাম – ২.৫ কেজি',
        popularForEn: 'Traditional gifting & daily use',
        popularForAs: 'পৰম্পৰাগত উপহাৰ আৰু দৈনন্দিন ব্যৱহাৰ',
      });
    }
  }, [editingProduct, isProductModalOpen]);

  if (!isProductModalOpen) return null;

  const handleCategoryChange = (catId: 'cultural' | 'dining' | 'puja' | 'wedding') => {
    const found = CATEGORIES.find((c) => c.id === catId);
    setFormData((prev) => ({
      ...prev,
      category: catId,
      categoryLabelEn: found?.labelEn || 'All Items',
      categoryLabelAs: found?.labelAs || 'সকলো সামগ্ৰী',
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFormData((prev) => ({ ...prev, image: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddFeature = () => {
    if (newFeatureEn.trim()) {
      setFormData((prev) => ({
        ...prev,
        featuresEn: [...(prev.featuresEn || []), newFeatureEn.trim()],
        featuresAs: [...(prev.featuresAs || []), newFeatureAs.trim() || newFeatureEn.trim()],
      }));
      setNewFeatureEn('');
      setNewFeatureAs('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      featuresEn: prev.featuresEn?.filter((_, i) => i !== index),
      featuresAs: prev.featuresAs?.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nameEn || !formData.nameEn.trim()) return;

    const fullProduct: Product = {
      id: formData.id || `prod-${Date.now()}`,
      nameEn: formData.nameEn.trim(),
      nameAs: formData.nameAs?.trim() || formData.nameEn.trim(),
      category: (formData.category as any) || 'cultural',
      categoryLabelEn: formData.categoryLabelEn || 'Cultural & Xorai',
      categoryLabelAs: formData.categoryLabelAs || 'শৰাই আৰু সাংস্কৃতিক',
      originEn: formData.originEn || 'Assam',
      originAs: formData.originAs || 'অসম',
      materialEn: formData.materialEn || 'Pure Brass/Bell Metal',
      materialAs: formData.materialAs || 'বিশুদ্ধ কাঁহ/পিতল',
      image: formData.image || '/assets/aistudio/image_803311ff.png',
      priceNoteEn: formData.priceNoteEn || 'Price by weight',
      priceNoteAs: formData.priceNoteAs || 'ওজন অনুসৰি মূল্য',
      descriptionEn: formData.descriptionEn || '',
      descriptionAs: formData.descriptionAs || '',
      featuresEn: formData.featuresEn || [],
      featuresAs: formData.featuresAs || [],
      weightRangeEn: formData.weightRangeEn || 'Variable',
      weightRangeAs: formData.weightRangeAs || 'বিভিন্ন',
      popularForEn: formData.popularForEn || 'Assamese Heritage',
      popularForAs: formData.popularForAs || 'অসমীয়া ঐতিহ্য',
    };

    saveProduct(fullProduct);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E8E2D2] shadow-2xl overflow-hidden my-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#E8E2D2] bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#B8860B] flex items-center justify-center font-bold">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-heritage text-lg sm:text-xl font-bold text-[#0F172A]">
                {editingProduct
                  ? isAssamese ? 'সামগ্ৰী সম্পাদনা কৰক' : 'Edit Product'
                  : isAssamese ? 'নতুন সামগ্ৰী যোগ কৰক' : 'Add New Product'}
              </h3>
              <p className="text-[11px] text-[#475569]">
                {isAssamese ? 'প্ৰশাসক দ্বাৰা তথ্যসমূহ পূৰণ কৰক।' : 'Update catalog details visible to all store visitors.'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeProductModal}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
          {/* Names */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-semibold text-[#0F172A] block">
                Product Name (English) *
              </label>
              <input
                type="text"
                required
                value={formData.nameEn || ''}
                onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                placeholder="e.g. Sarthebari Bell Metal Thali"
                className="w-full h-10 px-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B]"
              />
            </div>
            <div className="space-y-1">
              <label className="font-semibold text-[#0F172A] block">
                Product Name (Assamese)
              </label>
              <input
                type="text"
                value={formData.nameAs || ''}
                onChange={(e) => setFormData({ ...formData, nameAs: e.target.value })}
                placeholder="যেনে: সৰ্থেবাৰীৰ কাঁহৰ কাঁহী"
                className="w-full h-10 px-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B] font-assamese"
              />
            </div>
          </div>

          {/* Category & Material */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-semibold text-[#0F172A] block">Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleCategoryChange(e.target.value as any)}
                className="w-full h-10 px-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B]"
              >
                <option value="cultural">Cultural & Xorai (শৰাই)</option>
                <option value="dining">Dining / Kahi-Bati (কাঁহী-বাতি)</option>
                <option value="puja">Puja & Rituals (পূজা সামগ্ৰী)</option>
                <option value="wedding">Wedding / Biya Sets (বিয়াৰ উপহাৰ)</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="font-semibold text-[#0F172A] block">Material (English)</label>
              <input
                type="text"
                value={formData.materialEn || ''}
                onChange={(e) => setFormData({ ...formData, materialEn: e.target.value })}
                placeholder="e.g. Pure Sarthebari Bell Metal (কাঁহ)"
                className="w-full h-10 px-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B]"
              />
            </div>
          </div>

          {/* Price Note & Weight Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-semibold text-[#0F172A] block">Price Note</label>
              <input
                type="text"
                value={formData.priceNoteEn || ''}
                onChange={(e) => setFormData({ ...formData, priceNoteEn: e.target.value })}
                placeholder="e.g. Price by weight (₹1,500 – ₹4,200)"
                className="w-full h-10 px-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B]"
              />
            </div>
            <div className="space-y-1">
              <label className="font-semibold text-[#0F172A] block">Weight Range</label>
              <input
                type="text"
                value={formData.weightRangeEn || ''}
                onChange={(e) => setFormData({ ...formData, weightRangeEn: e.target.value })}
                placeholder="e.g. 500g – 2.5kg"
                className="w-full h-10 px-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B]"
              />
            </div>
          </div>

          {/* Product Image URL or File Upload */}
          <div className="space-y-2 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D2]">
            <label className="font-semibold text-[#0F172A] block">Product Image</label>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {formData.image && (
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#E8E2D2] bg-white shrink-0">
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex-1 w-full space-y-2">
                <input
                  type="text"
                  value={formData.image || ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="Image URL or path (e.g. /assets/aistudio/...)"
                  className="w-full h-9 px-3 rounded-xl border border-[#E8E2D2] bg-white text-[#0F172A] focus:outline-none focus:border-[#B8860B]"
                />
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E8E2D2] text-[#0F172A] font-semibold text-[11px] hover:bg-slate-50 transition-colors shadow-2xs">
                    <Upload className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>Upload Image from Device</span>
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="space-y-1">
              <label className="font-semibold text-[#0F172A] block">Description (English)</label>
              <textarea
                rows={2}
                value={formData.descriptionEn || ''}
                onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
                placeholder="Product description and craftsmanship details..."
                className="w-full p-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B]"
              />
            </div>
            <div className="space-y-1">
              <label className="font-semibold text-[#0F172A] block">Description (Assamese)</label>
              <textarea
                rows={2}
                value={formData.descriptionAs || ''}
                onChange={(e) => setFormData({ ...formData, descriptionAs: e.target.value })}
                placeholder="সামগ্ৰীৰ ঐতিহ্য আৰু বৈশিষ্ট্য সম্পৰ্কে বিৱৰণ..."
                className="w-full p-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B] font-assamese"
              />
            </div>
          </div>

          {/* Bullet Features */}
          <div className="space-y-2">
            <label className="font-semibold text-[#0F172A] block">Key Features / Specifications</label>
            <div className="space-y-1.5">
              {formData.featuresEn?.map((feat, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F5] border border-[#E8E2D2]">
                  <span className="text-[#0F172A]">{feat}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(idx)}
                    className="p-1 text-red-500 hover:text-red-700 rounded"
                    title="Remove feature"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-1">
              <input
                type="text"
                value={newFeatureEn}
                onChange={(e) => setNewFeatureEn(e.target.value)}
                placeholder="Add new feature (e.g. 100% pure Sarthebari Kanh)"
                className="flex-1 h-9 px-3 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] focus:outline-none focus:border-[#B8860B]"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-3 h-9 rounded-xl bg-white border border-[#E8E2D2] text-[#0F172A] font-semibold flex items-center gap-1 hover:bg-slate-50"
              >
                <Plus className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Add</span>
              </button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-4 border-t border-[#E8E2D2] flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={closeProductModal}
              className="px-4 h-11 rounded-xl bg-[#FAF8F5] hover:bg-slate-100 text-[#475569] font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-gold-metallic px-6 h-11 rounded-xl font-bold flex items-center gap-2 shadow-md"
            >
              <Save className="w-4 h-4" />
              <span>{editingProduct ? 'Save Changes' : 'Create Product'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
