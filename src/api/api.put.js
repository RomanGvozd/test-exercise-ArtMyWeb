import axios from 'axios'

export const putUser = (id, data) => axios.put(`https://gorest.co.in/public/v2/users/${id}`, data, {
    headers: {
    'Authorization': 'Bearer 17f1166cdf68ed8a7497f7f8b9844015dcbc70e1ef28d0c72cae2c0d79f15af7' 
}})


