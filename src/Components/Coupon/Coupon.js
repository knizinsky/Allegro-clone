import React from "react";
import CouponImg from "../../Img/coupon.webp";
import styles from "./Coupon.module.scss";

const Coupon = () => {
	return (
		<>
			<div className={styles.container}>
				<img src={CouponImg} alt="Kupon" className={styles.couponImg} />
			</div>
		</>
	);
};

export default Coupon;
