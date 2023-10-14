import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
export const apiStore = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export const getDataPosts = async (pageParam = 1, options = {}) => {
    const response = await api.get(`/posts?_page=${pageParam}`, options)
    return response.data
}

export const getProducts = async (limit = 15 , options = {}) => {
    const response  = await apiStore.get(`/products?limit=${limit}` , options)
    return response.data
}

export const getProductsbyId = async (id  , options ={}) => {
    const response = await apiStore.get('/products/'+id , options)
    return response.data ; 
}