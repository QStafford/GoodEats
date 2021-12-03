import { Router } from "express";
import db from '../db';

const router = Router();

//gET API/users
router.get('/', (req, res) => {
    router.get('/', async (req, res) => {
        try {
            const users = await db.users.all();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'Ohhh you in trouble girl', error });
            
        }
     });
});


export default router;