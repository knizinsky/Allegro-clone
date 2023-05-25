import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {
  return (
    <button type={props.type} className={styles.btn} style={props.style}>{props.value}</button>
  )
}

export default Button