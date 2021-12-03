import { Router } from "express";
import db from "../db";

const router = Router();

// GET /api/cardtags/1

router.get('/:cardid', async (req, res) => {
    const cardid = Number(req.params.cardid);

    try {
        const [cardtags] = await db.cardtags.retrieve(cardid);
        res.json(cardtags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Code is messed up.', error});
    }
});

export default router;