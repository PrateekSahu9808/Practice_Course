import React from 'react'
import { useParams,Link } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams()
    
  return (
    <div>ProductDetails {params.productId}
    <p>
        <Link to="..">Back</Link></p>
    </div>
  )
}

export default ProductDetails