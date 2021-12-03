import { Query } from '..';

const all = () => Query('SELECT locations.address FROM locations JOIN locations ON locations.id = restaurants.locationid');

const one = (locationsID: string) => Query("", [locationsID])

export default{
    all
}



