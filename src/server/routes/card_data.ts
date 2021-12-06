import { Router } from "express";
import db from "../db";

const router = Router();

// GET /api/card_data/users/1
router.get('/users/:userid', async (req, res) => {
    const userid = Number(req.params.userid);

    try {
        const [card_data] = await db.card_data.retrieveByUser(userid);
        res.json(card_data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Code got borked. My bad.', error});
    }
});

// GET /api/card_data/restaurants/restaurantid
router.get('/restaurants/:restaurantid', async (req, res) => {
    const restaurantid = Number(req.params.restaurantid);
console.log(restaurantid)
    try {
        const [card_data] = await db.card_data.retrieveByRestaurant(restaurantid);
        res.json(card_data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Code got borked. My bad.', error});
    }
});
export default router;