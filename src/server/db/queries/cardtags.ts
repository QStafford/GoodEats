import { Query } from "..";

/* spCardTags(card_id INT)
BEGIN
	SELECT tags.id, tags.name FROM cardtags 
	JOIN tags ON tags.id = cardtags.tagid
	WHERE cardid = card_id; */

const retrieve = (cardid: number) => Query('CALL spCardTags(?)', [cardid]);

export default {
    retrieve
}