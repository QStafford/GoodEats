import { Router } from "express";
import db from "../db";

const router = Router();

// GET /api/card_data/1
router.get('/:id', async (req, res) => {
    const cardid = Number(req.params.id);

    try {
        const [card_data] = await db.card_data.retrieve(cardid);
        res.json(card_data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Code got borked. My bad.', error});
    }
});

export default router;