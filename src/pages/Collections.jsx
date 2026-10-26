import { Link } from 'react-router-dom'
import { ArrowRight, Gem, Shirt, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import { collectionEdits } from '../data/collections'

const jewelleryEdits = [
  { slug: 'everyday-edit', name: 'The Everyday Edit', label: 'Everyday Jewellery', copy: 'Delicate finishing touches for every day.', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85' },
  { slug: 'statement-edit', name: 'The Statement Edit', label: 'Standout Pieces', copy: 'Sculptural earrings and pieces with presence.', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85' },
  { slug: 'evening-edit', name: 'The Evening Edit', label: 'After-dark Shine', copy: 'Polished accents for evenings and occasions.', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85' },
  { slug: 'new-in', name: 'New In Jewellery', label: 'Just Arrived', copy: 'Discover the latest additions to the jewellery edit.', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=85' },
]

const clothingEdits = [
  { slug: 'everyday-edit', name: 'The Everyday Edit', label: 'Wardrobe Essentials', copy: 'Versatile pieces to make getting dressed easy.', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85' },
  { slug: 'effortless-edit', name: 'The Effortless Edit', label: 'Relaxed & Refined', copy: 'Easy silhouettes for a considered wardrobe.', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85' },
  { slug: 'evening-edit', name: 'The Evening Edit', label: 'Occasion Dressing', copy: 'Elegant clothing for plans after hours.', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85' },
  { slug: 'new-in', name: 'New In Clothing', label: 'Fresh Arrivals', copy: 'Meet the newest styles in the clothing collection.', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85' },
]

function EditCard({ edit, category, index }) {
  const href = `/collections/${edit.slug}?category=${category}`
  return <article className="collection-category-card">
    <Link to={href} className="collection-category-image" aria-label={`Explore ${edit.name}`}>
      <img src={edit.image} alt={`${edit.name} — ${category === 'jewellery' ? 'jewellery collection' : 'women’s clothing collection'}`} loading="lazy" />
      <span className="collection-card-number">0{index + 1}</span>
      <span className="collection-card-arrow"><ArrowRight size={18}/></span>
    </Link>
    <div className="collection-category-card-copy">
      <p className="eyebrow">{edit.label}</p>
      <h3>{edit.name}</h3>
      <p>{edit.copy}</p>
      <Link className="underlined-link" to={href}>EXPLORE & SHOP <ArrowRight size={14}/></Link>
    </div>
  </article>
}

function CategoryEditSection({ id, title, eyebrow, description, icon: Icon, category, edits }) {
  return <section className="collection-category-section content-width" id={id}>
    <div className="collection-category-heading">
      <div className="collection-category-heading-icon"><Icon size={23} strokeWidth={1.4}/></div>
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{description}</p></div>
    </div>
    <div className="collection-category-grid">{edits.map((edit, index) => <EditCard key={`${category}-${edit.slug}`} edit={edit} category={category} index={index}/>)}</div>
  </section>
}

export default function Collections() {
  return <>
    <SEO title="Curated Collections" description="Explore Lumière's curated jewellery and clothing edits: Everyday, Statement, Effortless, Evening and New In." path="/collections"/>
    <section className="collections-intro">
      <p className="eyebrow">A WARDROBE, IN CHAPTERS</p>
      <h1>Find your <em>own edit.</em></h1>
      <p>Shop by the way you want to feel. Explore jewellery and clothing collections separately, with curated pieces and direct shopping on every edit.</p>
      <div className="collection-jump-links"><a href="#jewellery-edits"><Gem size={16}/> Jewellery Edits</a><a href="#clothing-edits"><Shirt size={16}/> Clothing Edits</a></div>
    </section>
    <CategoryEditSection id="jewellery-edits" title="Jewellery edits" eyebrow="THE FINISHING TOUCH" description="From everyday details to statement-making pieces, discover jewellery by mood and moment." icon={Gem} category="jewellery" edits={jewelleryEdits}/>
    <div className="collection-section-divider content-width"><span/><Sparkles size={17}/><span/></div>
    <CategoryEditSection id="clothing-edits" title="Clothing edits" eyebrow="YOUR WARDROBE, CONSIDERED" description="Explore versatile essentials, effortless silhouettes and refined looks for after hours." icon={Shirt} category="clothing" edits={clothingEdits}/>
    <section className="collections-help content-width"><p className="eyebrow">NOT SURE WHERE TO START?</p><h2>Explore everything, your way.</h2><p>Browse the full catalogue when you want to see every piece together.</p><Link className="button button-dark" to="/shop">SHOP ALL <ArrowRight size={15}/></Link></section>
  </>
}
