import Navbar from '@/components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from '@/pages/Shop';
import Product from '@/pages/Product';
import Cart from '@/pages/Cart';
import ShopCategory from '@/pages/ShopCategory';
import LoginSignup from '@/pages/LoginSignup';
import Footer from '@/components/Footer/Footer';
import menBanner from '@/assets/images/banner_mens.png';
import womenBanner from '@/assets/images/banner_women.png';
import kidsBanner from '@/assets/images/banner_kids.png';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/mens' element={<ShopCategory banner={menBanner} category="/mens"/>}/>
        <Route path='/womens' element={<ShopCategory banner={womenBanner} category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kidsBanner} category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;