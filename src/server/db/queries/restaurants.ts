import { Query } from '..';

const all = () => Query('SELECT restaurants.restaurantname, restaurants.restauranttype, locations.address FROM restaurants JOIN locations ON locations.id = restaurants.locationid');

const one = (restaurantID: string) => Query("", [restaurantID])

export default{
    all
}



