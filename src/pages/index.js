import React from 'react';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';

const Page = ({ currentPage }) => {
	const renderPage = (page) => {
		switch (page) {
			case 'Portfolio':
				return <Portfolio />;
			case 'Contact':
				return <Contact />;
			case 'Resume':
				return <Resume />;
			default:
				return <About />;
		}
	};
	return (
		<section className="container py-4">
			{renderPage(currentPage)}
		</section>
	);
};

export default Page;
