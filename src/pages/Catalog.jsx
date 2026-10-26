import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
const clothingTypes = ['Tops', 'Shirts', 'Dresses', 'Skirts', 'Trousers']
const jewelleryTypes = ['Earrings', 'Rings', 'Necklaces', 'Bracelets']
export default function Catalog({ mode = 'all' }) {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const [type, setType] = useState('')
  const [sort, setSort] = useState('featured')
  const [maxPrice, setMaxPrice] = useState(10000)
  const [color, setColor] = useState('')
  const [material, setMaterial] = useState('')
  const [style, setStyle] = useState('')
  const [fabric, setFabric] = useState('')
  const [fit, setFit] = useState('')
  const [visibleCount, setVisibleCount] = useState(8)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [search] = useState(params.get('search') || '')
  const category = mode === 'jewellery' ? 'Jewellery' : mode === 'clothing' ? 'Clothing' : ''
  const source = useMemo(() => products.filter(p => {
    if (mode === 'new' && !p.isNew) return false
    if (category && p.category !== category) return false
    if (type && p.type !== type) return false
    if (p.price > maxPrice) return false
    if (color && p.color !== color) return false
    if (material && !(p.material || '').toLowerCase().includes(material.toLowerCase())) return false
    if (style && p.style !== style) return false
    if (fabric && !(p.fabric || '').toLowerCase().includes(fabric.toLowerCase())) return false
    if (fit && p.fit !== fit) return false
    if (search && !`${p.name} ${p.type} ${p.category}`.toLowerCase().includes(search.toLowerCase())) return false
    return true
  }).sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : sort === 'new' ? Number(b.isNew) - Number(a.isNew) : 0), [mode, category, type, maxPrice, color, material, style, fabric, fit, sort, search])
  const title = mode === 'new' ? 'New In' : category || 'Shop All'
  const types = category === 'Jewellery' ? jewelleryTypes : category === 'Clothing' ? clothingTypes : [...jewelleryTypes, ...clothingTypes]
  const desc = mode === 'new' ? 'The latest arrivals, selected for the season ahead.' : category === 'Jewellery' ? 'Finishing touches with a quietly confident point of view.' : category === 'Clothing' ? 'Modern silhouettes and considered essentials for every day.' : 'Discover the complete Lumière edit of jewellery and contemporary womenswear.'
  return <><SEO title={title} description={desc} path={location.pathname}/>{mode !== 'all' && <div className={`catalog-banner ${category === 'Clothing' ? 'clothing-banner' : ''}`}><img src={category === 'Jewellery' ? 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1800&q=85' : category === 'Clothing' ? 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85' : 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85'} alt="Editorial collection banner"/><div><p className="eyebrow">{mode === 'new' ? 'FRESHLY DISCOVERED' : 'THE LUMIÈRE EDIT'}</p><h1>{title}</h1><p>{desc}</p></div></div>}
    <div className="catalog-layout content-width"><aside className={`filters ${filtersOpen ? 'filters-open' : ''}`}><div className="filter-head"><h3>Refine your edit</h3><button className="icon-button mobile-only" onClick={() => setFiltersOpen(false)} aria-label="Close filters"><X size={18}/></button></div><div className="filter-group"><h4>Category</h4>{types.map(t => <label className="check-row" key={t}><input type="checkbox" checked={type === t} onChange={() => setType(type === t ? '' : t)}/><span>{t}</span></label>)}</div><div className="filter-group"><h4>Price range</h4><div className="range-label"><span>₹0</span><span>₹{maxPrice.toLocaleString('en-IN')}</span></div><input type="range" min="1000" max="10000" step="500" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}/></div>{category !== 'Clothing' && <div className="filter-group"><h4>Material / Finish</h4><select className="filter-select" value={material} onChange={e => setMaterial(e.target.value)}><option value="">All materials</option><option value="Gold-tone">Gold-tone finish</option><option value="Pearl">Pearl-inspired</option></select></div>}
    <div className="filter-group"><h4>Style</h4><select className="filter-select" value={style} onChange={e => setStyle(e.target.value)}><option value="">All styles</option><option>Everyday</option><option>Minimal</option><option>Statement</option><option>Evening</option></select></div>
    {category === 'Clothing' && <><div className="filter-group"><h4>Fabric</h4><select className="filter-select" value={fabric} onChange={e => setFabric(e.target.value)}><option value="">All fabrics</option><option value="Composition">Composition to be confirmed</option></select></div><div className="filter-group"><h4>Fit</h4><select className="filter-select" value={fit} onChange={e => setFit(e.target.value)}><option value="">All fits</option><option>Relaxed</option><option>Regular</option><option>Tailored</option></select></div></>}
    <div className="filter-group"><h4>Colour</h4><div className="swatches">{['Gold', 'Ivory', 'Black', 'Sand', 'Espresso'].map(c => <button key={c} title={c} aria-label={c} className={`swatch swatch-${c.toLowerCase()} ${color === c ? 'selected' : ''}`} onClick={() => setColor(color === c ? '' : c)}/>)}</div></div><button className="clear-filters" onClick={() => { setType(''); setMaxPrice(10000); setColor(''); setMaterial(''); setStyle(''); setFabric(''); setFit('') }}>CLEAR ALL FILTERS</button></aside>
    <section className="catalog-results"><div className="catalog-top"><div><p className="eyebrow">CONSIDERED PIECES, ALWAYS</p><h1>{title}</h1><p className="muted">{source.length} pieces</p></div><div className="catalog-controls"><button className="filter-toggle" onClick={() => setFiltersOpen(true)}><SlidersHorizontal size={15}/> FILTERS</button><label className="sort-label">Sort by <select value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Featured</option><option value="new">Newest</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label></div></div>
      {source.length ? <><div className="product-grid">{source.slice(0, visibleCount).map(p => <ProductCard key={p.id} product={p}/>)}</div>{source.length > visibleCount && <div className="load-more-wrap"><button className="button button-outline" onClick={() => setVisibleCount(n => n + 8)}>LOAD MORE PIECES</button></div>}</> : <div className="empty-state"><h2>No pieces found</h2><p>Try adjusting your filters to discover more of the edit.</p><button className="button button-dark" onClick={() => { setType(''); setMaxPrice(10000); setColor('') }}>CLEAR FILTERS</button></div>}
    </section></div>{filtersOpen && <button className="filters-backdrop mobile-only" aria-label="Close filters" onClick={() => setFiltersOpen(false)}/>}</>
}