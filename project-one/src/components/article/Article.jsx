import React from 'react'
import css  from './Article.module.css'

function Article({img}) {
  return (
    <div>
       <div className={css.card}>
          <img src={img} alt="article image" />
          <div className={css.card__body}>
            <div>
              <small>Sep 26, 2021</small>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
            </div>
            <a href="#">Read Full Article</a>

          </div>
        </div>
    </div>
  )
}

export default Article