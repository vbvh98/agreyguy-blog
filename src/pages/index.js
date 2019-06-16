import React from "react"
import "../styles/index.css"
import indexstyles from "../styles/index.module.css"

export default () => {
  const buttonRef = React.useRef(0)

  const open = () => {
    buttonRef.current.classList.toggle(indexstyles.scale)
    localStorage.setItem("isOpen", true)
  }
  return (
    <section>
      <div ref={buttonRef} className={indexstyles.item2}>
        <header>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li></li>
            <li></li>
            <li>
              Categories
              <ul>
                <li>Posts</li>
                <li>Poems</li>
                <li>Thoughts</li>
              </ul>
            </li>
            <li>About</li>
          </ul>
        </header>
      </div>
      <div className={indexstyles.item1}>
        <img src="https://unsplash.it/200" alt="" />
      </div>
      <div className={indexstyles.item3}>
        <div>
          <h1>A Grey Guy</h1>
        </div>
      </div>
      <button onClick={open} className={indexstyles.enterButton}>
        &larr;ENTER&rarr;
      </button>
    </section>
  )
}
