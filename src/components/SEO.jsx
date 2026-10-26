import { Helmet } from 'react-helmet-async'
const SITE = 'https://example.com'
export default function SEO({ title, description, path = '/' }) {
  const canonical = `${SITE}${path}`
  return <Helmet>
    <title>{title} | Lumière</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:site_name" content="Lumière" />
    <meta property="og:title" content={`${title} | Lumière`} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
}