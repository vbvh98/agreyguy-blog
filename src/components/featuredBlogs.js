import React from 'react'
import fbStyles from '../styles/featuredBlogs.module.css'

const Blog = ({ featured, children }) => {
  return (
    <div className={`${fbStyles.blog} ${featured && fbStyles.featured}`}>
      {children}
    </div>
  )
}

const FeaturedBlogs = () => {
  return (
    <div className={fbStyles.grid}>
      <Blog featured></Blog>
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
    </div>
  )
}

export default FeaturedBlogs
