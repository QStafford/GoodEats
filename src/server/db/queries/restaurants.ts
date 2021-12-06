import { Query } from '..';

const all = () => Query('SELECT restaurants.restaurantname, restaurants.restauranttype, locations.address FROM restaurants JOIN locations ON locations.id = restaurants.locationid');

const one = (id: number) => Query('SELECT restaurants.restaurantname, restaurants.restauranttype, locations.address FROM restaurants JOIN locations ON locations.id = restaurants.locationid WHERE restaurants.id = ?', [id]);

export default{
    all,
    one
}