import React, { useEffect, useState } from "react";
import styles from "./SliderBtn.module.scss";
import arrowhead from "../../Img/arrowhead.svg";

const SliderBtn = (props) => {
	const [sliderWidth, setSliderWidth] = useState(props.sliderWidth);

	useEffect(()=>{
		props.setSliderPosition(0)
		setSliderWidth(props.sliderWidth)
		// eslint-disable-next-line
	},[props.sliderWidth])

	const clickHanlder = () => {
		if (props.direction === "right") {
			props.setSliderPosition((prevPosition) => prevPosition - sliderWidth);
		} else if (props.direction === "left") {
			props.setSliderPosition((prevPosition) => prevPosition + sliderWidth);
		}
	};

	return (
		<button
			onClick={clickHanlder}
			className={`${styles.btn} ${
				((props.direction === "left" && props.sliderPosition <0) ? styles.leftBtn : "")
			} ${((props.direction === "right" && props.sliderPosition >=(sliderWidth*-2)) ? styles.rightBtn : "")}`}
		>
			{console.log(props.sliderPosition, sliderWidth*-2)}
			<img src={arrowhead} alt="Strzałka w prawo" />
		</button>
	);
};

export default SliderBtn;
