import { Query } from '..';

const all = () => Query('SELECT restaurants.restaurantname, restaurants.restauranttype, locations.address FROM restaurants JOIN locations ON locations.id = restaurants.locationid');

const one = (restaurantID: string) => Query("'SELECT restaurants.restaurantname, restaurants.restauranttype, locations.address FROM restaurants JOIN locations ON locations.id = restaurants.locationid WHERE restaurants.id = ?", [restaurantID])

export default{
    all,
    one
}