import React from "react";
import styles from "./StaticSection.module.scss";
import allegroPay from "../../Img/SpecialOffers/allegro-pay.svg";
import allegroSmart from "../../Img/SpecialOffers/allegro-smart.svg";
import coin from "../../Img/SpecialOffers/coin.svg";
import eBilet from "../../Img/SpecialOffers/eBilet.svg";
import guaranteed from "../../Img/SpecialOffers/guaranteed.svg";
import rocket from "../../Img/SpecialOffers/rocket.svg";

const StaticSection = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
			<h2>Odkrywaj korzyści</h2>
			<div className={styles.boxContainer}>
				<div className={styles.smartBox}>
					<img src={allegroSmart} alt="Smart" /> Zarządzaj Smart!
				</div>
				<div className={styles.rrsoBox}>
					<img src={allegroPay} alt="Kup teraz, płać później. RRSO 0%" />
					Kup teraz, płać później. RRSO 0%
				</div>
				<div className={styles.guaranteeBox}>
					<img src={guaranteed} alt="Gwarancja najniższej ceny" />
					Gwarancja najniższej ceny
				</div>
				<div className={styles.coinsBox}>
					<img src={coin} alt="Zgarniaj monety" />
					Zgarniaj monety
				</div>
				<div className={styles.choiceBox}>
					<img src={eBilet} alt="Największy wybór biletów" />
					Największy wybór biletów
				</div>
				<div className={styles.newBox}>
					<img src={rocket} alt="Zobacz, co nowego" />
					Zobacz, co nowego
				</div>
			</div>
		</div>
		</div>
	);
};

export default StaticSection;
