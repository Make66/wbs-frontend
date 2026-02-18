import { useState, useEffect } from 'react';
import type { Post } from './post';
import { getPostsWithoutValidation, getPostWithValidation } from './post';

export default function PostContainer() {
	const [posts, setPosts] = useState<Post[] | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		async function fetchPosts() {
			try {
				const postData = await getPostWithValidation();
				setPosts(postData);
			} catch (error) {
				if (error instanceof Error) {
					setError(error);
				} else {
					console.log('Something went wrong');
				}
			}
		}
		fetchPosts();
	}, []);

	if (error) {
		return <p>{error.message}</p>;
	}

	return (
		<div>
			{posts?.map((post) => {
				return <p>{post.title}</p>;
			})}
		</div>
	);
}
