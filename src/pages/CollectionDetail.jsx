import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import { collectionEdits } from '../data/collections'
import { products } from '../data/products'
import { useStore } from '../context/StoreContext'
import { formatPrice } from '../data/products'
function matchesEdit(edit, product) {
  if (edit.id === 'new-in') return Boolean(product.isNew)
  if (edit.id === 'statement') return product.style === 'Statement' || product.category === 'Jewellery'
  if (edit.id === 'evening') return product.style === 'Evening' || product.type === 'Dresses' || product.category === 'Jewellery'
  if (edit.id === 'effortless') return product.category === 'Clothing'
  return product.style === 'Everyday' || product.isNew || product.category === 'Clothing'
}
function BuyNowCard({ product }) {
  const { addToCart } = useStore()
  const navigate = useNavigate()
  return <article className="collection-buy-card"><Link to={`/product/${product.id}`} className="collection-buy-image"><img src={product.image} alt={product.name} loading="lazy"/>{product.badge && <span className="product-badge">{product.badge}</span>}</Link><div className="collection-buy-info"><Link to={`/product/${product.id}`} className="product-name">{product.name}</Link><span className="product-price">{formatPrice(product.price)}</span><span className="product-type">{product.category} · {product.type}</span><div className="collection-buy-actions"><button className="button button-outline" onClick={() => addToCart(product)}>ADD TO BAG</button><button className="button button-dark" onClick={() => { addToCart(product); navigate('/cart') }}>BUY NOW</button></div></div></article>
}
export default function CollectionDetail() {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const edit = collectionEdits.find(item => item.slug === slug)
  if (!edit) return <section className="not-found"><p className="eyebrow">COLLECTION NOT FOUND</p><h1>This edit isn't available.</h1><Link className="button button-dark" to="/collections">VIEW ALL COLLECTIONS</Link></section>
  const curated = products.filter(p => matchesEdit(edit, p) && (!category || p.category.toLowerCase() === category.toLowerCase()))
  const shown = curated.length ? curated : products.slice(0, 4)
  return <><SEO title={edit.name} description={edit.copy} path={`/collections/${edit.slug}`}/><section className="collection-detail-hero"><img src={edit.image} alt={edit.name}/><div className="collection-detail-overlay"/><div className="collection-detail-heading"><p className="eyebrow">{category ? `${category.toUpperCase()} EDIT` : 'THE LUMIÈRE COLLECTIONS'}</p><h1>{category === 'jewellery' && edit.id === 'new-in' ? 'New In Jewellery' : category === 'clothing' && edit.id === 'new-in' ? 'New In Clothing' : edit.name}</h1><p>{edit.sub}</p><span>{edit.copy}</span></div></section><div className="content-width collection-detail-body"><Link to="/collections" className="collection-back"><ArrowLeft size={15}/> ALL COLLECTIONS</Link><div className="collection-detail-intro"><div><p className="eyebrow">CURATED FOR YOUR EVERYDAY</p><h2>Discover the edit.</h2></div><p>{`Shop the ${category || 'curated'} edit directly. Add a favourite to your bag or choose Buy Now to continue to your bag.`}</p></div><div className="collection-buy-grid">{shown.map(product => <BuyNowCard key={product.id} product={product}/>)}</div><section className="collection-more"><p className="eyebrow">CONTINUE EXPLORING</p><h2>Find your next favourite.</h2><Link className="button button-outline" to={category ? `/collections?category=${category}` : '/collections'}>EXPLORE OTHER COLLECTIONS <ArrowRight size={15}/></Link></section></div></>
}
