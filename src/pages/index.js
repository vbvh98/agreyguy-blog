import React from "react"
import Header from "../components/header"
import "../styles/index.css"
import indexstyles from "../styles/index.module.css"

export default () => {
  const [isOpen, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (localStorage.hasOwnProperty("isOpen")) {
      setTimeout(() => setOpen(localStorage.getItem("isOpen")), 500)
    } else {
      localStorage.setItem("isOpen", isOpen)
    }
    return () => void localStorage.setItem("isOpen", isOpen)
  }, [])

  const open = () => {
    setOpen(true)
    localStorage.setItem("isOpen", true)
  }

  return (
    <section>
      <div className={`${indexstyles.item2} ${isOpen && indexstyles.scale}`}>
        <Header></Header>
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
