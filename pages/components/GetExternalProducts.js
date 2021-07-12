import { useState, useEffect } from 'react'
import axios from 'axios'

const ProductsAPI = () => {
    const [products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)  
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [productType, setProductType] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(`http://localhost:8000/api/products?limit=${page*9}&${category}&${brand}&${sort}&${productType}&title[regex]=${search}`)
            setProducts(res.data.products)
            console.info(res)
        }
        getProducts()
    },[callback, category, brand, productType, sort, search, page])

    // useEffect(() => {
    //     const getVendorProducts = async () => {
    //         const res = await axios.get(`api/vendorproducts?user=${id}`)
    //         setVendorProducts(res.data)
    //     }
    //     getVendorProducts()
    // }, [callback, id])

    return (
        <div>
            <h2>Products</h2>
        </div>
    )
}
 
export default ProductsAPI;