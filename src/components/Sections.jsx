import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import ProductCard from './ProductCard'
import { products } from '../data/products'
export function SectionHeading({ eyebrow, title, text, link, linkText = 'VIEW ALL' }) {
  return <div className="section-heading"><div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{text && <p className="muted section-intro">{text}</p>}</div>{link && <Link className="underlined-link" to={link}>{linkText}<ArrowRight size={15}/></Link>}</div>
}
export function ProductGrid({ items = products.slice(0, 4) }) {
  return <div className="product-grid">{items.map(p => <ProductCard key={p.id} product={p}/>)}</div>
}
export function CategoryTiles() {
  return <section className="category-tiles content-width">
    <Link to="/jewellery" className="category-tile"><img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1100&q=85" alt="Gold jewellery styled for an editorial" loading="lazy"/><div className="tile-copy"><span className="eyebrow">THE FINISHING TOUCH</span><h3>Jewellery</h3><p>Considered pieces for every moment.</p><span className="tile-cta">SHOP JEWELLERY <ArrowUpRight size={14}/></span></div></Link>
    <Link to="/clothing" className="category-tile"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=85" alt="Contemporary womenswear editorial" loading="lazy"/><div className="tile-copy"><span className="eyebrow">THE EVERYDAY EDIT</span><h3>Clothing</h3><p>Modern silhouettes, made to be lived in.</p><span className="tile-cta">SHOP CLOTHING <ArrowUpRight size={14}/></span></div></Link>
  </section>
}
export function CollectionStrip() {
  const data = [
    { title: 'The Everyday Edit', text: 'Elevated essentials for every day.', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85', path: '/collections/everyday-edit' },
    { title: 'The Statement Edit', text: 'Pieces that speak softly, beautifully.', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85', path: '/collections/statement-edit' },
    { title: 'The Evening Edit', text: 'Refined looks for after hours.', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85', path: '/collections/evening-edit' }
  ]
  return <div className="collection-strip">{data.map(item => <Link className="collection-tile" to={item.path} key={item.title}><img src={item.image} alt="" loading="lazy"/><div><h3>{item.title}</h3><p>{item.text}</p><span>EXPLORE EDIT <ArrowUpRight size={14}/></span></div></Link>)}</div>
}