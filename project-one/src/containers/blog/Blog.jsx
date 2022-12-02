import React from 'react'
import { Article } from '../../components'
import css from './Blog.module.css'
import { imgOne, imgTwo, imgThree, imgFour, imgFive } from './imgs'



function Blog() {
  const imgData = [ imgFive, imgOne, imgTwo, imgThree, imgFour,  ]
  return (
    <section className={`${css.blog} section__padding`}>
      <h1>A lot is happening, We are blogging about it.</h1>
      <div className={css.blog__content}>
        <div className={css.blog__content_LHS}>
          <Article img ={imgFive}/>
        </div>
        <div className={css.blog__content_RHS}>
          <Article img ={imgOne}/>
          <Article img ={imgTwo}/>
          <Article img ={imgThree}/>
          <Article img ={imgFour}/>
        </div>
      
       
      </div>
    </section>
  )
}

export default Blog