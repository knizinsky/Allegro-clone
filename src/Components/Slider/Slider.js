import React, { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss";
import Slide from "./Slide";
import holidayPromo from "../../Img/holiday-promo.webp";
import SliderBtn from "../SliderBtn/SliderBtn";
import garnierPromo from '../../Img/garnier-dni-piekna.webp'
import fatherDayPromo from '../../Img/father-day-promo.webp'
import garnierPromo2 from '../../Img/garnier-promo2.webp'

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
						mainTextColor="white"
						subTextColor="black"
						mainTextBgColor="#00a790"
						subTextBgColor="#fac314"
					></Slide>
					<Slide
						img={garnierPromo}
						alt="Reklama garnier"
					></Slide>
					<Slide
						img={fatherDayPromo}
						alt="Reklama na dzień ojca"
						mainText="Dzień Ojca"
						subText="Prezenty w wymarzonych cenach"
						mainTextColor="black"
						subTextColor="white"
						mainTextBgColor="#fff"
						subTextBgColor="#0d1e28"
					></Slide>
					<Slide
						img={garnierPromo2}
						alt="Reklama garnier"
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
