import React from 'react'
import styles from './FooterMini.module.scss'
import whiteLogo from '../../Img/logo-white.svg'

const FooterMini = () => {
  return (
    <div className={styles.footerMiniWrapper}>
        <p>Korzystanie z serwisu oznacza akceptację <a href="#home" className={styles.statute}>regulaminu</a></p>
        <img src={whiteLogo} alt="Allegro logo" />
    </div>
  )
}

export default FooterMini