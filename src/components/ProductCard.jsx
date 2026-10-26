import { Heart, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { formatPrice } from '../data/products'
export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist, addToCart } = useStore()
  const saved = wishlist.some(p => p.id === product.id)
  return <article className="product-card">
    <div className="product-image-wrap">
      <Link to={`/product/${product.id}`} className="product-image-link"><img src={product.image} alt={product.name} loading="lazy"/>{product.badge && <span className="product-badge">{product.badge}</span>}</Link>
      <button className={`wishlist-button ${saved ? 'saved' : ''}`} aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'} onClick={() => toggleWishlist(product)}><Heart size={17} fill={saved ? 'currentColor' : 'none'}/></button>
      <button className="quick-add" onClick={() => addToCart(product)}><span>QUICK ADD</span><ArrowUpRight size={15}/></button>
    </div>
    <div className="product-meta"><Link to={`/product/${product.id}`} className="product-name">{product.name}</Link><span className="product-price">{formatPrice(product.price)}</span></div>
    <span className="product-type">{product.category} · {product.type}</span>
  </article>
}