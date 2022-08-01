import React from 'react'
import { Link } from "react-router-dom"

import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import './UserListItem.css'

function UserListItem({user, setUserID}) {

    return (
        <Link
            to={`/edit/${user.id}`} 
            style={{ textDecoration: 'none', color: "#000"}}
            onClick={()=>setUserID(user.id)}
        >
            <ListItem
                sx={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "flex-start", 
                    marginBottom: 2
                }} 
                button divider
            >
                <ListItemText>Name: {user.name}</ListItemText>
                <ListItemText>Email: {user.email}</ListItemText>
                <ListItemText>Gender: {user.gender}</ListItemText>
                <ListItemText>Status: {user.status}</ListItemText>
            </ListItem>
        </Link>
    )
}

export default UserListItem