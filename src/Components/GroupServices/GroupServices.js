import React from "react";
import styles from "./GroupServices.module.scss";

const GroupServices = () => {
	return (
		<div className={styles.servicesContainer}>
			<div className={styles.servicesWrapper}>
			<div className={styles.titleWrapper}>
				<p>Serwisy Grupy Allegro</p>
			</div>
			<div className={styles.listWrapper}>
				<ul className={styles.servicesList}>
					<li>Allegro.cz</li>
					<li>Mall.cz</li>
					<li>Mall.sk</li>
					<li>Mall.hu</li>
					<li>Mall.hr</li>
					<li>Mimovrste.com</li>
					<li>Wedo.cz</li>
					<li>Czc.cz</li>
				</ul>
			</div>
		</div>
		</div>
	);
};

export default GroupServices;
