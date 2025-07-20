import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/header.jsx';
import Home from './components/Home.jsx';
import PlansPage from './components/All Plans Page.jsx';
import PlanDetails from './components/Plan Details.jsx';
import Footer from './pages/Footer.jsx';
import { WishlistProvider } from './components/WishlistContext.jsx';
import WishlistPage from './components/WishlistPage.jsx';
import ProductCategoryPage from './components/ProductCategoryPage.jsx';
import ProductDetailsPage from './components/productDetail.jsx'; // ✅ new import

export default function App() {
  return (
    <main className="text-tertiary">
      <WishlistProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/plans/:slug" element={<PlanDetails />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/products/:categoryId" element={<ProductCategoryPage />} />
            <Route path="/products/:categoryId/:productId" element={<ProductDetailsPage />} /> {/* ✅ new route */}
            <Route path="*" element={<p className="text-center mt-10">Page not found 😏</p>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </WishlistProvider>
    </main>
  );
}
