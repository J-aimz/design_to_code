import React from 'react'
import { Feature } from '../../components'
import css from './Features.module.css'
function Features() {
  return (
    <div className={`${css.features} section__padding`}>
      <div className={css.first_div}>
        <h2 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className={css.second_div}>
        <Feature 
          header={'Improving end distrusts instantly '}
          text={'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'}
          style={'row'}
        />

        <Feature 
          header={'Become the tended active'}
          text={'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'} 
          style={'row'}
        />

        <Feature 
          header={'Message or am nothing'}
          text={'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'} 
          style={'row'}
        />

        <Feature 
          header={'Really boy law county'}
          text={'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'} 
          style={'row'}
        />

      </div>
      

    </div>
  )
}

export default Features