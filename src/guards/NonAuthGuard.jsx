import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export const NonAuthGuard = () => {
  const { isAuthenticated } = useContext(AuthContext)
  return <>
    {isAuthenticated ? <Navigate to="/" /> : <Outlet />}
  </>
}
