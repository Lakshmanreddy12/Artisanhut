import React, { useState } from 'react';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { StartupPartners } from './components/StartupPartners';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { DigitalSathiSection } from './components/DigitalSathiSection';
import { DigitalSathiModal } from './components/DigitalSathiModal';
import { CustomStudioModal } from './components/CustomStudioModal';
import { CartDrawer } from './components/CartDrawer';
import { ProjectCreditModal } from './components/ProjectCreditModal';
import { Footer } from './components/Footer';
import { INITIAL_PRODUCTS } from './data/mockData';
import { Product, CartItem, Language } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSathiModalOpen, setIsSathiModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [customInitialProduct, setCustomInitialProduct] = useState<Product | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: number, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveCartItem = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Quick view and custom dimension triggers
  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleRequestCustom = (product: Product) => {
    setCustomInitialProduct(product);
    setIsCustomModalOpen(true);
  };

  const handleAddProductFromSathi = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartValue = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2420]">
      {/* Navigation */}
      <TopNav
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        cartCount={totalCartCount}
        cartTotal={totalCartValue}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSathiModal={() => setIsSathiModalOpen(true)}
        onOpenCustomModal={() => {
          setCustomInitialProduct(null);
          setIsCustomModalOpen(true);
        }}
        onOpenCreditsModal={() => setIsCreditsModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenSathiModal={() => setIsSathiModalOpen(true)}
          onOpenCustomModal={() => {
            setCustomInitialProduct(null);
            setIsCustomModalOpen(true);
          }}
        />

        {/* Startup & Logistics Ecosystem Grid */}
        <StartupPartners />

        {/* Curated Product Catalog */}
        <ProductCatalog
          products={products}
          currentLang={currentLang}
          onAddToCart={handleAddToCart}
          onQuickView={handleQuickView}
          onRequestCustom={handleRequestCustom}
        />

        {/* Village Digital Sathi Feature Section */}
        <DigitalSathiSection
          currentLang={currentLang}
          onOpenSathiModal={() => setIsSathiModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCreditsModal={() => setIsCreditsModalOpen(true)}
        onOpenSathiModal={() => setIsSathiModalOpen(true)}
        onOpenCustomModal={() => {
          setCustomInitialProduct(null);
          setIsCustomModalOpen(true);
        }}
      />

      {/* Floating Cart Button for Instant Mobile/Desktop Accessibility */}
      {totalCartCount > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          aria-label="Open Shopping Bag"
          className="fixed bottom-6 right-6 z-40 bg-[#8E4723] hover:bg-[#743719] text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2.5 transition-all transform hover:scale-105 cursor-pointer font-semibold text-xs border border-white/20"
        >
          <span>🛒</span>
          <span className="font-mono-num tabular-nums">
            {totalCartCount} Item{totalCartCount !== 1 ? 's' : ''} · ₹{totalCartValue.toLocaleString()}
          </span>
        </button>
      )}

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onRequestCustom={handleRequestCustom}
      />

      {/* Digital Sathi Voice Upload Modal */}
      <DigitalSathiModal
        isOpen={isSathiModalOpen}
        onClose={() => setIsSathiModalOpen(false)}
        onAddProduct={handleAddProductFromSathi}
      />

      {/* Custom Dimensions Studio Modal */}
      <CustomStudioModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        initialProduct={customInitialProduct}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Project Credits Modal */}
      <ProjectCreditModal
        isOpen={isCreditsModalOpen}
        onClose={() => setIsCreditsModalOpen(false)}
      />
    </div>
  );
}
