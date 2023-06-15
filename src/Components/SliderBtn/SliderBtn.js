import React from "react";
import styles from "./SliderBtn.module.scss";
import arrowhead from "../../Img/arrowhead.svg";

const SliderBtn = (props) => {

	const clickHanlder = () => {
		if (props.direction === "right") {
			props.setSliderPosition((prevPosition) => prevPosition - 1600);
		} else if (props.direction === "left") {
			props.setSliderPosition((prevPosition) => prevPosition + 1600);
		}
	};

	return (
		<button
			onClick={clickHanlder}
			className={`${styles.btn} ${
				(props.direction === "left" && props.sliderPosition <0) ? styles.leftBtn : ""
			}`}
		>
			{console.log(props.sliderPosition)}
			<img src={arrowhead} alt="Strzałka w prawo" />
		</button>
	);
};

export default SliderBtn;
