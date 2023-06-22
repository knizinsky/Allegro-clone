import React, { useState } from "react";
import styles from "./RegisterPage.module.scss";
import Button from "../../Components/Button/Button";

const RegisterPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [wrongLogin, setWrongLogin] = useState(false);
	const [wrongPassword, setWrongPassword] = useState(false);
	const [passwordValidationMessage, setPasswordValidationMessage] = useState("");
    const [selectedBtn, setSelectedBtn] = useState('')

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
			let isValid = true;
			let message = "";

			if (password.length < 8) {
				isValid = false;
				message = "Hasło musi mieć minimum 8 znaków.";
			} else if (!/[A-Z]/.test(password)) {
				isValid = false;
				message = "Hasło musi zawierać przynajmniej jedną wielką literę.";
			} else if (!/[a-z]/.test(password)) {
				isValid = false;
				message = "Hasło musi zawierać przynajmniej jedną małą literę.";
			} else if (!/\d/.test(password)) {
				isValid = false;
				message = "Hasło musi zawierać przynajmniej jedną cyfrę.";
			}

			setWrongPassword(!isValid);
			setPasswordValidationMessage(message);
		}
	};

    const ageBtnClickHandler = (event) => {
        setSelectedBtn(event.target.id)
    }

	return (
		<div className={styles.container}>
			<div className={styles.registerContainer}>
				<h2>Załóż konto</h2>
				<section className={styles.accountSwitch}>
					<div className={styles.accountOption}>
						<div>
							<input
								type="radio"
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
					<form action="">
						<p>1. Dane do rejestracji</p>
						<input
							type="radio"
							className={styles.orangeRadio}
							id="emailAccount"
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
								placeholder="login lub e-mail"
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
								login lub e-mail
							</label>
							{wrongLogin && (
								<p className={styles.errorText}>Podaj login lub e-mail</p>
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
								<p className={styles.errorText}>{passwordValidationMessage}</p>
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
								<button className={selectedBtn === 'underEighteenBtn' ? `${styles.ageBtn} ${styles.ageBtnActive}` : styles.ageBtn} id="underEighteenBtn" onClick={ageBtnClickHandler} type="button">
									Mam mniej niż 18 lat
								</button>
							</label>
							<label htmlFor="aboveEighteen">
								<button className={selectedBtn === 'aboveEighteenBtn' ? `${styles.ageBtn} ${styles.ageBtnActive}` : styles.ageBtn} id="aboveEighteenBtn" type="button" onClick={ageBtnClickHandler}>
									Mam 18 lat lub więcej
								</button>
							</label>
						</div>
						<Button
							value="ZAŁÓŻ KONTO"
							style={{ padding: "9px 20px", marginTop: "15px"}}
						></Button>
					</form>
				</section>
			</div>
		</div>
	);
};

export default RegisterPage;
