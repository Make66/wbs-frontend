import Nav from './Nav';

const Header = () => {
	return (
		<header className='heading'>
			<h1
				style={{
					color: 'blue'
				}}
			>
				Working with React
			</h1>
			<Nav />
		</header>
	);
};

export default Header;
