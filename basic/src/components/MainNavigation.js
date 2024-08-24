import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from  "./mainNavigation.module.css"
const MainNavigation = () => {
  return (
    <header className={classes.header }>
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink className={({isActive})=>isActive ? classes.active :undefined}   to='/' end>Home</NavLink>
                    
                </li>
                <li>
                <Link to='/products'>Products</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation