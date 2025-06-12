import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Header from "./components/header.jsx"
import Home from './components/Home.jsx';
import PlansPage from './components/All Plans Page.jsx';
import PlanDetails from './components/Plan Details.jsx';
import Footer from './pages/Footer.jsx';

export default function App() {
  return (
    <main className="text-tertiary ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/plans/:slug" element={<PlanDetails />} />
          <Route path="*" element={<p className="text-center mt-10">Page not found 😏</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      

    </main>
  )
}