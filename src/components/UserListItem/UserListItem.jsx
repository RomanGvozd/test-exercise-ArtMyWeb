import React from 'react'

import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import './UserListItem.css'

function UserListItem({user}) {

    return (
        <ListItem
            key={user.id}
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
    )
}

export default UserListItem