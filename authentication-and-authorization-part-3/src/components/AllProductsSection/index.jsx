import {useState} from 'react'

import ProductCard from '../ProductCard'
import './index.css'

const AllProductsSection = () => {
  const [productsList, setProductsList] = useState([])

  const renderProductsList = () => {
    return (
      <div>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  return <>{renderProductsList()}</>
}

export default AllProductsSection
