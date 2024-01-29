import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		<Header />
		<Content />
		<Footer />
	</React.StrictMode>
);
