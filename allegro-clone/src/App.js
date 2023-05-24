import "./App.module.scss";
import Coupon from "./Components/Coupon/Coupon";
import Navigation from "./Components/Navigation/Navigation";
import Categories from "./Components/Categories/Categories";

function App() {
	return (
		<div className="App" id="home">
			<Coupon/>
			<header>
				<Navigation/>
				<Categories/>
			</header>
			<main style={{height: '200vh'}}></main>
		</div>
	);
}

export default App;
