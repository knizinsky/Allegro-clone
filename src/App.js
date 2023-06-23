import React, { useState } from "react";
import "./App.module.scss";
import { Route, Routes } from "react-router-dom";

// Components
import Coupon from "./Components/Coupon/Coupon";
import Navigation from "./Components/Navigation/Navigation";
import Categories from "./Components/Categories/Categories";
import Slider from "./Components/Slider/Slider";
import ItemsSection from "./Components/ItemsSection/ItemsSection";
import FooterMini from "./Components/FooterMini/FooterMini";
import GroupServices from "./Components/GroupServices/GroupServices";
import InfoSection from "./Components/InfoSection/InfoSection";
import StaticSection from "./Components/StaticSection/StaticSection";
import InspirationSection from "./Components/InspirationSection/InspirationSection";
import CategoriesLinks from "./Components/CategoriesLinks/CategoriesLinks";

// Contexts
import { CartContext } from "./Contexts/CartContext";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
	const [currentTotalItems, setCurrentTotalItems] = useState(0);
	const [currentPrice, setCurrentPrice] = useState(0);
	const [currentItemsList, setCurrentItemsList] = useState([]);

	const updateTotalItems = (currentValue) => {
		setCurrentTotalItems(currentValue);
	};

	const updatePrice = (currentValue) => {
		setCurrentPrice(currentValue);
	};

	const updateItemsList = (currentItems) => {
		setCurrentItemsList((prevItems) => [...prevItems, currentItems]);
	};

	const cartContext = {
		currentPrice,
		currentTotalItems,
		currentItemsList,
		updateTotalItems,
		updatePrice,
		updateItemsList,
	};

	return (
		<div className="App" id="home">
			<Routes>
				<Route
					path="/"
					element={
						<CartContext.Provider value={cartContext}>
							<Coupon />
							<Navigation />
							<Categories />
							<main>
								<Slider />
								<StaticSection />
								<ItemsSection
									title="Znajdź idealny prezent"
									specialImg={true}
									section={1}
								></ItemsSection>
								<ItemsSection
									title="Mogą Cię zainteresować"
									specialImg={false}
									section={2}
								></ItemsSection>
								<InspirationSection />
								<ItemsSection
									title="Najlepsze okazje dla Ciebie"
									specialImg={false}
									section={3}
								></ItemsSection>
							</main>
							<CategoriesLinks />
							<InfoSection />
						</CartContext.Provider>
					}
				/>
				<Route
					path="/logowanie"
					element={
						<>
							<Navigation blank={true} />
							<LoginPage />
						</>
					}
				/>
				<Route
					path="/rejestracja"
					element={
						<>
							<Navigation blank={true} />
							<RegisterPage />
						</>
					}
				/>
			</Routes>

			<footer>
				<FooterMini />
				<GroupServices />
			</footer>
		</div>
	);
}

export default App;
