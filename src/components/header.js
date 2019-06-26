import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa'
import headerStyles from '../styles/header.module.css'

const Header = () => {
  const [selected, setSelected] = React.useState(0)
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.icon}></div>
      <div className={headerStyles.subtitle}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={headerStyles.nav}>
        <ul className={headerStyles.menu}>
          <li
            className={`${headerStyles.menuItem} ${selected === 0 &&
              headerStyles.active}`}
            onClick={() => setSelected(0)}
          >
            Home
          </li>
          <li
            className={`${headerStyles.menuItem} ${selected === 1 &&
              headerStyles.active}`}
            onClick={() => setSelected(1)}
          >
            Blog
          </li>
          <li
            className={`${headerStyles.menuItem} ${selected === 2 &&
              headerStyles.active}`}
            onClick={() => setSelected(2)}
          >
            Categories
          </li>
          <li className={headerStyles.subMenuWrapper}>
            <ul className={headerStyles.subMenu}>
              <li>Posts</li>
              <li>Poems</li>
              <li>Thoughts</li>
            </ul>
          </li>
          <li
            className={`${headerStyles.menuItem} ${selected === 3 &&
              headerStyles.active}`}
            onClick={() => setSelected(3)}
          >
            About
          </li>
        </ul>
      </div>
      <div className={headerStyles.social}>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaGithub />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
      </div>
    </header>
  )
}

export default Header
