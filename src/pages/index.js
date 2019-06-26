import React from 'react'
import Header from '../components/header'
import FeaturedBlogs from '../components/featuredBlogs'
import '../styles/index.css'
import indexstyles from '../styles/index.module.css'

export default () => {
  const [isOpen, setOpen] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => setOpen(true), 100)
  }, [])

  return (
    <section>
      <div className={`${indexstyles.item2} ${isOpen && indexstyles.scale}`}>
        <Header />
        <FeaturedBlogs />
      </div>
      <div className={indexstyles.item1}>
        <img src="https://unsplash.it/200" alt="" />
      </div>
      <div className={indexstyles.item3}>
        <div>
          <h1>A Grey Guy</h1>
        </div>
      </div>
    </section>
  )
}
