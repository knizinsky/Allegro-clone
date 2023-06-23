import React, { useState } from "react";
import styles from "./RegisterPage.module.scss";
import Button from "../../Components/Button/Button";
import { getAuth } from "firebase/auth";
import { app, register } from "../../firebase";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [wrongLogin, setWrongLogin] = useState(false);
	const [wrongLoginMessage, setWrongLoginMessage] = useState(
		"Wpisz poprawny email"
	);
	const [wrongPassword, setWrongPassword] = useState(false);
	const [wrongPasswordMessage, setWrongPasswordMessage] = useState(
		"Wpisz poprawne hasło"
	);
	const [selectedBtn, setSelectedBtn] = useState("underEighteenBtn");
	const navigate = useNavigate();


	const togglePasswordHanlder = () => {
		setShowPassword((prevState) => !prevState);
	};

	const inputBlurHandler = (event) => {
		if (event.target.type === "text" && event.target.value.trim() === "") {
			setWrongLogin(true);
		} else if (
			event.target.type === "text" &&
			event.target.value.trim() !== ""
		) {
			setWrongLogin(false);
		}

		if (event.target.type === "password") {
			const password = event.target.value.trim();

			if (password.length < 8) {
				setWrongPassword(true);
				setWrongPasswordMessage("Hasło musi mieć minimum 8 znaków.");
			} else if (!/[A-Z]/.test(password)) {
				setWrongPassword(true);
				setWrongPasswordMessage("Hasło musi zawierać przynajmniej jedną wielką literę.");
			} else if (!/[a-z]/.test(password)) {
				setWrongPassword(true);
				setWrongPasswordMessage("Hasło musi zawierać przynajmniej jedną małą literę.");
			} else if (!/\d/.test(password)) {
				setWrongPassword(true);
				setWrongPasswordMessage("Hasło musi zawierać przynajmniej jedną cyfrę.");
			}

		}
	};

	const ageBtnClickHandler = (event) => {
		setSelectedBtn(event.target.id);
	};

	const registerHandler = (event) => {
		event.preventDefault();

		const email = event.target.elements.loginOrEmail.value;
		const password = event.target.elements.password.value;

		const getError = (error) => {
			if (error.includes('email')) {
				setWrongLogin(true);
				setWrongPassword(false);
			}else if(!(error.includes('email')) && !(error.includes('password'))){
				setWrongLogin(false);
				setWrongPassword(false);
			}
			
			if (error.includes('password')){
				setWrongPassword(true);
			}else if(!(error.includes('email')) && !(error.includes('password'))){
				setWrongLogin(false);
				setWrongPassword(false);
			}

			//email error handling

			if (error === "auth/email-already-in-use") {
				setWrongLoginMessage("Ten adres e-mail jest już zajęty.");
			} else if (error === "auth/invalid-email") {
				setWrongLoginMessage("Nieprawidłowy adres e-mail.");
			} else if (error === "auth/operation-not-allowed") {
				setWrongLoginMessage("Rejestracja z użyciem e-mail'u jest wyłączona.");
			} else if (error === "auth/missing-email") {
				setWrongLoginMessage("Wpisz e-mail.");
			} else if (error === "auth/weak-password") {
				setWrongPasswordMessage("Hasło jest zbyt słabe.");
			} else if (error === "auth/invalid-password") {
				setWrongPasswordMessage("Podane hasło jest nieprawidłowe.");
			} else if (error === "auth/operation-not-allowed") {
				setWrongPasswordMessage("Rejestracja z użyciem hasła jest wyłączona.");
			}
		};

			const auth = getAuth(app);
			register(auth, email, password, getError, navigate);
	};

	return (
		<div className={styles.container}>
			<div className={styles.registerContainer}>
				<h2>Załóż konto</h2>
				<section className={styles.accountSwitch}>
					<div className={styles.accountOption}>
						<div>
							<input
								type="radio"
								defaultChecked="true"
								id="noramlAccount"
								name="accountSwitch"
								className={styles.orangeRadio}
							/>
							<label htmlFor="noramlAccount">Konto Zwykłe</label>
						</div>
						<span>Konto dla klientów indywidualnych</span>
					</div>
					<div className={styles.accountOption}>
						<div>
							<input
								type="radio"
								id="companyAccount"
								name="accountSwitch"
								className={styles.orangeRadio}
							/>
							<label htmlFor="companyAccount">Konto Firma</label>
						</div>
						<span>Konto dla klientów biznesowych</span>
					</div>
				</section>
				<section className={styles.registerForm}>
					<form onSubmit={registerHandler}>
						<p>1. Dane do rejestracji</p>
						<input
							type="radio"
							className={styles.orangeRadio}
							id="emailAccount"
							defaultChecked="true"
							name="dataType"
						/>
						<label htmlFor="emailAccount" style={{ marginRight: "2em" }}>
							E-mail
						</label>
						<input
							type="radio"
							className={styles.orangeRadio}
							id="phoneAccount"
							name="dataType"
						/>
						<label htmlFor="phoneAccount">Numer telefonu</label>
						<div className={styles.inputContainer}>
							<input
								type="text"
								id="loginOrEmail"
								placeholder="e-mail"
								onBlur={inputBlurHandler}
								className={
									wrongLogin
										? `${styles.wrongInput} ${styles.dataInput}`
										: styles.dataInput
								}
							/>
							<label
								htmlFor="loginOrEmail"
								className={`${styles.loginOrEmailLabel} ${styles.floatingLabel}`}
							>
								e-mail
							</label>
							{wrongLogin && (
								<p className={styles.errorText}>{wrongLoginMessage}</p>
							)}
						</div>
						<div
							className={`${styles.passwordContainer} ${styles.inputContainer}`}
						>
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								placeholder="hasło"
								onBlur={inputBlurHandler}
								className={
									wrongPassword
										? `${styles.wrongInput} ${styles.dataInput}`
										: styles.dataInput
								}
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
							{wrongPassword && (
								<p className={styles.errorText}>{wrongPasswordMessage}</p>
							)}
						</div>
						<p>2. Twój wiek</p>
						<span className={styles.detailInfo}>
							Dzięki tej informacji możemy pokazać oferty odpowiednie dla Ciebie
						</span>
						<div className={styles.ageButtons}>
							<input type="radio" id="underEighteen" name="ageCheck" />
							<input type="radio" id="aboveEighteen" name="ageCheck" />
							<label htmlFor="underEighteen">
								<button
									className={
										selectedBtn === "underEighteenBtn"
											? `${styles.ageBtn} ${styles.ageBtnActive}`
											: styles.ageBtn
									}
									id="underEighteenBtn"
									onClick={ageBtnClickHandler}
									type="button"
								>
									Mam mniej niż 18 lat
								</button>
							</label>
							<label htmlFor="aboveEighteen">
								<button
									className={
										selectedBtn === "aboveEighteenBtn"
											? `${styles.ageBtn} ${styles.ageBtnActive}`
											: styles.ageBtn
									}
									id="aboveEighteenBtn"
									type="button"
									onClick={ageBtnClickHandler}
								>
									Mam 18 lat lub więcej
								</button>
							</label>
						</div>
						<Button
							value="ZAŁÓŻ KONTO"
							style={{ padding: "9px 20px", marginTop: "15px" }}
						></Button>
					</form>
				</section>
			</div>
		</div>
	);
};

export default RegisterPage;
