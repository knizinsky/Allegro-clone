import "./App.module.scss";
import Coupon from "./Components/Coupon/Coupon";
import Navigation from "./Components/Navigation/Navigation";

function App() {
	return (
		<div className="App" id="home">
			<Coupon></Coupon>
			<header>
				<Navigation></Navigation>
			</header>
			<main style={{height: '200vh'}}></main>
		</div>
	);
}

export default App;
