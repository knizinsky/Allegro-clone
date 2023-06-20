import React, { useContext } from "react";
import styles from "./Button.module.scss";
import { CartContext } from "../../Contexts/CartContext";

const Button = (props) => {
	let cartContext = useContext(CartContext);

	const clickHandler = () => {
		if (props.price) {
			cartContext.updatePrice(
				cartContext.currentPrice + parseFloat(props.price.replace(",", "."))
			);
			cartContext.updateTotalItems(cartContext.currentTotalItems + 1);
			cartContext.updateItemsList({
				key: props.key,
				price: props.price,
				img: props.img,
				title: props.title,
			});
		}
	};

	return (
		<button
			type={props.type}
			className={styles.btn}
			style={props.style}
			onClick={clickHandler}
		>
			{props.value}
		</button>
	);
};

export default Button;
