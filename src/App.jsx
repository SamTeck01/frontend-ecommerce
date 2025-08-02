import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/header.jsx';
import Home from './components/Home.jsx';
import PlansPage from './components/All Plans Page.jsx';
import PlanDetails from './components/Plan Details.jsx';
import Footer from './pages/Footer.jsx';
import { WishlistProvider } from './components/WishlistContext.jsx';
import WishlistPage from './components/WishlistPage.jsx';
import AllProductsPage from './components/All Product Product.jsx';
import ProductCategoryPage from './components/ProductCategoryPage.jsx';
import ProductDetailsPage from './components/productDetail.jsx'; // ✅ new import
import InverterSolutions from './components/InverterSolution.jsx';
import InstallationServices from './components/InstallationServices.jsx';
import IoTEnergySolutions from './components/IotSolution.jsx';
import GalleryPro from './components/Gallery.jsx'; // Import the Gallery component
import { PlansProvider } from './components/PlansContext.jsx'; // Import PlansContext
import { ProductsProvider } from './components/ProductsContext.jsx'; // Import ProductsContext

export default function App() {
  return (
    <main className="text-tertiary">
      <WishlistProvider><PlansProvider><ProductsProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/plans/:slug" element={<PlanDetails />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/products/:categoryId" element={<ProductCategoryPage />} />
            <Route path="/products/:categoryId/:productId" element={<ProductDetailsPage />} /> {/* ✅ new route */}
            <Route path="/inverter-solutions" element={<InverterSolutions />} />
            <Route path="/installation-services" element={<InstallationServices />} />
            <Route path="/iot-energy-solutions" element={<IoTEnergySolutions />} />
            <Route path="/gallery" element={<GalleryPro />} /> {/* Add the Gallery route */}
            <Route path="*" element={<p className="text-center mt-10">Page not found 😏</p>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductsProvider></PlansProvider></WishlistProvider>
    </main>
  );
}
