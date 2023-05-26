import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import CartModal from "../CartModal/CartModal";

import styles from "./Navigation.module.scss";
import logo from "../../Img/logo.svg";
import userIcon from "../../Img/Icons/user-icon.svg";
import cartIcon from "../../Img/Icons/cart-icon.svg";
import bellIcon from "../../Img/Icons/bell-icon.svg";
import heartIcon from "../../Img/Icons/heart-icon.svg";
import chatIcon from "../../Img/Icons/chat-icon.svg";
import polandIcon from "../../Img/Icons/poland-icon.svg";

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [cartOffset, setCartOffset] = useState()
	const cartRef = useRef();
	const cartIconRef = useRef();
	const navRef = useRef();

	const scrollHandler = () => {
		if (window.scrollY > 110) {
			setIsScrolled(true);

		} else {
			setIsScrolled(false);
		}
		
		setCartOffset(navRef.current.offsetHeight + navRef.current.offsetTop)
	};
	

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
	}, []);

	const handlerMouseEnter = () => {
		setIsHovered(true);
	};

	

	const handlerMouseLeave = () => {
		setTimeout(()=>{
			if(cartRef.current != null){
				cartRef.current.addEventListener("mouseenter", () => {
					setTimeout(()=>{
					setIsHovered(true);
					},500)
				});
				cartRef.current.addEventListener("mouseleave", () => {
					setTimeout(()=>{
						setIsHovered(false);
					},500)
				});
			}
		},1)
	};

	setTimeout(() => {
		if (cartRef.current != null) {
			cartIconRef.current.addEventListener("mouseenter", () => {
				setIsHovered(true);
			});
			cartIconRef.current.addEventListener("mouseleave", () => {
				setTimeout(()=>{
					setIsHovered(false);
				},500)
			});
		}
	}, 1);

	return (
		<nav className={`${styles.navWrapper} ${isScrolled && styles.fixedNav}`} ref={navRef} id="nav">
			<div className={styles.logo}>
				<a href="#home">
					<img src={logo} alt="Allegro logo" />
				</a>
			</div>
			<div className={styles.searchBarWrapper}>
				<div className={styles.searchBar}>
					<form>
						<input
							type="text"
							className={styles.searchInput}
							placeholder="czego szukasz?"
						/>
						<select name="" id="" className={styles.selectCategories}>
							<option value="wszystkie-kategorie">Wszystkie kategorie</option>
							<optgroup label="Kategorie">
								<option value="dom-i-ogrod">Dom i ogród</option>
								<option value="dziecko">Dziecko</option>
								<option value="elektronika">Elektronika</option>
								<option value="firma-i-uslugi">Firma i usługi</option>
								<option value="kolekcje-i-sztuka">Kolekcje i sztuka</option>
								<option value="kultura-i-rozrywka">Kultura i rozrywka</option>
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
				<img
					src={cartIcon}
					className={styles.cartIcon}
					onMouseEnter={handlerMouseEnter}
					onMouseLeave={handlerMouseLeave}
					ref={cartIconRef}
					alt="Ikonka koszyka"
				/>
				<CartModal
					ref={cartRef}
					isHovered={isHovered}
					setIsHovered={setIsHovered}
					offsetHeight={cartOffset}
				/>
				<img src={userIcon} alt="Ikonka użytkownika" />
			</div>
		</nav>
	);
};

export default Navigation;
