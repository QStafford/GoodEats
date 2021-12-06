import { Query } from "../";

/* Uses stored procedure from the database to handle queries:
spCardData(card_id INT)
	SELECT card_data.*, users.username FROM card_data 
	JOIN users ON users.id = card_data.userid
	WHERE card_data.id = card_id; */

const retrieveOne = (id: number) => Query('CALL spCardData(?)', [id]);
const retrieveByRestaurant = (restaurantid: number) => Query('CALL spCardDataByRestaurant(?)', [restaurantid]);
const retrieveByUser = (userid: number) => Query('CALL spCardDataByUser(?)', [userid]);

export default {
    retrieveOne,
	retrieveByRestaurant,
	retrieveByUser
}