import { useState } from 'react';

import Container from './layouts/Container';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Status from './components/Status';
import ProfileCard from './components/ProfileCard';
import Alert from './components/Alert';
import ProductList from './components/ProductList';
import Toggle from './components/Toggle';
import Avatar from './components/Avatar';

const App = () => {
	const [isOn, toggleIsOn] = useState(false);

	return (
		<Container style={{ maxWidth: '600px', margin: '0 auto' }}>
			<Greeting name={'Karl'} />
			<Greeting />
			<Counter initialCount={0} />
			<Status status='success' />
			<ProfileCard user={{ name: 'Ada', age: 22 }} />
			<Alert message={'hello'} type='info' />
			<Alert message={'world'} type='warn' />
			<Alert message={'help'} type='error' />
			<ProductList
				products={[
					{ id: 1, title: 'Book' },
					{ id: 2, title: 'Pen' },
				]}
			/>
			<Toggle isOn={isOn} onToggle={toggleIsOn} />
			<Avatar
				url={
					'https://images.unsplash.com/photo-1543876140-dc6979975b25?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				}
				altText={'an owl'}
			/>
		</Container>
	);
};

export default App;
