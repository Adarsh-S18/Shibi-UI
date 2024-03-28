import React from 'react'
import './categorylist.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function CategoryList() {
  return (
    <div className="containerr">
      <h1 className="title">Dive into my Creative Universe!</h1>
      <div className="categories">
          <Link href={`/blog`} className="category style">
          <img src='/style.png' alt='' width={32} height={32} className="image"/>
          Mental Health
          </Link>

          <Link href={`/blog`} className="category culture">
          <img src='/culture.png' alt='' width={32} height={32} className="image"/>
          Social Awareness
          </Link>

          <Link href={`/blog`} className="category travel">
          <img src='/travel.png' alt='' width={32} height={32} className="image"/>
          Beauty within you
          </Link>

         
          
      </div>
    </div>
  )
}

export default CategoryList


 {/* <Link href={`/blog`} className="category cinema">
          <img src='/fashion.png' alt='' width={32} height={32} className="image"/>
          cinema
          </Link>

          <Link href={`/blog`} className="category food">
          <img src='/food.png' alt='' width={32} height={32} className="image"/>
          food
          </Link>

          <Link href={`/blog`} className="category fashion">
          <img src='/fashion.png' alt='' width={32} height={32} className="image"/>
          fashion
          </Link> */}