import { Query } from "..";

/* spRestaurantLocations(restaurant_name VARCHAR(50))
BEGIN
	SELECT restaurants.*, locations.locationname, locations.zipcode FROM restaurants 
	JOIN locations ON locations.id = restaurants.locationid
	WHERE restaurantname = restaurant_name; */

    const retrieve = ( restaurantid: number ) => Query('CALL spRestaurantLocations(?)', [restaurantid]);

    export default {
        retrieve
    }