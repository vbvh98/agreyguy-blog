import React from "react"
import headerStyles from "../styles/header.module.css"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <ul className={headerStyles.menu}>
        <li className={headerStyles.menuItem}>Home</li>
        <li className={headerStyles.menuItem}>Blog</li>
        <li className={headerStyles.menuItem}>
          Categories
          <ul className={headerStyles.subMenu}>
            <li>Posts</li>
            <li>Poems</li>
            <li>Thoughts</li>
          </ul>
        </li>
        <li className={headerStyles.menuItem}>About</li>
      </ul>
    </header>
  )
}

export default Header
