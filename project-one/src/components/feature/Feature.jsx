import React from 'react'
import css from './Feature.module.css'

function Feature({header, text, style}) {
  const styles = {
    justifyContent : style == 'row' ? 'spaceBetween' : 'center',
    flexDirection : style == 'row' ? 'row' : 'column'

  }
  return (
    <div className={css.feature} style={styles}>
      <div>
        <div className={css.before}>
        </div>
        <h3 className={css.header}>{header}</h3>
      </div>
      <div className={css.text}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature