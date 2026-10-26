import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, PackageSearch } from 'lucide-react'
import SEO from '../components/SEO'
const content = {
  '/track-order': ['Track My Order', 'Order tracking', 'Enter your order number and email address to look up an order once a live order service is connected.'],
  '/faq': ['Frequently Asked Questions', 'How can we help?', 'Helpful answers about orders, products and shopping with Lumière.'],
  '/shipping': ['Shipping & Delivery', 'Delivery information', 'Delivery estimates, service areas and shipping charges should be confirmed and published before launch.'],
  '/returns': ['Returns & Exchanges', 'A considered returns experience', 'Set your final return window, eligibility, condition requirements and exchange process before accepting orders.'],
  '/privacy': ['Privacy Policy', 'Your privacy matters', 'Explain what personal data is collected, why it is used, how long it is retained, and how customers can exercise their rights.'],
  '/terms': ['Terms & Conditions', 'Terms of use', 'Publish terms covering orders, pricing, payment, availability, cancellations, liability and applicable law after legal review.']
}
export default function Support() {
  const location = useLocation()
  const [order, setOrder] = useState('')
  const [email, setEmail] = useState('')
  const [searched, setSearched] = useState(false)
  const [open, setOpen] = useState(0)
  const [faqs] = useState([
    ['How can I track my order?', 'Use the Track My Order form after your order system is connected. A live tracking result is not available in this demo.'],
    ['Can I change or cancel an order?', 'Please contact customer care as soon as possible. Final cancellation rules must be defined in your published policy.'],
    ['How do I care for jewellery?', 'Keep pieces dry, avoid perfume and chemicals, and store them separately in a clean, dry place. Follow the care notes shown on each product.'],
    ['How do I choose a clothing size?', 'Use the product size options and a verified measurement chart. Final garment measurements should be added before launch.']
  ])
  const [title, heading, intro] = content[location.pathname] || content['/faq']
  return <><SEO title={title} description={intro} path={location.pathname}/><div className="page-heading content-width"><p className="eyebrow">LUMIÈRE CUSTOMER CARE</p><h1>{heading}</h1><p>{intro}</p></div><section className="support-page content-width">{location.pathname === '/track-order' ? <form className="tracking-form" onSubmit={e => { e.preventDefault(); setSearched(true) }}><PackageSearch size={30}/><h2>Find your order</h2><label>Order number<input required value={order} onChange={e => setOrder(e.target.value)} placeholder="e.g. LM-123456"/></label><label>Email used at checkout<input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com"/></label><button className="button button-dark">LOOK UP ORDER</button>{searched && <p className="notice">No live order lookup is connected yet. This demo has not searched a real order database.</p>}</form> : location.pathname === '/faq' ? <div className="faq-list">{faqs.map(([q, a], i) => <details key={q} open={open === i} onToggle={e => e.currentTarget.open && setOpen(i)}><summary>{q}<span>{open === i ? '−' : '+'}</span></summary><p>{a}</p></details>)}</div> : <div className="policy-content"><h2>{title}</h2><p>{intro}</p><p>This page is a launch-ready content placeholder, not final legal or operational advice. Replace it with the business's verified policy, customer support process and applicable terms before accepting live orders.</p><p>For questions, please <Link to="/contact">contact customer care</Link>.</p></div>}<div className="support-next"><Link to="/contact">Still need help? Contact us <ArrowRight size={15}/></Link><Link to="/shop">Continue shopping <ArrowRight size={15}/></Link></div></section></>
}