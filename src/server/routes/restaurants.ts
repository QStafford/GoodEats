import { Router } from "express";

const router = Router();

// GET /api/restaurants/
router.get('/', (req, res) => {
    res.json({ msg: 'TEST RESTAURANTS GET' })
});

export default router;