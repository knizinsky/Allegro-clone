import React from "react";
import ReactDOM from "react-dom";
import styles from "./AccountPopup.module.scss";
import Button from "../Button/Button";

import notLoggedInImg from "../../Img/not-logged-in.png";

const portalElement = document.getElementById("login-modal");

const AccountPopup = (props) => {
	return ReactDOM.createPortal(
		<>
			{props.isLoggedIn === true ? (
				<p>Witaj</p>
			) : (
				<div
					className={styles.notLoggedInContainer}
					style={{ top: `${props.offsetHeight}px` }}
				>
					<img src={notLoggedInImg} alt="Witaj w allegro!" />
					<h3>Witaj w Allegro!</h3>
					<p className={styles.loginEncouragement}>
						Zaloguj się i zobacz swoje zakupy, obserwowane oferty i
						powiadomienia. W Allegro jesteś u siebie!
					</p>
					<Button
						value={"ZALOGUJ SIĘ"}
						style={{ margin: "15px 0", width: "100%", padding: ".7em 0" }}
					/>
					<p>
						Nie masz konta? <a href="#home">Zarejestruj się</a>
					</p>
				</div>
			)}
		</>,
		portalElement
	);
};

export default AccountPopup;