import "./App.module.scss";
import Coupon from "./Components/Coupon/Coupon";
import Navigation from "./Components/Navigation/Navigation";
import Categories from "./Components/Categories/Categories";
import Slider from "./Components/Slider/Slider";
import ItemsSection from "./Components/ItemsSection/ItemsSection";
import { CartContext } from "./Contexts/CartContext";
import { useState } from "react";
import FooterMini from "./Components/FooterMini/FooterMini";
import GroupServices from "./Components/GroupServices/GroupServices";
import FooterLinks from "./Components/FooterLinks/FooterLinks";
import StaticSection from "./Components/StaticSection/StaticSection";
import InspirationSection from "./Components/InspirationSection/InspirationSection";
import FooterCategories from "./Components/FooterCategories/FooterCategories";

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
				<main>
					<Slider />
					<StaticSection/>
					<ItemsSection title="Znajdź idealny prezent" specialImg={true} section={1}></ItemsSection>
					<ItemsSection title="Mogą Cię zainteresować" specialImg={false} section={2}></ItemsSection>
					<InspirationSection/>
					<ItemsSection title="Najlepsze okazje dla Ciebie" specialImg={false} section={3}></ItemsSection>
				</main>
			</CartContext.Provider>
			<footer>
				<FooterCategories/>
				<FooterLinks></FooterLinks>
				<FooterMini/>
				<GroupServices/>
			</footer>
		</div>
	);
}

export default App;
