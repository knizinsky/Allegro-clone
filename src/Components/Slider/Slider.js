import React, { useState } from "react";
import styles from "./Slider.module.scss";
import Slide from "./Slide";
import holidayPromo from "../../Img/holiday-promo.webp";
import SliderBtn from "../SliderBtn/SliderBtn";

const Slider = () => {
	const [sliderPosition, setSliderPosition] = useState(0);

	return (
		<>
			<div className={styles.container}>
				<SliderBtn direction="left" setSliderPosition={setSliderPosition} sliderPosition={sliderPosition}/>
				<SliderBtn direction="right" setSliderPosition={setSliderPosition} sliderPosition={sliderPosition}/>

				<div
					className={styles.sliderWrapper}
					style={{ transform: `translateX(${sliderPosition}px)` }}
				>
					<Slide
						img={holidayPromo}
						alt="Reklama wakacyjna"
						mainText="Niskie ceny na początek lata mają"
						subText="Przygotuj się na wakacje"
					></Slide>
					<Slide
						img={holidayPromo}
						alt="Reklama wakacyjna"
						mainText="Niskie ceny na początek lata mają"
						subText="Przygotuj się na wakacje"
					></Slide>
					<Slide
						img={holidayPromo}
						alt="Reklama wakacyjna"
						mainText="Niskie ceny na początek lata mają"
						subText="Przygotuj się na wakacje"
					></Slide>
					<Slide
						img={holidayPromo}
						alt="Reklama wakacyjna"
						mainText="Niskie ceny na początek lata mają"
						subText="Przygotuj się na wakacje"
					></Slide>
				</div>
			</div>
			<div className={styles.navDots}>
				<div className={styles.navDot}></div>
				<div className={styles.navDot}></div>
				<div className={styles.navDot}></div>
				<div className={styles.navDot}></div>
				<div className={styles.navDot}></div>
			</div>
		</>
	);
};

export default Slider;
