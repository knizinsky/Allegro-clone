import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./CartModal.module.scss";
import { CartContext } from "../../Contexts/CartContext";

const portalElement = document.getElementById("cart-modal");

const CartModal = React.forwardRef((props, ref) => {
	const cartContext = useContext(CartContext)

	const [isMouseoverOnModal, setIsMouseoverOnModal] = useState(false);

	const enterHandler = () => {
		setIsMouseoverOnModal(true);
		clearTimeout(props.timeoutId);
	};

	const leaveHandler = () => {
		setIsMouseoverOnModal(false);
	};

	useEffect(() => {
		props.isMouseOverOnModal(isMouseoverOnModal);
	});

	return ReactDOM.createPortal(
		<div
			ref={ref}
			className={styles.cartModalWrapper}
			style={{ top: `${props.offsetHeight}px` }}
			onMouseEnter={enterHandler}
			onMouseLeave={leaveHandler}
		>
			<header className={styles.cartHeader}>
				<h4>Twój koszyk</h4>
				<div>
					<span className={styles.cartValueText}>WARTOŚĆ KOSZYKA</span>
					<span className={styles.cartValue}>{cartContext.currentPrice.toFixed(2)} zł</span>
				</div>
			</header>
			<div className={styles.cartItems}>
				<div className={styles.emptyCart}>
					<h4>Twój koszyk jest pusty</h4>
					<p>Dodaj do koszyka przedmioty i kup je szybko i wygodnie.</p>
					<p>
						Przez koszyk możesz kupić za jednym razem do 50 przedmiotów od
						różnych sprzedawców.
					</p>
				</div>
			</div>
		</div>,
		portalElement
	);
});

export default CartModal;
