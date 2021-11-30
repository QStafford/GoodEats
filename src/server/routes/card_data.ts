import { Router } from "express";

const router = Router();

// GET /api/card_data/
router.get('/', (req, res) => {
    res.json({ msg: 'TEST CARD DATA GET' })
});

export default router;