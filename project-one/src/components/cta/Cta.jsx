import React from 'react'
import css from './Cta.module.css'

function Cta() {
  return (
    <div className={`${css.cta} section__margin`}>
      <div className={css.cta_text}>
        <p>Request Early Access to Get Started</p>
        <h2>Register today & start exploring the endless possiblities.</h2>
      </div>

      <button type='button'>Get Started</button>

    </div>
  )
}

export default Cta