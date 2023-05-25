import React from 'react'
import styles from './ItemCard.module.scss'
import Button from '../Button/Button'

import smartIcon from '../../Img/Icons/smart-icon.svg'
import payIcon from '../../Img/Icons/pay-badge-icon.svg'

const ItemCard = (props) => {
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.imgWrapper}>
            <img src={props.img} alt={props.alt} />
        </div>
        <div>
            <ul className={styles.cardText}>
                <li className={styles.price}>{props.price} zł</li>
                <li>
                    <img src={smartIcon} alt="Ikonka smart" />
                </li>
                <li className={styles.itemTitle}>{props.title}</li>
                <li>zapłać później z <img src={payIcon} alt="Ikonka pay" className={styles.payIcon}/></li>
                <li>{props.bought} osób kupiło</li>
            </ul>
        </div>
        <Button value="Dodaj" style={{padding: '6px 8px'}}></Button>
    </div>
  )
}

export default ItemCard