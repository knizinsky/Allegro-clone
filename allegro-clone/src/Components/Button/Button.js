import React, { useContext } from 'react'
import styles from './Button.module.scss'
import { CartContext } from '../../Contexts/CartContext';

const Button = (props) => {
  let cartContext = useContext(CartContext);

  const clickHandler = () => {
    cartContext.updatePrice(cartContext.currentPrice + parseFloat(props.price.replace(",", ".")))
    cartContext.updateTotalItems(cartContext.currentTotalItems + 1)
  }

  return (
    <button type={props.type} className={styles.btn} style={props.style} onClick={clickHandler}>{props.value}</button>
  )
}

export default Button