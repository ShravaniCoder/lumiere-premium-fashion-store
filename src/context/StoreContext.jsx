import { createContext, useContext, useEffect, useMemo, useState } from 'react'
const StoreContext = createContext(null)
export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('lumiere-cart') || '[]'))
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('lumiere-wishlist') || '[]'))
  useEffect(() => localStorage.setItem('lumiere-cart', JSON.stringify(cart)), [cart])
  useEffect(() => localStorage.setItem('lumiere-wishlist', JSON.stringify(wishlist)), [wishlist])
  const addToCart = (product, size = '') => setCart(old => {
    const key = `${product.id}-${size}`
    const found = old.find(item => item.key === key)
    return found ? old.map(item => item.key === key ? { ...item, quantity: item.quantity + 1 } : item) : [...old, { ...product, key, size, quantity: 1 }]
  })
  const changeQuantity = (key, quantity) => setCart(old => quantity < 1 ? old.filter(i => i.key !== key) : old.map(i => i.key === key ? { ...i, quantity } : i))
  const removeFromCart = key => setCart(old => old.filter(i => i.key !== key))
  const toggleWishlist = product => setWishlist(old => old.some(p => p.id === product.id) ? old.filter(p => p.id !== product.id) : [...old, product])
  const value = useMemo(() => ({ cart, wishlist, addToCart, changeQuantity, removeFromCart, toggleWishlist, cartCount: cart.reduce((n, i) => n + i.quantity, 0), subtotal: cart.reduce((n, i) => n + i.price * i.quantity, 0) }), [cart, wishlist])
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export const useStore = () => useContext(StoreContext)
