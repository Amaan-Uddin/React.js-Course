import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// once we import our components, inject them inside of our App component
function App() {
	return (
		<div className="App">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
