import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, FinishOption, PageView, JournalArticle, LookbookScene } from '../types';
import { PRODUCTS } from '../data/products';
import { JOURNAL_ARTICLES } from '../data/journal';
import { LOOKBOOK_SCENES } from '../data/lookbook';

interface ShopContextType {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  selectedProductSlug: string | null;
  setSelectedProductSlug: (slug: string | null) => void;
  selectedArticleSlug: string | null;
  setSelectedArticleSlug: (slug: string | null) => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (category: string) => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, finish?: FinishOption, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  clearCart: () => void;
  
  // Wishlist
  wishlistIds: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  
  // Quick View
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  
  // Search
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  
  // Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
  
  // Navigation helpers
  navigateToProduct: (product: Product | string) => void;
  navigateToArticle: (article: JournalArticle | string) => void;
  navigateToCategory: (categoryName: string) => void;
  navigateToVisualizerWithProduct: (product: Product) => void;
  visualizerPreselectedProductId: string | null;
  visualizerProduct: Product | null;
  setVisualizerPreselectedProductId: (id: string | null) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null);
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  
  // Cart state with localStorage fallback
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sg_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sg_wishlist');
      return saved ? JSON.parse(saved) : ['sg-01', 'sg-05'];
    } catch {
      return ['sg-01', 'sg-05'];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [visualizerPreselectedProductId, setVisualizerPreselectedProductId] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sg_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('sg_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [wishlistIds]);

  // URL Hash Sync for deep linking and back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash || hash === 'home') {
        setCurrentPage('home');
      } else if (hash.startsWith('product/')) {
        const slug = hash.replace('product/', '');
        setSelectedProductSlug(slug);
        setCurrentPage('product-detail');
      } else if (hash.startsWith('journal/')) {
        const slug = hash.replace('journal/', '');
        setSelectedArticleSlug(slug);
        setCurrentPage('journal');
      } else if (hash.startsWith('collection')) {
        const parts = hash.split('/');
        if (parts[1]) {
          setSelectedCategoryFilter(decodeURIComponent(parts[1]));
        }
        setCurrentPage('collection');
      } else if (
        ['craftsmanship', 'lookbook', 'about', 'journal', 'contact', 'cart', 'checkout', 'visualizer'].includes(hash)
      ) {
        setCurrentPage(hash as PageView);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when page changes
  const handleSetCurrentPage = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'home') {
      window.location.hash = '';
    } else if (page === 'product-detail' && selectedProductSlug) {
      window.location.hash = `product/${selectedProductSlug}`;
    } else if (page === 'collection') {
      window.location.hash = selectedCategoryFilter !== 'All' ? `collection/${encodeURIComponent(selectedCategoryFilter)}` : 'collection';
    } else {
      window.location.hash = page;
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const addToCart = (product: Product, finish?: FinishOption, quantity = 1) => {
    const selectedFinish = finish || product.finishOptions[0];
    const itemId = `${product.id}-${selectedFinish.id}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: itemId, product, selectedFinish, quantity }];
    });

    showToast(`Added ${product.name} (${selectedFinish.name}) to cart`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    showToast('Item removed from cart');
  };

  const updateCartQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(productId);
      const product = PRODUCTS.find((p) => p.id === productId);
      if (exists) {
        showToast(product ? `Removed ${product.name} from wishlist` : 'Removed from wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast(product ? `Saved ${product.name} to wishlist` : 'Saved to wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlistIds.includes(productId);

  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navigateToProduct = (productOrSlug: Product | string) => {
    const slug = typeof productOrSlug === 'string' ? productOrSlug : productOrSlug.slug;
    setSelectedProductSlug(slug);
    setCurrentPage('product-detail');
    window.location.hash = `product/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setQuickViewProduct(null);
  };

  const navigateToArticle = (articleOrSlug: JournalArticle | string) => {
    const slug = typeof articleOrSlug === 'string' ? articleOrSlug : articleOrSlug.slug;
    setSelectedArticleSlug(slug);
    setCurrentPage('journal');
    window.location.hash = `journal/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (categoryName: string) => {
    setSelectedCategoryFilter(categoryName);
    setCurrentPage('collection');
    window.location.hash = `collection/${encodeURIComponent(categoryName)}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToVisualizerWithProduct = (product: Product) => {
    setVisualizerPreselectedProductId(product.id);
    setCurrentPage('visualizer');
    window.location.hash = 'visualizer';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const visualizerProduct = visualizerPreselectedProductId
    ? PRODUCTS.find((p) => p.id === visualizerPreselectedProductId) || null
    : null;

  return (
    <ShopContext.Provider
      value={{
        currentPage,
        setCurrentPage: handleSetCurrentPage,
        selectedProductSlug,
        setSelectedProductSlug,
        selectedArticleSlug,
        setSelectedArticleSlug,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        clearCart,
        wishlistIds,
        toggleWishlist,
        isInWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        quickViewProduct,
        setQuickViewProduct,
        isSearchOpen,
        setIsSearchOpen,
        toastMessage,
        showToast,
        navigateToProduct,
        navigateToArticle,
        navigateToCategory,
        navigateToVisualizerWithProduct,
        visualizerPreselectedProductId,
        visualizerProduct,
        setVisualizerPreselectedProductId
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within a ShopProvider');
  return context;
};
