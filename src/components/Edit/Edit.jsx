import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

import CustomSelect from '../CustomSelect/CustomSelect'

import { getUser } from '../../api/api.get'
import { putUser } from '../../api/api.put'

import './Edit.css'

function Edit({userID, setShow, setTypeAlert}) {

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    
    useEffect( () => {
        (async () => {
            setLoading(true)
            await getUser(userID)
            .then(res => {
                setNameValue(res.data.name)
                setNameEmail(res.data.email)
                setGender(res.data.gender)
                setStatus(res.data.status)
            })
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        })();
    },[])

    const handleSave = async ()=> {
        setLoading(true)
        await putUser(userID,
        {
            name: nameValue,
            email: nameEmail,
            gender: gender,
            status: status,
        })
        .then(res => {
            setTypeAlert('success')
            setTimeout(() => {
                navigate('/users')
                setShow(true)
            }, 1000);
            setTimeout(() => {
                setShow(false)
            }, 3000);
        })
        .catch(err => {
            setTypeAlert('error')
            setTimeout(() => {
                setShow(true)
            }, 1000);
            setTimeout(() => {
                setShow(false)
            }, 3000);
        })
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }

    const [nameValue, setNameValue] = useState('')
    const [nameEmail, setNameEmail] = useState('')

    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('')

    const optionsGender = ['male', 'female']
    const optionsStatus = ['active', 'inactive']

    return (
        <article className='edit'>
            <section className='card'>
                {loading
                ? <CircularProgress />
                : <>
                    <TextField 
                        id="outlined-basic" 
                        label="name" 
                        sx={{width: "100%"}}
                        variant="outlined"
                        value={nameValue}
                        onChange={(e)=>setNameValue(e.target.value)}
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="email" 
                        sx={{width: "100%"}}
                        variant="outlined"
                        value={nameEmail}
                        onChange={(e)=>setNameEmail(e.target.value)}
                    />
                    <CustomSelect
                        title={'Gender'}
                        value={gender} 
                        setChange={setGender}
                        options={optionsGender}
                    />
                    <CustomSelect
                        title={'Status'}
                        value={status} 
                        setChange={setStatus}
                        options={optionsStatus}
                    />
                    <Button 
                        sx={{width: "100%"}}
                        variant="contained" 
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </>}     
            </section>
        </article>
    )
}

export default Edit