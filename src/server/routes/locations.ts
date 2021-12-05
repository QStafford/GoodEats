import { Router } from "express";

const router = Router();

// GET /api/locations/
router.get('/', (req, res) => {
    res.json({ msg: 'TEST LOCATIONS GET' })
});

export default router;