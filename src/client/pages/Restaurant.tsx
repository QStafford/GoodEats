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
            <section className="d-flex flex-wrap justify-content-between">
                {/* sidebar for restaurant information */}
                <div className="col-4 p-2 bg-rust">
                    <h1 className="text-center basic-font">{restaurant.restaurantname}</h1>
                    <div>
                        <img src={`../../../public/restaurantimages/restaurant-${restaurantid}`} alt={restaurant.restaurantname}/>
                    </div>
                    <h2 className="text-center basic-font">{restaurant.restauranttype}</h2>
                </div>
                {/* feed div */}
                <div className="col-8 p-3">
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