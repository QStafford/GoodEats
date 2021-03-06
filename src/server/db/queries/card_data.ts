import { Query } from "../";

/* Uses stored procedure from the database to handle queries:
spCardData(card_id INT)
	SELECT card_data.*, users.username FROM card_data 
	JOIN users ON users.id = card_data.userid
	WHERE card_data.id = card_id; */

const retrieve = (id: number) => Query('CALL spCardData(?)', [id]);

export default {
    retrieve
}