import React from 'react'

import css from './Header.module.css'

import illustration from '../../assets/Header_Illustration.png'
import groupImg from '../../assets/Group.png'

function Header() {
  return (
    <div className={`${css.hero} section__padding`}>
      <div className={css.hero__LHS}>
        <h1 className={css.hero__header_text}>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className={css.hero__form_con}>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className={css.hero__visited_con}>
          <img src={groupImg} alt="group img" />
          <small>1,600 people requested access a visit in last 24 hours</small>
        </div>
      </div>
      <div className={css.hero__RHS}>
        <img src={illustration} alt="header illustration" />
      </div>

    </div>
  )
}

export default Header