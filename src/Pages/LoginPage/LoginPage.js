import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import Button from "../../Components/Button/Button";

// img
import googleIcon from "../../Img/Icons/google-icon.svg";
import facebookIcon from "../../Img/Icons/facebook-icon.svg";
import phoneIcon from "../../Img/Icons/phone-icon.svg";
import { Link } from "react-router-dom";
import { app, login } from "../../firebase";
import { getAuth } from "firebase/auth";

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [wrongLogin, setWrongLogin] = useState(false);
	const [wrongPassword, setWrongPassword] = useState(false);
	const [formError, setFormError] = useState(false);

	const togglePasswordHanlder = () => {
		setShowPassword((prevState) => !prevState);
	};

	const inputBlurHandler = (event) => {
		setFormError(false);

		if (event.target.type === "text" && event.target.value.trim() === "") {
			setWrongLogin(true);
		} else if (
			event.target.type === "text" &&
			event.target.value.trim() !== ""
		) {
			setWrongLogin(false);
		}

		if (event.target.type === "password" && event.target.value.trim() === "") {
			setWrongPassword(true);
		} else if (
			event.target.type === "password" &&
			event.target.value.trim() !== ""
		) {
			setWrongPassword(false);
		}
	};

	const loginHanlder = (event) => {
		event.preventDefault();

		const email = event.target.elements.email.value;
		const password = event.target.elements.password.value;

		const auth = getAuth(app);

		const getError = (error) => {
			if (error) {
				setFormError(true);
			} else {
				setFormError(false);
			}
		};

		login(auth, email, password, getError);
	};

	return (
		<div className={styles.container}>
			<div className={styles.loginContainer}>
				<section className={styles.formSection}>
					<h2>Zaloguj się</h2>
					<form onSubmit={loginHanlder}>
						<div className={styles.inputContainer}>
							<input
								type="text"
								id="email"
								placeholder="e-mail"
								onBlur={inputBlurHandler}
								className={wrongLogin || formError ? styles.wrongInput : ""}
							/>
							<label
								htmlFor="email"
								className={`${styles.loginOrEmailLabel} ${styles.floatingLabel}`}
							>
								e-mail
							</label>
							{wrongLogin && <p className={styles.errorText}>Podaj e-mail</p>}
						</div>
						<div
							className={`${styles.passwordContainer} ${styles.inputContainer}`}
						>
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								placeholder="hasło"
								onBlur={inputBlurHandler}
								className={wrongLogin || formError ? styles.wrongInput : ""}
							/>
							<label
								htmlFor="password"
								className={`${styles.passwordLabel} ${styles.floatingLabel}`}
							>
								hasło
							</label>
							<label htmlFor="password" className={styles.showPasswordLabel}>
								<button onClick={togglePasswordHanlder} type="button">
									{showPassword ? "UKRYJ" : "POKAŻ"}
								</button>
							</label>
							{wrongPassword && <p className={styles.errorText}>Podaj hasło</p>}
							{formError && (
								<p className={styles.errorText}>
									Login, e-mail lub hasło są nieprawidłowe
								</p>
							)}
						</div>
						<div>
							<Button
								value="ZALOGUJ SIĘ"
								style={{ width: "100%", padding: ".7em 0", margin: ".6em 0"}}
							/>
						</div>
					</form>
					<div className={styles.or}>
						<hr />
						<span>lub</span>
						<hr />
					</div>
					<div className={styles.continueWith}>
						<button>
							<img src={googleIcon} alt="Ikonka Google" />
							<span>KONTYNUUJ PRZEZ GOOGLE</span>
						</button>
						<button>
							<img src={facebookIcon} alt="Ikonka Facebooka" />
							<span>KONTYNUUJ PRZEZ FACEBOOK</span>
						</button>
						<button>
							<img src={phoneIcon} alt="Ikonka telefonu" />
							<span>UŻYJ NUMERU TELEFONU</span>
						</button>
					</div>
				</section>
			</div>
			<div className={styles.registerContainer}>
				<strong>Nie masz konta?</strong>
				<Link
					to="/rejestracja"
					style={{ letterSpacing: "1.5px", padding: "2em" }}
				>
					<span>ZAŁÓŻ KONTO</span>
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
