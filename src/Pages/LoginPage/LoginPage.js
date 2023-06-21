import React from "react";
import styles from "./LoginPage.module.scss";
import Button from "../../Components/Button/Button";

const LoginPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.loginContainer}>
				<section className={styles.formSection}>
					<h2>Zaloguj się</h2>
					<form action="">
						<div>
							<input
								type="text"
								id="loginOrEmail"
								placeholder="login lub e-mail"
							/>
							<label
								htmlFor="loginOrEmail"
								className={styles.loginOrEmailLabel}
							>
								login lub e-mail
							</label>
						</div>
						<div className={styles.passwordContainer}>
							<input type="password" id="password" placeholder="hasło" />
							<label htmlFor="password" className={styles.passwordLabel}>
								hasło
							</label>
							<label htmlFor="password" className={styles.showPasswordLabel}>
								<button>POKAŻ</button>
							</label>
						</div>
						<div>
							<Button
								value="ZALOGUJ SIĘ"
								style={{ width: "100%", padding: ".7em 0" }}
							/>
						</div>
					</form>
					<div className={styles.or}>
						<hr />
						<span>lub</span>
						<hr />
					</div>
					<div className={styles.continueWith}>
						<button>KONTYNUUJ PRZEZ GOOGLE</button>
						<button>KONTYNUUJ PRZEZ FACEBOOK</button>
						<button>UŻYJ NUMERU TELEFONU</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default LoginPage;
