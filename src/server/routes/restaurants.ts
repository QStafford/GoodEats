import { Router } from "express";

import db from '../db';

const router = Router();

//gET API/RESTAURANTS
router.get('/:id?', async (req, res) => {
    const restaurantid = Number(req.params.id);

   try {
       const [restaurant] = await db.restaurants.one(restaurantid);
       res.json(restaurant);
   } catch (error) {
       console.log(error);
       res.status(500).json({msg: 'Ohhh you in trouble girl', error });
       
   }
});

export default router;