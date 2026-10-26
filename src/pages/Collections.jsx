import { Link } from 'react-router-dom'
import { ArrowRight, Gem, Shirt } from 'lucide-react'
import SEO from '../components/SEO'
import { jewelleryCollections, clothingCollections } from '../data/collections'

function CollectionGroup({ title, intro, items, icon: Icon, numberPrefix }) {
  return <section className="collection-group content-width">
    <div className="collection-group-heading">
      <div className="collection-group-title"><span className="collection-group-icon"><Icon size={21} strokeWidth={1.4}/></span><div><p className="eyebrow">{numberPrefix} · CURATED COLLECTIONS</p><h2>{title}</h2></div></div>
      <p>{intro}</p>
    </div>
    <div className="collection-index collection-group-grid">{items.map((edit, i) => <article className="collection-index-card collection-index-tile" key={edit.id}>
      <Link to={`/collections/${edit.slug}`} className="collection-index-image"><img src={edit.image} alt={edit.name} loading="lazy"/><span className="image-index">{String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span><span className="collection-image-cta">EXPLORE EDIT <ArrowRight size={14}/></span></Link>
      <div className="collection-index-copy"><p className="eyebrow">{edit.category.toUpperCase()} · THE LUMIÈRE EDIT</p><h3>{edit.name}</h3><h4>{edit.sub}</h4><p>{edit.copy}</p><Link className="underlined-link" to={`/collections/${edit.slug}`}>DISCOVER THE COLLECTION <ArrowRight size={15}/></Link></div>
    </article>)}</div>
  </section>
}

export default function Collections() {
  return <><SEO title="Jewellery & Clothing Collections" description="Explore Lumière's separate jewellery and clothing edits: Everyday, Statement, Evening, Minimal, Essential and Workwear collections." path="/collections"/><section className="collections-intro"><p className="eyebrow">A WARDROBE, IN CHAPTERS</p><h1>Curated <em>collections.</em></h1><p>Two distinct worlds, thoughtfully brought together. Explore jewellery edits and clothing edits separately, each with its own curated products and direct shopping experience.</p><div className="collection-jump-links"><a href="#jewellery-collections">JEWELLERY EDITS <ArrowRight size={14}/></a><a href="#clothing-collections">CLOTHING EDITS <ArrowRight size={14}/></a></div></section>
    <div id="jewellery-collections"><CollectionGroup title="Jewellery Collections" intro="Finishing touches for every mood, from barely-there essentials to expressive statement pieces." items={jewelleryCollections} icon={Gem} numberPrefix="01"/></div>
    <div id="clothing-collections"><CollectionGroup title="Clothing Collections" intro="A considered wardrobe for work, everyday living and evenings out." items={clothingCollections} icon={Shirt} numberPrefix="02"/></div>
  </>
}
