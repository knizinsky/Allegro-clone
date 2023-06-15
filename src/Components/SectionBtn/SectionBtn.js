import React from 'react'
import styles from './SectionBtn.module.scss'
import arrowhead from "../../Img/arrowhead.svg";

const SectionBtn = (props) => {
    const clickHandler = () => {
		if(props.direction === "left"){
			props.setSectionOffset(prevOffset => prevOffset+390)
		}else if(props.direction === "right"){
			props.setSectionOffset(prevOffset => prevOffset-390)
		}
	}

  return (
    <button
    onClick={clickHandler}
			className={`${styles.btn} ${
				((props.direction === "left") ? styles.leftBtn : "")
			} ${((props.direction === "right") ? styles.rightBtn : "")}`}
		>
			<img src={arrowhead} alt="Strzałka w prawo" />
		</button>
  )
}

export default SectionBtn