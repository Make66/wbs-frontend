import { useState, useEffect } from 'react';

function App() {
	return (
		<>
			<Container
				style={{
					maxWidth: '600px',
					margin: '0 auto',
					backgroundColor: '',
					padding: '1rem',
				}}
			>
				<Greeting name='Jane' />
				<Button label='Click me' colour='green' />
				<Button label='Submit' />
				<Status status='error' />
				<Counter />
				<UserInfo />
				<Profile />
			</Container>
		</>
	);
}

export default App;

//state

function Counter() {
	const initialState = 0;
	const [count, setCount] = useState(initialState);

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}

function UserInfo() {
	const [user, setUser] = useState<string | null>(null);

	useEffect(() => {
		const id = setTimeout(() => setUser('John Doe'), 1000);
		return () => clearTimeout(id);
	}, []);

	return <p>{user ? `Welcome ${user}` : `Loading...`}</p>;
}

type UserType = {
	name: string;
	age: number;
	email?: string;
};

function Profile() {
	const [user, setUser] = useState<UserType>({ name: 'Ada', age: 35 });

	useEffect(() => {
		const id = setTimeout(() => {
			setUser({
				name: 'Ada Lovelace',
				age: 37,
				email: 'test@mail.com',
			});
		}, 1000);
		return () => clearTimeout(id);
	}, []);

	return (
		<p>
			{user.name} is {user.age} years old
		</p>
	);
}

// props

type GreetingProps = {
	name: string;
};

function Greeting({ name }: GreetingProps) {
	return <h1>Hello, {name.toUpperCase()}</h1>;
}

type ButtonProps = {
	label: string;
	colour?: string;
};

function Button({ label, colour = 'blue' }: ButtonProps) {
	return <button style={{ backgroundColor: colour }}>{label}</button>;
}

type StatusProps = {
	status: 'loading' | 'success' | 'error';
};

function Status({ status }: StatusProps) {
	return <p>Status: {status}</p>;
}

type ContainerProps = {
	children: React.ReactNode;
	style: React.CSSProperties;
};

function Container({ children, style }: ContainerProps) {
	return <div style={{ ...style }}>{children}</div>;
}
