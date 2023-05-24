import React from "react";
import CouponImg from "../../Img/coupon.webp";
import style from "./Coupon.module.scss";

const Coupon = () => {
	return (
		<>
			<img src={CouponImg} alt="Kupon" className={style.couponImg}/>
		</>
	);
};

export default Coupon;
