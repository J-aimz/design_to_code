import React from 'react'
import { Feature } from '../../components'
import css from './WhatGBT3.module.css'

function WhatGBT3() {
  return (
    <div className={`${css.whatsgpt3__con} section__margin`}>
        <Feature 
          header={'What is GPT-3'} 
          text ={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'} 
          style={'row'}
        />
        <div className={css.header_text}>
          <h2 className='gradient__text'>
            The possibilities are beyond your imagination
          </h2>
          <p>Explore The Library</p>
        </div>
        <div className={css.whatsgpt3__con_features_con}>
          <Feature 
            header={'Chatbots'} 
            text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '} 
            style={'col'}

          />
          <Feature 
            header={'Knowledgebase'} 
            text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'} 
            style={'col'}

          />
          <Feature 
            header={'Education'} 
            text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'} 
            style={'col'}

          />
        </div>
    </div>
  )
}

export default WhatGBT3