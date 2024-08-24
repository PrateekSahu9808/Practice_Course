import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const Root = () => {
    //Layout of application
  return (
    <>
   <MainNavigation/>
   <Outlet/>
    </>
  )
}

export default Root