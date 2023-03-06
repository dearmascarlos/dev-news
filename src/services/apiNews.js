import axios from 'axios'

const apiNews = axios.create({
    baseURL: process.env.REACT_APP_API
})

const getNews = async (q) => {
    const response = await apiNews.get(`everything?q=${q}&apiKey=7b5a170b648443d5b68cabdef1151350`)
    return response.data.articles
}

const getCurrentNews = async (q) => {
    const response = await apiNews.get(`top-headlines?category=${q}&apiKey=7b5a170b648443d5b68cabdef1151350`)
    return response.data.articles
}


export { getNews, getCurrentNews }