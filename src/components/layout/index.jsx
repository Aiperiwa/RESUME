import { Outlet } from 'react-router-dom'
import { Nav } from '../nav'
import classes from './style.module.css'

export const Layout = () => {
  return (
    <div>
      <Nav />

      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  )
}