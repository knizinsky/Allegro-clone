import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import CartModal from "../CartModal/CartModal";
import AccountPopup from "../AccountPopup/AccountPopup";

import styles from "./Navigation.module.scss";
import logo from "../../Img/logo.svg";
import userIcon from "../../Img/Icons/user-icon.svg";
import cartIcon from "../../Img/Icons/cart-icon.svg";
import bellIcon from "../../Img/Icons/bell-icon.svg";
import heartIcon from "../../Img/Icons/heart-icon.svg";
import chatIcon from "../../Img/Icons/chat-icon.svg";
import polandIcon from "../../Img/Icons/poland-icon.svg";
import arrow from "../../Img/action-arrowhead.svg";
import smartIcon from "../../Img/Icons/smart-icon.svg";
import { CartContext } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";

const Navigation = (props) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [cartOffset, setCartOffset] = useState();
	const [isMouseoverOnCart, setIsMouseoverOnCart] = useState(false);
	const [isMouseoverOnModal, setIsMouseoverOnModal] = useState(false);
	const [isVisibleModal, setIsVisibleModal] = useState(false);
	const [isMyAllegroClicked, setisMyAllegroClicked] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState();
	const cartIconRef = useRef();
	const navRef = useRef();

	const cartContext = useContext(CartContext);

	let timeoutId;

	const scrollHandler = () => {
		if (window.scrollY > 110) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}

		if (navRef.current) {
			setCartOffset(navRef.current.offsetHeight + navRef.current.offsetTop);
		}
	};

	const enterHandler = () => {
		setIsMouseoverOnCart(true);
		clearTimeout(timeoutId);
	};

	const leaveHandler = () => {
		setIsMouseoverOnCart(false);
	};

	const accountClickHandler = () => {
		setisMyAllegroClicked((prevState) => !prevState);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
	}, []);

	useEffect(() => {
		// eslint-disable-next-line
		timeoutId = setTimeout(() => {
			if (isMouseoverOnCart || isMouseoverOnModal) {
				setIsVisibleModal(true);
				clearTimeout(timeoutId);
			} else {
				setIsVisibleModal(false);
			}
		}, 125);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [isMouseoverOnCart, isMouseoverOnModal]);

	useEffect(() => {
		cartContext.updateTotalItems(cartContext.currentTotalItems);
	}, [cartContext.currentTotalItems]);

	return (
		<nav
			className={`${styles.navWrapper} ${isScrolled && styles.fixedNav}`}
			ref={navRef}
			id="nav"
		>
			<div className={styles.logo}>
				<Link to="/">
					<img src={logo} alt="Allegro logo" />
				</Link>
			</div>
			{props.blank !== true && (
				<>
					<div className={styles.searchBarWrapper}>
						<div className={styles.searchBar}>
							<form>
								<input
									type="text"
									className={styles.searchInput}
									placeholder="czego szukasz?"
								/>
								<select name="" id="" className={styles.selectCategories}>
									<option value="wszystkie-kategorie">
										Wszystkie kategorie
									</option>
									<optgroup label="Kategorie">
										<option value="dom-i-ogrod">Dom i ogród</option>
										<option value="dziecko">Dziecko</option>
										<option value="elektronika">Elektronika</option>
										<option value="firma-i-uslugi">Firma i usługi</option>
										<option value="kolekcje-i-sztuka">Kolekcje i sztuka</option>
										<option value="kultura-i-rozrywka">
											Kultura i rozrywka
										</option>
										<option value="moda">Moda</option>
										<option value="motoryzacja">Motoryzacja</option>
										<option value="nieruchomosci">Nieruchomości</option>
										<option value="sport-i-turystyka">Sport i turystyka</option>
										<option value="supermarket">Supermarket</option>
										<option value="uroda">Uroda</option>
										<option value="zdrowie">Zdrowie</option>
									</optgroup>
								</select>
								<Button value="SZUKAJ" type="submit"></Button>
							</form>
						</div>
					</div>
					<div className={styles.iconsWrapper}>
						<img src={polandIcon} alt="Ikonka Polski" />
						<img src={heartIcon} alt="Ikonka serduszka" />
						<img src={chatIcon} alt="Ikonka czatu" />
						<img src={bellIcon} alt="Ikonka dzwoneczka" />
						<a
							href="#home"
							onMouseEnter={enterHandler}
							onMouseLeave={leaveHandler}
							ref={cartIconRef}
						>
							<img
								src={cartIcon}
								className={styles.cartIcon}
								alt="Ikonka koszyka"
							/>
							{cartContext.currentTotalItems > 0 ? (
								<span className={styles.totalItemsInCart}>
									{cartContext.currentTotalItems}
								</span>
							) : (
								""
							)}
						</a>
						{isVisibleModal && (
							<CartModal
								offsetHeight={cartOffset}
								isMouseOverOnModal={setIsMouseoverOnModal}
								timeoutId={timeoutId}
							/>
						)}
						<img
							src={userIcon}
							alt="Ikonka użytkownika"
							className={styles.loginIcon}
							onClick={accountClickHandler}
						/>
						{isMyAllegroClicked && (
							<AccountPopup isLoggedIn={isLoggedIn} offsetHeight={cartOffset} />
						)}
						<div className={styles.myAllegro} onClick={accountClickHandler}>
							<div className={styles.smartIcon}>
								<p>bądź</p>
								<img src={smartIcon} alt="Ikonka Smart" />
							</div>
							<p>Moje Allegro</p>
							<img
								src={arrow}
								alt="Strzałka"
								className={
									isMyAllegroClicked ? styles.rotateArrow : styles.actionArrow
								}
							/>
						</div>
					</div>
				</>
			)}
		</nav>
	);
};

export default Navigation;
