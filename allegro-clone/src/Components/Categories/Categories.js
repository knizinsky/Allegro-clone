import React from 'react'
import styles from './Categories.module.scss'
import arrow from '../../Img/action-arrowhead.svg'

const Categories = () => {
  return (
    <div className={styles.categoriesWrapper}>
        <button className={styles.categoriesBtn}>
            Kategorie
            <img src={arrow} alt="Strzałka" className={styles.actionArrow}/>
        </button>
        <ul className={styles.categoriesList}>
            <li>Strefa Okazji</li>
            <li>Promocje z Monetami</li>
            
            <li>Premiery</li>
            <li>Allegro inspiruje</li>
            <li>Sprzedawaj na allegro</li>
        </ul>
    </div>
  )
}

export default Categories