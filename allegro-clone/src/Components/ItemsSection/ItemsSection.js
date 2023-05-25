import React from 'react'
import styles from './ItemsSection.module.scss'
import ItemCard from '../ItemCard/ItemCard'

import kidsDay from '../../Img/kids-day.webp'
import legoCar from '../../Img/Products/LEGO-City-Elektryczny-samochod-sportowy.webp'
import legoDinosaur from '../../Img/Products/LEGO-Creator-3-w-1-Potezne-dinozaury.webp'
import hourseToy from '../../Img/Products/SCHLEICH-Boks-Stajenny-Zagroda-Tori-i-Princess.webp'

const PRODUCTS = [
  {
    id:"1",
    img: legoCar,
    price: "39,99",
    title: "LEGO City Elektryczny samochód sportowy 60383",
    bought: "180"
  },
  {
    id:"2",
    img: legoDinosaur,
    price: "68,99",
    title: "LEGO Creator 3 w 1 - Potężne dinozaury (31058)",
    bought: "161"
  },
  {
    id:"3",
    img: hourseToy,
    price: "134,90",
    title: "SCHLEICH Boks Stajenny Zagroda Tori i Princess",
    bought: "5"
  },
]

const ItemsSection = (props) => {
  return (
    <div className={styles.sectionWrapper}>
        <h2 className={styles.sectionTitle}>{props.title}</h2>
        <div className={styles.itemsWrapper}>
            <img src={kidsDay} alt="Prezenty na dzień dziecka" className={styles.kidsDayImg}/>
            <ItemCard key={PRODUCTS[0].id} img={PRODUCTS[0].img} price={PRODUCTS[0].price} title={PRODUCTS[0].title} bought={PRODUCTS[0].bought}/>
            <ItemCard key={PRODUCTS[1].id} img={PRODUCTS[1].img} price={PRODUCTS[1].price} title={PRODUCTS[1].title} bought={PRODUCTS[1].bought}/>
            <ItemCard key={PRODUCTS[2].id} img={PRODUCTS[2].img} price={PRODUCTS[2].price} title={PRODUCTS[2].title} bought={PRODUCTS[2].bought}/>
            <ItemCard key={PRODUCTS[2].id} img={PRODUCTS[2].img} price={PRODUCTS[2].price} title={PRODUCTS[2].title} bought={PRODUCTS[2].bought}/>
            <ItemCard key={PRODUCTS[2].id} img={PRODUCTS[2].img} price={PRODUCTS[2].price} title={PRODUCTS[2].title} bought={PRODUCTS[2].bought}/>
        </div>
    </div>
  )
}

export default ItemsSection