import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext';
import UseLocalStorage, { useLocalStorage } from './hooks/useLocalStorage';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('savedCart',[]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = id =>{
		setCart(cart.filter((item) => {
			return (item.id !== id)
		}));
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem }}>
					<Navigation cart={cart} />
					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
