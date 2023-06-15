import React, { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss";
import Slide from "./Slide";
import holidayPromo from "../../Img/holiday-promo.webp";
import SliderBtn from "../SliderBtn/SliderBtn";

const Slider = () => {
	const [sliderPosition, setSliderPosition] = useState(0);
	const [sliderWidth, setSliderWidth] = useState(0);
	const sliderRef = useRef(0);

	useEffect(() => {
		if (sliderRef.current) {
			setSliderWidth(sliderRef.current.offsetWidth);
		}
	}, [sliderRef.current.offsetWidth]);

	return (
		<>
			<div className={styles.container}>
				<SliderBtn
					direction="left"
					setSliderPosition={setSliderPosition}
					sliderPosition={sliderPosition}
					sliderWidth={sliderWidth}
				/>
				<SliderBtn
					direction="right"
					setSliderPosition={setSliderPosition}
					sliderPosition={sliderPosition}
					sliderWidth={sliderWidth}
				/>

				<div
					className={styles.sliderWrapper}
					style={{ transform: `translateX(${sliderPosition}px)` }}
					ref={sliderRef}
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
