import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>Thi is query: {id} </div>
  )
}

export default ProductItem