import "./App.module.scss";
import Coupon from "./Components/Coupon/Coupon";
import Navigation from "./Components/Navigation/Navigation";
import Categories from "./Components/Categories/Categories";
import Slider from "./Components/Slider/Slider";
import ItemsSection from "./Components/ItemsSection/ItemsSection";
import { CartContext } from "./Contexts/CartContext";
import { useState } from "react";

function App() {
	const [currentTotalItems, setCurrentTotalItems] = useState(0);
	const [currentPrice, setCurrentPrice] = useState(0)

	const updateTotalItems = (currentValue) => {
		setCurrentTotalItems(currentValue)
	}

	const updatePrice = (currentValue) => {
		setCurrentPrice(currentValue)
	}
	
	const cartContext = {
		currentPrice,
		currentTotalItems,
		updateTotalItems,
		updatePrice
	}


	return (
		<div className="App" id="home">
			<CartContext.Provider value={cartContext}>
				<Coupon />
				<Navigation />
				<Categories />
				<main style={{ height: "200vh" }}>
					<Slider />
					<ItemsSection title="Znajdź idealny prezent"></ItemsSection>
				</main>
			</CartContext.Provider>
		</div>
	);
}

export default App;
