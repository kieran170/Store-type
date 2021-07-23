import axios from 'axios';

export const getProducts = (items: string) => {
    return axios
    .get(`https://fakestoreapi.com/products/category/${items}`)
    .then(({data}) => {
        return data
    })
}