import React from "react";
import styles from "./Slide.module.scss";

const Slide = (props) => {
	return (
		<div className={styles.slideWrapper}>
			<h2 className={styles.mainText}>{props.mainText}</h2>
			<p className={styles.subText}>{props.subText}</p>
			<img src={props.img} alt={props.alt} />
		</div>
	);
};

export default Slide;
