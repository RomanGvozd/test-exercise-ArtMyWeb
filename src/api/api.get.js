import axios from 'axios'

export const getUsers = (currentPage) => axios.get(`https://gorest.co.in/public/v2/users?page=${currentPage}`)

export const getUser = (id) => axios.get(`https://gorest.co.in/public/v2/users/${id}`)


