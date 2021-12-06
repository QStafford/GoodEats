import { Router } from "express";

import db from '../db';

const router = Router();

//gET API/users
router.get('/:id?', async (req, res) => {
    const userid = Number(req.params.id);
        try {
            const [user] = await db.users.one(userid);
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'Ohhh you in trouble girl', error });
            
        }
     });


export default router;