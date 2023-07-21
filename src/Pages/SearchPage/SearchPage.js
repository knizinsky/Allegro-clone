import React from "react";
import styles from "./SearchPage.module.scss";
import { useSearchContext } from "../../Contexts/SearchContext";

import notFoundImg from "../../Img/not-found.png";
import ItemsSection from "../../Components/ItemsSection/ItemsSection";
import smartIcon from "../../Img/Icons/smart-icon.svg";
import payIcon from "../../Img/Icons/pay-badge-icon.svg";

const SearchPage = () => {
	const { searchResults, searchInput } = useSearchContext();

	console.log(searchResults, searchInput);

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.resultTitle}>
					<p className={styles.searchPhrase}>{searchInput === '' ? "szukasz wszystkich dostępnych ofert" : `szukasz „${searchInput}”`}</p>
					<p className={styles.count}>({searchResults.length} ofert)</p>
				</div>
				{searchResults.length === 0 && (
					<div className={styles.resultsNotFound}>
						<div className={styles.imgContainer}>
							<img src={notFoundImg} alt="Nie znaleziono produktu" />
						</div>
						<div className={styles.resultResponseContainer}>
							<p className={styles.resultResponse}>
								Przykro nam, nie znaleźliśmy ofert dla “{searchInput}”
							</p>
							<strong>Spróbuj jeszcze raz:</strong>
							<ul>
								<li>inaczej wpisać nazwę</li>
								<li>sprawdzić czy nie ma błędu</li>
								<li>poszukać czegoś podobnego</li>
							</ul>
						</div>
					</div>
				)}
				{searchResults.length > 0 && (
					<div className={styles.resultsFound}>
						{searchResults.map((item) => {
							let fullPrice = (parseFloat(item.price.replace(",",".")) + 8.99).toFixed(2);

							return (
								<div className={styles.productContainer}>
									<div className={styles.productImgContainer}>
										<img
											src={item.img}
											alt={item.title}
											className={styles.productImg}
										/>
									</div>
									<div className={styles.itemTextContainer}>
										<p className={styles.productTitle}>{item.title}</p>
										<p className={styles.itemPrice}>{item.price} zł <img src={smartIcon} alt="Ikonka smart" /></p>
										<p className={styles.itemFullprice}>{fullPrice.toString().replace('.', ',')} zł z dostawą</p>
										<p className={styles.itemPayLater}>zapłać później z <img src={payIcon} alt="Ikonka pay" className={styles.payIcon} /></p>
										<p className={styles.itemBought}>{item.bought} osób kupiło</p>
									</div>
								</div>
							);
						})}
					</div>
				)}
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
