import React, { useState } from 'react';
import { MessageCircle, Scale, Sparkles, Eye, ArrowRight, Plus, Edit2, Trash2 } from 'lucide-react';
import { CATEGORIES, Product } from '../data/products';
import { buildWhatsAppLink } from '../utils/storeHours';
import { useAdmin } from '../context/AdminContext';

interface ProductCatalogProps {
  isAssamese: boolean;
  onSelectProduct: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  isAssamese,
  onSelectProduct,
}) => {
  const { products, isAdmin, openAddProduct, openEditProduct, deleteProduct } = useAdmin();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = products.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameAs.includes(searchQuery) ||
      item.materialEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDelete = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    if (
      window.confirm(
        isAssamese
          ? `আপুনি সঁচাকৈ "${product.nameAs}" আঁতৰাব বিচাৰেনে?`
          : `Are you sure you want to delete "${product.nameEn}" from the catalog?`
      )
    ) {
      deleteProduct(product.id);
    }
  };

  return (
    <section id="catalog" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#9A6F28] tracking-wider uppercase block">
                {isAssamese ? 'প্ৰত্যক্ষ হস্তশিল্প সম্ভাৰ' : 'Authentic Catalog'}
              </span>
              {isAdmin && (
                <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Admin Edit Mode
                </span>
              )}
            </div>
            <h2 className="font-serif-heritage text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1C1917] mt-1 tracking-tight">
              {isAssamese ? 'ঐতিহ্যবাহী কাঁহ আৰু পিতলৰ সংগ্ৰহ' : 'Handcrafted Masterpieces'}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B635B] mt-1 max-w-xl">
              {isAssamese
                ? 'সৰ্থেবাৰীৰ কাঁহ আৰু হাজোৰ পিতলৰ সাজ-বাচন ওজন আৰু কাৰিকৰী অনুসৰি নিৰূপণ কৰা হয়।'
                : 'Every piece is hand-hammered by master artisans. Pricing is weight-calibrated to current metal grade.'}
            </p>
          </div>

          {/* Quick Search & Admin Add Product Button */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {isAdmin && (
              <button
                type="button"
                onClick={openAddProduct}
                className="btn-gold-metallic h-10 px-3.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-sm shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>{isAssamese ? 'সামগ্ৰী যোগ +' : 'Add Product'}</span>
              </button>
            )}

            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder={isAssamese ? 'সামগ্ৰী বিচাৰক (শৰাই, কাঁহী...)' : 'Search Xorai, Kahi, Bati...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 px-3.5 text-xs rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] placeholder-[#475569]/60 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-400 focus:bg-white transition-all shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Snap-Scroll Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-amber-500 ${isActive
                    ? 'btn-gold-metallic shadow-xs'
                    : 'bg-[#FAF8F5] text-[#475569] hover:text-[#0F172A] border border-[#E8E2D2] hover:bg-white'
                  }`}
              >
                <span>{isAssamese ? cat.labelAs : cat.labelEn}</span>
                {cat.id === 'all' && (
                  <span className={`text-[10px] ml-1 px-1.5 py-0.2 rounded-full ${isActive ? 'bg-[#2b1803]/15 text-[#2b1803] font-bold' : 'bg-[#E8E2D2] text-[#0F172A]'}`}>
                    {products.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid: 2-column mobile, 3-column tablet, 4-column desktop */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center bg-[#FAF8F5] rounded-2xl border border-[#E8E2D2]">
            <p className="text-sm text-[#475569]">
              {isAssamese ? 'কোনো সামগ্ৰী বিচাৰি পোৱা নগ’ল।' : 'No items match your search.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold gold-gradient-text hover:underline"
            >
              {isAssamese ? 'সকলো সামগ্ৰী চাওক' : 'View All Items'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredProducts.map((product) => {
              const whatsAppUrl = buildWhatsAppLink({
                productName: isAssamese ? product.nameAs : product.nameEn,
                isAssamese,
              });

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col bg-[#FAF8F5] rounded-2xl border border-[#E8E2D2] hover:border-[#B8860B]/50 hover:bg-white transition-all duration-200 overflow-hidden shadow-2xs hover:shadow-sm"
                >
                  {/* Admin Direct Action Floating Controls (Only visible when logged in as Admin) */}
                  {isAdmin && (
                    <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 bg-black/75 backdrop-blur-md p-1 rounded-xl shadow-md">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEditProduct(product);
                        }}
                        className="p-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-black font-bold transition-transform active:scale-90"
                        title="Edit Product"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleDelete(e, product)}
                        className="p-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-transform active:scale-90"
                        title="Delete Product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Card Visual with 4:3 ratio */}
                  <div
                    onClick={() => onSelectProduct(product)}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.nameEn}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Weight & Craft Tag */}
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md border border-[#E8E2D2] text-[10px] font-semibold text-[#0F172A] flex items-center gap-1 shadow-2xs">
                      <Scale className="w-2.5 h-2.5 text-[#B8860B]" />
                      <span>{isAssamese ? product.weightRangeAs : product.weightRangeEn}</span>
                    </div>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none sm:pointer-events-auto">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white/95 text-[#1C1917] text-xs font-medium flex items-center gap-1 shadow-md hover:bg-white"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#9A6F28]" />
                        <span>{isAssamese ? 'বিস্তাৰিত' : 'Quick View'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-2.5">
                    <div className="space-y-1">
                      <span className="text-[10px] font-semibold text-[#9A6F28] tracking-wider block truncate">
                        {isAssamese ? product.materialAs : product.materialEn}
                      </span>
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-sm sm:text-base font-bold text-[#0F172A] line-clamp-2 cursor-pointer hover:text-[#B8860B] transition-colors leading-snug"
                        title={isAssamese ? product.nameAs : product.nameEn}
                      >
                        {isAssamese ? product.nameAs : product.nameEn}
                      </h3>
                      <p className="text-[11px] text-[#475569] line-clamp-2 leading-relaxed">
                        {isAssamese ? product.descriptionAs : product.descriptionEn}
                      </p>
                    </div>

                    {/* Pricing by weight note */}
                    <div className="pt-1 border-t border-[#E8E2D2] flex items-center justify-between text-[11px]">
                      <span className="gold-gradient-text font-bold">
                        {isAssamese ? 'ওজন অনুসৰি মূল্য' : 'Price by Weight'}
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        className="text-[#475569] hover:text-[#0F172A] font-semibold text-[11px] underline underline-offset-2"
                      >
                        {isAssamese ? 'নক্সা চাওক' : 'Details'}
                      </button>
                    </div>

                    {/* WhatsApp Dynamic Pre-filled CTA */}
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[44px] px-2.5 sm:px-3 py-2 rounded-xl bg-white hover:bg-[#16A34A] text-[#16A34A] hover:text-white border border-[#E8E2D2] hover:border-[#16A34A] text-xs font-bold flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all shadow-2xs"
                      aria-label={`Inquire about ${product.nameEn} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">
                        {isAssamese ? (
                          'হোৱাটছএপত সুধক'
                        ) : (
                          <>
                            <span className="hidden sm:inline">Inquire on </span>WhatsApp
                          </>
                        )}
                      </span>
                      <ArrowRight className="w-3 h-3 shrink-0 ml-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
