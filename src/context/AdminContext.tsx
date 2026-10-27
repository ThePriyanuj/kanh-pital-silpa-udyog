import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PRODUCTS as DEFAULT_PRODUCTS } from '../data/products';

interface AdminContextType {
  isAdmin: boolean;
  products: Product[];
  isAuthModalOpen: boolean;
  isProductModalOpen: boolean;
  isPinModalOpen: boolean;
  editingProduct: Product | null;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  openAddProduct: () => void;
  openEditProduct: (product: Product) => void;
  closeProductModal: () => void;
  openPinModal: () => void;
  closePinModal: () => void;
  login: (pin: string) => boolean;
  logout: () => void;
  changePin: (oldPin: string, newPin: string) => { success: boolean; error?: string };
  saveProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  resetProducts: () => void;
}

const STORAGE_KEY_PRODUCTS = 'kpsup_catalog_products';
const STORAGE_KEY_ADMIN = 'kpsup_admin_logged_in';
const STORAGE_KEY_PIN = 'kpsup_admin_pin';
const DEFAULT_PIN = '1979'; // Establishment year

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Products state (persisted in localStorage)
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PRODUCTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return DEFAULT_PRODUCTS;
  });

  // Admin login status
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return sessionStorage.getItem(STORAGE_KEY_ADMIN) === 'true';
  });

  // Modals state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Sync products to localStorage whenever updated
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(products));
    } catch (err) {
      console.error('Failed to save products to localStorage', err);
    }
  }, [products]);

  // Sync admin session
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY_ADMIN, isAdmin ? 'true' : 'false');
  }, [isAdmin]);

  const getStoredPin = () => {
    return localStorage.getItem(STORAGE_KEY_PIN) || DEFAULT_PIN;
  };

  const login = (inputPin: string): boolean => {
    const currentPin = getStoredPin();
    if (inputPin.trim() === currentPin) {
      setIsAdmin(true);
      setIsAuthModalOpen(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  const changePin = (oldPin: string, newPin: string): { success: boolean; error?: string } => {
    const currentPin = getStoredPin();
    if (oldPin.trim() !== currentPin) {
      return { success: false, error: 'Current PIN is incorrect.' };
    }
    if (newPin.trim().length < 4) {
      return { success: false, error: 'New PIN must be at least 4 digits.' };
    }
    localStorage.setItem(STORAGE_KEY_PIN, newPin.trim());
    setIsPinModalOpen(false);
    return { success: true };
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const openAddProduct = () => {
    setEditingProduct(null);
    setIsProductModalOpen(true);
  };

  const openEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setEditingProduct(null);
  };

  const openPinModal = () => setIsPinModalOpen(true);
  const closePinModal = () => setIsPinModalOpen(false);

  const saveProduct = (product: Product) => {
    setProducts((prev) => {
      const existsIndex = prev.findIndex((p) => p.id === product.id);
      if (existsIndex >= 0) {
        const updated = [...prev];
        updated[existsIndex] = product;
        return updated;
      } else {
        return [product, ...prev];
      }
    });
    closeProductModal();
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const resetProducts = () => {
    setProducts(DEFAULT_PRODUCTS);
    localStorage.removeItem(STORAGE_KEY_PRODUCTS);
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        products,
        isAuthModalOpen,
        isProductModalOpen,
        isPinModalOpen,
        editingProduct,
        openAuthModal,
        closeAuthModal,
        openAddProduct,
        openEditProduct,
        closeProductModal,
        openPinModal,
        closePinModal,
        login,
        logout,
        changePin,
        saveProduct,
        deleteProduct,
        resetProducts,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
