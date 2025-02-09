import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Header from "./components/header.jsx"
import Home from './components/Home.jsx';
import Cart from './components/Cart.jsx';
import Category from './components/Category.jsx'
import Footer from './pages/Footer.jsx';
import Login from './pages/Login.jsx';
import Product from './components/Product.jsx';
import bannermens from './assets/bannermens.png';
import bannerwomens from './assets/bannerwomens.png';
import bannerkids from './assets/bannerkids.png';

export default function App() {
  return (
    <main className="bg-primary text-tertiary ">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/mens' element={<Category category={'men'} banner={bannermens} /> } />
          <Route path='/womens' element={<Category category={'women'} banner={bannerwomens} /> } />
          <Route path='/kids' element={<Category category={'kid'} banner={bannerkids} /> } />
          <Route path='/product' >
            <Route path='/product/:productId' element={<Product/> } />
          </Route>
          <Route path='/cart-page' element={<Cart/> } />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<p>Page not found😏</p>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      

    </main>
  )
}