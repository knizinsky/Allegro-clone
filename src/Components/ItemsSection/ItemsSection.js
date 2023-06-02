import React from 'react'
import styles from './ItemsSection.module.scss'
import kidsDay from '../../Img/kids-day.webp'
import ItemCard from '../ItemCard/ItemCard'

const ItemsSection = (props) => {
  return (
    <div className={styles.sectionWrapper}>
        <h2 className={styles.sectionTitle}>{props.title}</h2>
        <div className={styles.itemsWrapper}>
            {props.specialImg && <img src={kidsDay} alt="Prezenty na dzień dziecka" className={styles.kidsDayImg}/>}
            <ItemCard key={PRODUCTS[0].id} img={PRODUCTS[0].img} price={PRODUCTS[0].price} title={PRODUCTS[0].title} bought={PRODUCTS[0].bought} alt={PRODUCTS[0].title}/>
            <ItemCard key={PRODUCTS[1].id} img={PRODUCTS[1].img} price={PRODUCTS[1].price} title={PRODUCTS[1].title} bought={PRODUCTS[1].bought} alt={PRODUCTS[1].title}/>
            <ItemCard key={PRODUCTS[2].id} img={PRODUCTS[2].img} price={PRODUCTS[2].price} title={PRODUCTS[2].title} bought={PRODUCTS[2].bought} alt={PRODUCTS[2].title}/>
            <ItemCard key={PRODUCTS[3].id} img={PRODUCTS[3].img} price={PRODUCTS[3].price} title={PRODUCTS[3].title} bought={PRODUCTS[3].bought} alt={PRODUCTS[3].title}/>
            <ItemCard key={PRODUCTS[4].id} img={PRODUCTS[4].img} price={PRODUCTS[4].price} title={PRODUCTS[4].title} bought={PRODUCTS[4].bought} alt={PRODUCTS[4].title}/>
        </div>
    </div>
  )
}

export default ItemsSection