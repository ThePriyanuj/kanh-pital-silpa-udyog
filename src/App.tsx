/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProductCatalog } from './components/ProductCatalog';
import { ServicesBanner } from './components/ServicesBanner';
import { StoreVisitCard } from './components/StoreVisitCard';
import { HeritageStory } from './components/HeritageStory';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Product } from './data/products';
import { AdminProvider } from './context/AdminContext';
import { AdminBar } from './components/AdminBar';
import { AdminLoginModal } from './components/AdminLoginModal';
import { ProductFormModal } from './components/ProductFormModal';
import { ChangePinModal } from './components/ChangePinModal';

export default function App() {
  const [isAssamese, setIsAssamese] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const toggleLanguage = () => {
    setIsAssamese((prev) => !prev);
  };

  return (
    <AdminProvider>
      <div
        lang={isAssamese ? 'as' : 'en'}
        className={`min-h-screen bg-white text-[#0F172A] flex flex-col selection:bg-[#B8860B]/20 selection:text-[#0F172A] ${
          isAssamese ? 'font-assamese' : ''
        }`}
      >
        {/* Sticky Minimal Header */}
        <Header isAssamese={isAssamese} onToggleLanguage={toggleLanguage} />

        {/* Sticky Admin Notification & Action Ribbon (Only visible when logged in as admin) */}
        <AdminBar isAssamese={isAssamese} />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Editorial Hero Section with 4-second auto-cycling photo carousel */}
          <Hero isAssamese={isAssamese} />

          {/* 3-Pillar Craft & Trust Strip */}
          <TrustStrip isAssamese={isAssamese} />

          {/* Interactive Product Showcase & WhatsApp Inquiry Catalog */}
          <ProductCatalog
            isAssamese={isAssamese}
            onSelectProduct={(product) => setSelectedProduct(product)}
          />

          {/* Core Store Services Banner (Exchange, Bulk Orders, Restoration) */}
          <ServicesBanner isAssamese={isAssamese} />

          {/* Live Store Visit, IST Open Status & Directions with 4-second photo carousel */}
          <StoreVisitCard isAssamese={isAssamese} />

          {/* Heritage & Metallurgical Tradition Narrative */}
          <HeritageStory isAssamese={isAssamese} />
        </main>

        {/* Minimalist Editorial Footer */}
        <Footer isAssamese={isAssamese} />

        {/* Sticky Mobile Bottom Floating Action Bar (Call + WhatsApp) */}
        <MobileBottomBar isAssamese={isAssamese} isHidden={!!selectedProduct} />

        {/* Product Detail & Weight Calculation / Engraving Modal */}
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            isAssamese={isAssamese}
            onClose={() => setSelectedProduct(null)}
          />
        )}

        {/* Admin Login Modal (PIN entry) */}
        <AdminLoginModal isAssamese={isAssamese} />

        {/* Admin Product Create / Edit Modal */}
        <ProductFormModal isAssamese={isAssamese} />

        {/* Admin Change PIN Modal */}
        <ChangePinModal isAssamese={isAssamese} />
      </div>
    </AdminProvider>
  );
}
