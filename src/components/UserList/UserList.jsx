import React, {useState, useEffect} from 'react'

import CustomSelect from '../CustomSelect/CustomSelect'
import UserListItem from '../UserListItem/UserListItem'

import LinearProgress from '@mui/material/LinearProgress'
import List from '@mui/material/List'

import { getUsers } from '../../api/api.get'

import './UserList.css'

function UserList({setUserID}) {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    const [gender, setGender] = useState('All')
    const options = ['All', 'Male', 'Female']
    
    useEffect( () => {
        if(fetching){
            (async () => {
                setLoading(true)  
                await getUsers(currentPage)
                .then(res => {
                    setUsers([...users, ...res.data])
                    setCurrentPage(prevState => prevState + 1)
                })
                .finally(()=>setFetching(false))
                setTimeout(() => {
                    setLoading(false)
                }, 1500);
            })()
        }
    },[fetching])

    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler)
        return function() {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const filteredUsers = users.filter(user=>{
        if(gender === 'All'){
            return user
        } else {
            return user.gender === gender.toLowerCase()
        }
    })

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    return (
        <article className='list'>
            <CustomSelect
                title={'Gender'}
                value={gender} 
                setChange={setGender}
                options={options}
            />
            {loading && <LinearProgress />}
            <List>
                {filteredUsers.map((user)=>(
                    <UserListItem key={user.id} user={user} setUserID={setUserID}/>
                ))}
            </List>
        </article>
    )
}

export default UserList