import React from 'react'
import css from './Posibility.module.css'

import img from '../../assets/possibility_img.png'

function Possibility() {
  return (
    <section className={`${css.possibility} section__padding`}>
      <img src={img} alt="section img" />
      <div className={css.possibility__text_section}>
        <p>Request Early Access to Get Started</p>
        <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <p>Request Early Access to Get Started</p>
      </div>
    </section>
  )
}

export default Possibility