import "./App.module.scss";
import Coupon from "./Components/Coupon/Coupon";
import Navigation from "./Components/Navigation/Navigation";
import Categories from "./Components/Categories/Categories";
import Slider from "./Components/Slider/Slider";
import ItemsSection from "./Components/ItemsSection/ItemsSection";

function App() {
	return (
		<div className="App" id="home">
			<Coupon/>
			<header>
				<Navigation/>
				<Categories/>
			</header>
			<main style={{height: '200vh'}}>
				<Slider/>
				<ItemsSection title="Znajdź idealny prezent"></ItemsSection>
			</main>
		</div>
	);
}

export default App;
