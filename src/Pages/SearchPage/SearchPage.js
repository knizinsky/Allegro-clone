import React from "react";
import styles from "./SearchPage.module.scss";

import notFoundImg from "../../Img/not-found.png";
import ItemsSection from "../../Components/ItemsSection/ItemsSection";

const SearchPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.resultTitle}>
					<p className={styles.searchPhrase}>szukasz „XYZ”</p>
					<p className={styles.count}>(0 ofert)</p>
				</div>
				<div className={styles.resultsNotFound}>
					<div className={styles.imgContainer}>
						<img src={notFoundImg} alt="Nie znaleziono produktu" />
					</div>
					<div className={styles.resultResponseContainer}>
						<p className={styles.resultResponse}>
							Przykro nam, nie znaleźliśmy ofert dla “XYZ”
						</p>
						<strong>Spróbuj jeszcze raz:</strong>
						<ul>
							<li>inaczej wpisać nazwę</li>
							<li>sprawdzić czy nie ma błędu</li>
							<li>poszukać czegoś podobnego</li>
						</ul>
					</div>
				</div>
				<div className={styles.recommendingSection}>
					<ItemsSection
						title="Najlepsze okazje dla Ciebie"
						specialImg={false}
						section={3}
					></ItemsSection>
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
