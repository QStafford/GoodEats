import { Router } from "express";

const router = Router();

// GET /api/users/
router.get('/', (req, res) => {
    res.json({ msg: 'TEST USERS GET' })
});

export default router;