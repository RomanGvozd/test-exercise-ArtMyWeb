import React, { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

import UserList from './components/UserList/UserList'
import Edit from './components/Edit/Edit'

import Alert from '@mui/material/Alert'

import './App.css'

function App() {

  const [userID, setUserID] = useState(null)
  const [show, setShow] = useState(false)
  const [typeAlert, setTypeAlert] = useState(null)

  return (
    <main className="app">
      <Routes>
        <Route path="/users" element={<UserList setUserID={setUserID}/>} />
        <Route path={`/edit/${userID}`} element={<Edit userID={userID} setShow={setShow} setTypeAlert={setTypeAlert}/>} />
        <Route
          path="*"
          element={<Navigate to="/users" replace />}
        />
      </Routes>
      {show && 
      <Alert 
        sx={{position: "fixed", left: "20px", bottom: "40px",}} severity={typeAlert} 
        variant="filled"
      >
        {typeAlert === 'success' ? 'Changes saved successfully!' : 'An error has occurred!'}
      </Alert>}
    </main>
  )
}

export default App
