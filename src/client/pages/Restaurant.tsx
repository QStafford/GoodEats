import * as React from 'react';
import * as moment from "moment";
import { Link, useParams } from "react-router-dom";
import type { IRestaurant, IPost } from '../../server/utils/types';
import card_data from '../../server/db/queries/card_data';
import PostCard from '../components/PostCard';

const Restaurant: React.FC<RestaurantProps> = (props) => {
    const { restaurantid } = useParams();
	const [restaurant, setRestaurant] = React.useState<IRestaurant>(null);
    const [ posts, setPosts ] = React.useState<IPost[]>([]);

    React.useEffect(() => {
        (async () => {
            const res = await fetch(`/api/restaurants/${restaurantid}`);
            const restaurant = await res.json();
            const res2 = await fetch(`/api/card_data/${restaurantid}`);
            const posts = await res2.json();

            setRestaurant(restaurant);
            setPosts(posts);
        
        })()
    }, []);

    return (
        <main className="container">
            <section className="row m-2 justify-content-center">
                <div className="col-12 mb-5">
                    <h1 className="text-center">Restaurant View </h1>
                </div>
                <div className="p-3 mb-5 bg-body rounded col-8">
                    {posts.map(post => (
                        <PostCard key = {`chirp-card-${post.id}`} post={post}/>
                    ))}
                </div>
            </section>
        </main>
    )
}

interface RestaurantProps {}

export default Restaurant;