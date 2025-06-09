import {useEffect} from 'react'
import Cookies from 'js-cookie'

import ProductCard from '../ProductCard'
import './index.css'
const AllProductsSection = () => {
  const [productsList, setProductsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      const apiUrl = 'https://apis.ccbp.in/products'
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      if (response.ok === true) {
        const fetchedData = await response.json()
        const formattedData = fetchedData.products.map(product => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        }))
        setProductsList(formattedData)
        setIsLoading(false)
      }
    }
    getProducts()
  }, [])

  const renderPrimeDealsList = () => {
    return (
      <div className="products-list-container">
        <h1 className="primedeals-list-heading">Exclusive Prime Deals</h1>
        <ul className="products-list">
          {primeDealsData.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  return <>{renderPrimeDealsList()}</>
}

export default PrimeDealsSection
