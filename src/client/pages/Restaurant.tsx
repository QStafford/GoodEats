import * as React from 'react';
import * as moment from "moment";
import { Link, useParams } from "react-router-dom";
import type { IRestaurant, IPost, ITag } from '../../server/utils/types';
import PostCard from '../components/PostCard';

const Restaurant: React.FC<RestaurantProps> = (props) => {
    const { id } = useParams();
	const [restaurant, setRestaurant] = React.useState<IRestaurant>(null);
    const [cardtags, setCardTags] = React.useState<ITag[]>([]);
    const [posts, setPosts] = React.useState<IPost[]>([]);

    React.useEffect(() => {
        (async () => {
            const res = await fetch(`/api/restaurants/${id}`);
            const restaurant = await res.json();
            const res2 = await fetch(`/api/card_data/restaurants/${id}`);
            const posts = await res2.json();
            posts.forEach(async card => {

                const res3 = await fetch(`/api/cardtags/${card.id}`);
                const currentTags = await res3.json();
                setCardTags([...cardtags, currentTags]);
            })

            setRestaurant(restaurant);
            setPosts(posts);
        
        })()
    }, []);

    return (
        <main className="container">
            <section className="d-flex flex-wrap justify-content-between">
                <div className="col-4 p-2 bg-rust">
                    <h1 className="text-center basic-font">{restaurant?.restaurantname}</h1>
                    <div>
                        <img src={`../../../public/restaurantimages/restaurant-${id}`} alt={restaurant?.restaurantname}/>
                    </div>
                    <h2 className="text-center basic-font">{restaurant?.restauranttype}</h2>

                </div>
                <div className="p-3 rounded col-8">
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