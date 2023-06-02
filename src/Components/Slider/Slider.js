import React from "react";
import styles from "./Slider.module.scss";
import Slide from "./Slide";
import holidayPromo from "../../Img/holiday-promo.webp";

const Slider = () => {
	return (
		<div className={styles.sliderWrapper}>
			<Slide
				img={holidayPromo}
				alt="Reklama wakacyjna"
				mainText="Niskie ceny na początek lata mają"
                subText="Przygotuj się na wakacje"
			></Slide>
			<div className={styles.navDots}>
				<div className={styles.navDot}></div>
				<div className={styles.navDot}></div>
				<div className={styles.navDot}></div>
				<div className={styles.navDot}></div>
				<div className={styles.navDot}></div>
			</div>
		</div>
	);
};

export default Slider;
