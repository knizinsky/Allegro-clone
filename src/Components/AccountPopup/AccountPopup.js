import React from "react";
import ReactDOM from "react-dom";
import styles from "./AccountPopup.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

import notLoggedInImg from "../../Img/not-logged-in.png";

const portalElement = document.getElementById("login-modal");

const AccountPopup = (props) => {
	return ReactDOM.createPortal(
		<>
			{props.isLoggedIn === true ? (
				<div
					className={styles.notLoggedInContainer}
					style={{ top: `${props.offsetHeight}px` }}
				>
					<p>Witaj</p>
				</div>
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
					<Link to="/logowanie" style={{ width: "100%" }}>
						<Button
							value={"ZALOGUJ SIĘ"}
							style={{ margin: "15px 0", width: "100%", padding: ".7em 0" }}
						/>
					</Link>
					<p>
						Nie masz konta?{" "}
						<Link to="/rejestracja" style={{ color: "#008673" }}>
							Zarejestruj się
						</Link>
					</p>
				</div>
			)}
		</>,
		portalElement
	);
};

export default AccountPopup;
