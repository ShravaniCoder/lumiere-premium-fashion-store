import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Search, UserRound, Heart, ShoppingBag, Menu, X, Instagram, Facebook, ArrowUpRight } from 'lucide-react'
import { useStore } from '../context/StoreContext'
const nav = [
  ['Home', '/'], ['New In', '/new-in'], ['Shop All', '/shop'], ['Jewellery', '/jewellery'], ['Clothing', '/clothing'], ['Collections', '/collections'], ['Our Story', '/our-story'], ['Contact Us', '/contact']
]
export default function Layout() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }) }, [location.pathname, location.search])
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { cartCount, wishlist } = useStore()
  return <>
    <div className="announcement">COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹2,999 <span className="announcement-extra"> · THOUGHTFULLY CURATED, ALWAYS</span></div>
    <header className="site-header">
      <div className="header-top">
        <button className="icon-button mobile-menu-trigger" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={19}/></button>
        <Link to="/" className="wordmark" aria-label="Lumière home">LUMIÈRE<span>MODERN FEMININITY</span></Link>
        <div className="header-actions">
          <button className="icon-button desktop-search" aria-label="Search" onClick={() => setSearchOpen(v => !v)}><Search size={17}/></button>
          <Link className="icon-button" aria-label="My account" to="/account"><UserRound size={17}/></Link>
          <Link className="icon-button" aria-label="Wishlist" to="/account#wishlist"><Heart size={17}/><span className="count">{wishlist.length}</span></Link>
          <Link className="icon-button" aria-label="Shopping bag" to="/cart"><ShoppingBag size={17}/><span className="count">{cartCount}</span></Link>
        </div>
      </div>
      <nav className="main-nav" aria-label="Main navigation">
        {nav.map(([label, to]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>)}
      </nav>
      {searchOpen && <form className="search-bar" onSubmit={e => { e.preventDefault(); window.location.href = `/shop?search=${encodeURIComponent(query)}` }}>
        <Search size={16}/><input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Search jewellery, clothing and more..." aria-label="Search products"/><button className="text-link">Search</button><button type="button" className="icon-button" onClick={() => setSearchOpen(false)} aria-label="Close search"><X size={16}/></button>
      </form>}
    </header>
    {menuOpen && <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}>
      <aside className="mobile-menu" onClick={e => e.stopPropagation()}>
        <div className="mobile-menu-head"><span className="wordmark small">LUMIÈRE</span><button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X/></button></div>
        <p className="eyebrow">EXPLORE THE COLLECTION</p>
        {nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setMenuOpen(false)} className="mobile-nav-link">{label}<ArrowUpRight size={15}/></Link>)}
        <div className="mobile-menu-bottom"><Link to="/account" onClick={() => setMenuOpen(false)}>My Account</Link><Link to="/cart" onClick={() => setMenuOpen(false)}>Shopping Bag ({cartCount})</Link></div>
      </aside>
    </div>}
    <main><Outlet/></main>
    <footer className="site-footer">
      <div className="footer-brand"><Link to="/" className="wordmark footer-wordmark">LUMIÈRE<span>MODERN FEMININITY</span></Link><p>Timeless jewellery. Refined fashion.<br/>For every chapter of you.</p><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17}/></a><a href="https://facebook.com" aria-label="Facebook"><Facebook size={17}/></a></div></div>
      <div className="footer-col"><h4>Shop</h4><Link to="/new-in">New In</Link><Link to="/shop">Shop All</Link><Link to="/jewellery">Jewellery</Link><Link to="/clothing">Clothing</Link><Link to="/collections">Collections</Link></div>
      <div className="footer-col"><h4>Customer Care</h4><Link to="/contact">Contact Us</Link><Link to="/track-order">Track My Order</Link><Link to="/faq">FAQs</Link><Link to="/shipping">Shipping & Delivery</Link><Link to="/returns">Returns & Exchanges</Link></div>
      <div className="footer-col"><h4>About & Legal</h4><Link to="/our-story">Our Story</Link><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link></div>
      <Newsletter/>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Lumière. All rights reserved.</span><span>India · INR ₹</span></div>
    </footer>
  </>
}
function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  return <form className="newsletter" onSubmit={e => { e.preventDefault(); setSent(true) }}><h4>Join Our Newsletter</h4><p>Be first to know about new arrivals, exclusive edits and more.</p><div className="newsletter-input"><input type="email" required placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} aria-label="Email address"/><button aria-label="Subscribe"><ArrowUpRight size={17}/></button></div>{sent && <small className="success">Thank you — you're on the list.</small>}</form>
}