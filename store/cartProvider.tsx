import React from 'react'
import { createContext } from 'react'

const cartProvider = () => {
    const cartStateContext = createContext()
  return (
    <div>cartContext</div>
  )
}

export default cartProvider
