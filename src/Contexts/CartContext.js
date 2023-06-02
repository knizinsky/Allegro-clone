import { createContext } from "react";

export const CartContext = createContext({
	totalPrice: 0,
    totalItems: 0,
    updateTotalItems: () => {}
});
