import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import { CategoryTiles, CollectionStrip, ProductGrid, SectionHeading } from '../components/Sections'
import { products } from '../data/products'
export default function Home() {
  return <>
    <SEO title="Modern Femininity" description="Explore contemporary jewellery and considered womenswear with Lumière." path="/"/>
    <section className="hero content-width">
      <img className="hero-image" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=90" alt="Fashion editorial in warm natural light"/>
      <div className="hero-overlay"></div><div className="hero-copy"><p className="eyebrow">THE ART OF EVERYDAY ELEGANCE</p><h1>Modern femininity<br/><em>in every detail.</em></h1><p>Timeless jewellery. Refined fashion.<br/>For every chapter of you.</p><div className="hero-actions"><Link className="button button-dark" to="/new-in">SHOP NEW ARRIVALS <ArrowRight size={15}/></Link><Link className="hero-secondary" to="/collections">DISCOVER THE EDIT <ArrowUpRight size={15}/></Link></div></div>
      <span className="hero-index">01 — 03</span>
    </section>
    <CategoryTiles/>
    <section className="section content-width"><SectionHeading eyebrow="JUST ARRIVED" title="New arrivals" text="Fresh perspectives on the pieces you'll reach for again and again." link="/new-in"/><ProductGrid items={products.filter(p => p.isNew).slice(0, 4)}/></section>
    <section className="style-feature content-width"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85" alt="Neutral fashion editorial" loading="lazy"/><div className="style-copy"><p className="eyebrow">A STUDY IN BALANCE</p><h2>Style them<br/><em>together.</em></h2><p>Thoughtfully paired jewellery and clothing. A considered wardrobe, from the first layer to the final detail.</p><Link className="button button-outline" to="/collections">SHOP THE LOOK <ArrowRight size={15}/></Link></div></section>
    <section className="section content-width"><SectionHeading eyebrow="CURATED FOR YOU" title="The collections" text="Distinctive edits for the many ways you move through the world." link="/collections" linkText="EXPLORE ALL EDITS"/><CollectionStrip/></section>
    <section className="brand-note"><Sparkles size={19}/><p className="eyebrow">THE LUMIÈRE POINT OF VIEW</p><h2>Less, but with <em>meaning.</em></h2><p>We bring jewellery and apparel together through thoughtful details, considered shapes and a quietly confident point of view.</p><Link to="/our-story" className="underlined-link">DISCOVER OUR STORY <ArrowRight size={15}/></Link></section>
  </>
}