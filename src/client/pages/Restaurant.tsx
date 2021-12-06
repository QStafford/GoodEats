import * as React from 'react';
import PostCard from '../components/PostCard';
import type { IPost } from '../../server/utils/types';

const Restaurant: React.FC<RestaurantProps> = (props) => {

    document.body.className = "restaurant-bg";

	const [posts, setPosts] = React.useState<IPost[]>([]);

    React.useEffect(() => {
        (async () => {
            const res = await fetch('/api/posts');
            if (res.ok) {
                const posts = await res.json();
                setPosts(posts);
            } else {
                console.log("error");
            }
        })()
    }, []);

    return (
        <main className="container">
            <section className="row m-2 justify-content-center">
                <div className="col-12 mb-5">
                    <h1 className="text-center">Restaurant View </h1>
                </div>
                <div className="p-3 mb-5 rounded col-8">
                    {posts.map(post => (
                        <PostCard key = {`postcard-${post.id}`} post={post}/>
                    ))}
                </div>
            </section>
        </main>
    )
}

interface RestaurantProps {}

export default Restaurant;