import React, { useState } from "react";
import styles from "./FooterCategories.module.scss";

const FooterCategories = () => {
    const [isShowing, setIsShowing] = useState(false);

    const clickHandler = () => {
        setIsShowing(prevState => !prevState);
    }

	return (
		<>
			<div className={styles.container} style={isShowing === true ? {height: '100%'} : {height: '300px'}}>
				<div className={`${styles.linkBox} ${styles.shortLinks}`}>
					<h3>Premiery</h3>
					<ul>
						<li>Premiera Apple Watch 8</li>
						<li>Apple iPhone 14 Plus</li>
						<li>Apple iPhone 14</li>
						<li>Apple iPhone 14 Pro</li>
						<li>Apple iPhone 14 Pro Max</li>
						<li>Steam Deck</li>
					</ul>
				</div>
				<div className={`${styles.linkBox} ${styles.shortLinks}`}>
					<h3>Nowości</h3>
					<ul>
						<li>Samsung Galaxy S23</li>
						<li>Samsung Galaxy S23 Ultra</li>
						<li>Samsung Galaxy S23 Plus</li>
						<li>Samsung Galaxy A33</li>
						<li>Samsung Galaxy A52s</li>
						<li>Xiaomi Redmi Note 10 Pro</li>
					</ul>
				</div>
				<div className={`${styles.linkBox} ${styles.shortLinks}`}>
					<h3>Dla Ciebie</h3>
					<ul>
						<li>Gwarancja najniższej ceny</li>
						<li>Apple iPhone 13</li>
						<li>Apple iPhone 13 mini</li>
						<li>Lego Duplo</li>
						<li>Apple iPhone 13 Pro</li>
						<li>Apple iPhone 13 Pro Max</li>
					</ul>
				</div>
				<div className={`${styles.linkBox} ${styles.shortLinks}`}>
					<h3>Wyjątkowe okazje</h3>
					<ul>
						<li>Prezenty na Dzień Ojca</li>
						<li>Prezenty dla nauczyciela na koniec roku</li>
						<li>Sukienki na wesele</li>
						<li>Akcesoria na plażę</li>
						<li>Bestsellery produktów</li>
						<li>Twoje Allegro</li>
					</ul>
				</div>
				<div className={`${styles.linkBox} ${styles.mediumLinks}`}>
					<h3>Dom i Ogród</h3>
					<ul>
						<li>Lampy</li>
						<li>Meble kuchenne</li>
						<li>Materac</li>
						<li>Panele podłogowe</li>
						<li>Stolik kawowy</li>
						<li>Meble</li>
						<li>Prezent na dzień ojca</li>
						<li>Szafa</li>
						<li>Odkurzacz piorący</li>
						<li>Makita</li>
						<li>Trzmielina</li>
						<li>Panel ogrodzeniowy</li>
						<li>Lampy sufitowe</li>
						<li>Dywany</li>
						<li>Biurko gamingowe</li>
						<li>Myjka ciśnieniowa karcher</li>
						<li>Rolety rzymskie</li>
						<li>Prezent na rocznicę ślubu</li>
						<li>Peperomia</li>
					</ul>
				</div>
				<div className={`${styles.linkBox} ${styles.mediumLinks}`}>
					<h3>Moda</h3>
					<ul>
						<li>Okulary przeciwsłoneczne męskie</li>
						<li>Sandały na słupku</li>
						<li>Spodnie</li>
						<li>Buty trekkingowe damskie</li>
						<li>Sandały</li>
						<li>Sneakersy damskie</li>
						<li>Air force</li>
						<li>Garnitury damskie</li>
						<li>Adidas superstar</li>
						<li>Sneakersy męskie</li>
						<li>Czółenka na słupku</li>
						<li>Nike air max 90</li>
						<li>Nike air max 97</li>
						<li>Buty trekkingowe</li>
						<li>Pierścionki zaręczynowe</li>
						<li>Naszyjnik</li>
						<li>Bielizna</li>
						<li>Sukienki midi</li>
						<li>Bransoletki</li>
					</ul>
				</div>
				<div className={`${styles.linkBox} ${styles.mediumLinks}`}>
					<h3>Elektronika</h3>
					<ul>
						<li>Słuchawki bezprzewodowe</li>
						<li>Odkurzacz</li>
						<li>Ekspres do kawy</li>
						<li>Odkurzacz bezprzewodowy</li>
						<li>Grill elektryczny</li>
						<li>Ps5</li>
						<li>Smartwatch damski</li>
						<li>Frytkownica beztłuszczowa</li>
						<li>Lodówka</li>
						<li>Blender kielichowy</li>
						<li>Kostkarka do lodu</li>
						<li>Telefony</li>
						<li>Laptopy</li>
						<li>Słuchawki</li>
						<li>Powerbank</li>
						<li>Maszynka do włosów</li>
						<li>Ps4</li>
						<li>Tablet</li>
						<li>Drukarka</li>
					</ul>
				</div>
				<div className={`${styles.linkBox} ${styles.mediumLinks}`}>
					<h3>Motoryzacja</h3>
					<ul>
						<li>Opony</li>
						<li>Tablice rejestracyjne</li>
						<li>Opony zimowe</li>
						<li>Zawór egr</li>
						<li>Uszczelka pod głowicą</li>
						<li>Nawigacja dla ciężarówek</li>
						<li>Opony całoroczne</li>
						<li>Opony continental</li>
						<li>Opony motocyklowe</li>
						<li>Regeneracja sprężarek klimatyzacji</li>
						<li>Felgi stalowe</li>
						<li>Zawieszenie pneumatyczne</li>
						<li>Alkomat</li>
						<li>Akumulatory</li>
						<li>Klucze</li>
						<li>Felgi</li>
						<li>K2</li>
						<li>Yato</li>
						<li>Wahacz</li>
					</ul>
				</div>
				<div className={`${styles.linkBox} ${styles.mediumLinks}`}>
					<h3>Dziecko</h3>
					<ul>
						<li>Lego technic</li>
						<li>Lego ninjago</li>
						<li>Lego star wars</li>
						<li>Lego friends</li>
						<li>Lego city</li>
						<li>Wózki dziecięce</li>
						<li>Lego harry potter</li>
						<li>Lego jurassic world</li>
						<li>Sukienki dla dziewczynek</li>
						<li>Lego minecraft</li>
						<li>Wózki dziecięce 3w1</li>
						<li>Lego speed champions</li>
						<li>Lego spiderman</li>
						<li>Lego batman</li>
						<li>Psi patrol zabawki</li>
						<li>Lego mindstorms</li>
						<li>Zabawki dla 3 latka</li>
						<li>Lego disney</li>
						<li>Lego avengers</li>
					</ul>
				</div>
				<div className={`${styles.linkBox} ${styles.mediumLinks}`}>
					<h3>Kultura i rozrywka</h3>
					<ul>
						<li>Gry planszowe</li>
						<li>Gitara klasyczna</li>
						<li>Detektyw pozytywka</li>
						<li>Red dead redemption 2 ps4</li>
						<li>Gra o tron książki</li>
						<li>Wsiąść do pociągu</li>
						<li>Zakładki do książek</li>
						<li>Wiedźmin książki</li>
						<li>Gry na pc</li>
						<li>Książki dla dzieci</li>
						<li>451 stopni fahrenheita</li>
						<li>Voucher na prezent</li>
						<li>Uno</li>
						<li>Gitara akustyczna</li>
						<li>Biblia szatana</li>
						<li>Rower dla 10 latka</li>
						<li>Zniszcz ten dziennik</li>
						<li>Jak mniej myśleć</li>
						<li>Doładowanie google play</li>
					</ul>
				</div>
			</div>
			<button className={styles.showMoreBtn} onClick={clickHandler}>POKAŻ WIĘCEJ</button>
		</>
	);
};

export default FooterCategories;
