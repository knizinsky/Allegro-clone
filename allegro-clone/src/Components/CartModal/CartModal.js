import React from "react";
import ReactDOM from "react-dom";
import styles from "./CartModal.module.scss";

const portalElement = document.getElementById("cart-modal");

const CartModal = React.forwardRef((props,ref) => {
  
  if(props.isHovered){
    return ReactDOM.createPortal(
      <div ref={ref} className={styles.cartModalWrapper}>
        <header className={styles.cartHeader} >
          <h4>Twój koszyk</h4>
          <div>
            <span className={styles.cartValueText}>WARTOŚĆ KOSZYKA</span>
            <span className={styles.cartValue}>69,69 zł</span>
          </div>
        </header>
        <div className={styles.cartItems}>
          <div className={styles.emptyCart}>
            <h4>Twój koszyk jest pusty</h4>
            <p>Dodaj do koszyka przedmioty i kup je szybko i wygodnie.</p>
            <p>
              Przez koszyk możesz kupić za jednym razem do 50 przedmiotów od
              różnych sprzedawców.
            </p>
          </div>
        </div>
      </div>,
      portalElement
    );
  }
});

export default CartModal;
