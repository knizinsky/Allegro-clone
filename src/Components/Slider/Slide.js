import React from "react";
import styles from "./Slide.module.scss";

const Slide = (props) => {
	return (
		<>
			{props.onlyMobile === "true" && (
				<div className={styles.slideWrapper}>
					<h2
						className={`${styles.mainText} ${styles.mainTextMobile}`}
						style={{
							backgroundColor: props.mainTextBgColor,
							color: props.mainTextColor,
						}}
					>
						{props.mainText}
					</h2>
					<p
						className={`${styles.subText} ${styles.subTextMobile}`}
						style={{
							backgroundColor: props.subTextBgColor,
							color: props.subTextColor,
						}}
					>
						{props.subText}
					</p>
					<img src={props.img} alt={props.alt} />
				</div>
			)}
			{props.onlyMobile !== "true" && (
				<div className={styles.slideWrapper}>
					<h2
						className={`${styles.mainText}`}
						style={{
							backgroundColor: props.mainTextBgColor,
							color: props.mainTextColor,
						}}
					>
						{props.mainText}
					</h2>
					<p
						className={`${styles.subText}`}
						style={{
							backgroundColor: props.subTextBgColor,
							color: props.subTextColor,
						}}
					>
						{props.subText}
					</p>
					<img src={props.img} alt={props.alt} />
				</div>
			)}
		</>
	);
};

export default Slide;
