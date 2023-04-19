import { NavLink } from "react-router-dom"
import './style.css'

const links = [
  {
    id: 1,
    text: 'About',
    route: '/about'
  },
  {
    id: 2,
    text: 'Resume',
    route: '/'
  },
  {
    id: 3,
    text: 'Portfolio',
    route: '/portfolio'
  },
  {
    id: 4,
    text: 'Contacts',
    route: '/contacts'
  },
]

export const Nav = () => {
  return (
    <ul className="nav">
      {
        links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.route}>
              <button>{link.text}</button>
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}