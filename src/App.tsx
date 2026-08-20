import React, { useEffect } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CraftsmanshipPage } from './pages/CraftsmanshipPage';
import { LookbookPage } from './pages/LookbookPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { RoomVisualizerPage } from './pages/RoomVisualizerPage';

const AppContent: React.FC = () => {
  const { currentPage } = useShop();

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'collection':
        return <CollectionPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'craftsmanship':
        return <CraftsmanshipPage />;
      case 'lookbook':
        return <LookbookPage />;
      case 'about':
        return <AboutPage />;
      case 'journal':
        return <JournalPage />;
      case 'contact':
        return <ContactPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'visualizer':
        return <RoomVisualizerPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#191816] flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#191816]">
      {/* Global Navigation Header */}
      <Header />

      {/* Dynamic Page Stage */}
      <main className="flex-1 w-full">{renderPage()}</main>

      {/* Global Luxury Footer */}
      <Footer />

      {/* Global Drawers, Modals & Notifications */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchOverlay />
      <ProductQuickViewModal />
      <Toast />
    </div>
  );
};

export function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

export default App;
