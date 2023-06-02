import React from "react";
import styles from "./ItemsSection.module.scss";
import kidsDay from "../../Img/kids-day.webp";
import ItemCard from "../ItemCard/ItemCard";
import {PRODUCTS_SECTION1, PRODUCTS_SECTION2} from "../../data/data";

const ItemsSection = (props) => {
	return (
		<div className={styles.sectionWrapper}>
			<h2 className={styles.sectionTitle}>{props.title}</h2>
			<div className={styles.itemsWrapper}>
				{(props.section === 1) && props.specialImg && (
					<img
						src={kidsDay}
						alt="Prezenty na dzień dziecka"
						className={styles.kidsDayImg}
					/>
				)}
				{(props.section === 1) && PRODUCTS_SECTION1.map((product) => {
					return (
						<ItemCard
							key={product.id}
							img={product.img}
							price={product.price}
							title={product.title}
							bought={product.bought}
							alt={product.title}
						/>
					);
				})}
        {(props.section === 2) && PRODUCTS_SECTION2.map((product) => {
					return (
						<ItemCard
							key={product.id}
							img={product.img}
							price={product.price}
							title={product.title}
							bought={product.bought}
							alt={product.title}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ItemsSection;
