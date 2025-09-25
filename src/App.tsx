
import { BrowserRouter } from 'react-router-dom'
import LayoutHandling from "./Layout/Layout";
import EcommerceHero from './Components/Ecommerce'
// import './App.css'
import { Route, RouterProvider, Routes } from 'react-router'
import ProductCard from './Components/Product';
import Contact from './Components/Contact';
import BlogPage from './Components/Blog';
import Elements from './Components/Element';
import Product1 from './Components/Freeshiping';
import BestSellingProducts from './Components/SellingProduct';
import ShopItem from './Components/Shop';
import Home from './Components/Home';
import KapeePage from './Components/Pages';
import Login from './Components/login';
import DashboardLayout from './dashboard/dashboardlayout';
import Dashboard from './dashboard/dashboard';
import ProductDashboard from './dashboard/ProductDashboard';
import RegisterModal from './Components/RegistrationForm';
import OrdersDashboard from './dashboard/OrderDashboard';
import CustomerDashboard from './dashboard/customerDashboard';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LayoutHandling/>}>
            <Route index element={<EcommerceHero/>}/>
            <Route path="home" element={<Home />} />
            <Route path= "login"element={<Login/>}/>
            <Route path='/registration' element={<RegisterModal/>} />
            <Route path="/Product" element={<ProductCard />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="elements" element={<Elements />} />
            <Route path="freeshipping" element={<Product1 />} />
            <Route path="selling" element={<BestSellingProducts />} />
            <Route path="shop" element={<ShopItem />} />
            <Route path= "Pages"element={<KapeePage/>}/>
            
           </Route>
            <Route path="/dashboard" element={<DashboardLayout children={undefined}/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="products" element={<ProductDashboard />} />
            <Route path="orders" element={<OrdersDashboard />} />
            <Route path="customers" element={<CustomerDashboard />} />
          </Route>
          <Route path='/dashboard' element={<Dashboard/>}/>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
     </>
  )
}

export default App
