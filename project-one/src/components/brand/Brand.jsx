import React from 'react'

import css from './Brand.module.css'
import { google, slack, atlassian, dropbox, shopify } from './imgs'



function Brand() {
  return (
    <div className={`${css.brand} section__padding`}>
      <img src={google} alt="google logo" />
      <img src={slack} alt="slack logo" />
      <img src={atlassian} alt="atlassain logo" />
      <img src={dropbox} alt="dropbox logo" />
      <img src={shopify} alt="shopify logo" />
    </div>
  )
}

export default Brand