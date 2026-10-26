import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { StoreProvider } from './context/StoreContext'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Collections from './pages/Collections'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Story from './pages/Story'
import Account from './pages/Account'
import Contact from './pages/Contact'
import Support from './pages/Support'
function NotFound() { return <div className="not-found"><p className="eyebrow">404 — PAGE NOT FOUND</p><h1>This page has wandered.</h1><a className="button button-dark" href="/">RETURN HOME</a></div> }
export default function App() {
  return <StoreProvider><Routes><Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="new-in" element={<Catalog mode="new"/>}/>
    <Route path="shop" element={<Catalog mode="all"/>}/>
    <Route path="jewellery" element={<Catalog mode="jewellery"/>}/>
    <Route path="clothing" element={<Catalog mode="clothing"/>}/>
    <Route path="collections" element={<Collections/>}/>
    <Route path="product/:id" element={<ProductDetails/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="our-story" element={<Story/>}/>
    <Route path="account" element={<Account/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="track-order" element={<Support/>}/>
    <Route path="faq" element={<Support/>}/>
    <Route path="shipping" element={<Support/>}/>
    <Route path="returns" element={<Support/>}/>
    <Route path="privacy" element={<Support/>}/>
    <Route path="terms" element={<Support/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Route></Routes></StoreProvider>
}