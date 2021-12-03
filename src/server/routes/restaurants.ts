import { Router } from "express";
import db from '../db';

const router = Router();

//gET API/REASTAURANTS
router.get('/', async (req, res) => {
   try {
       const restaurants = await db.restaurants.all();
       res.json(restaurants);
   } catch (error) {
       console.log(error);
       res.status(500).json({msg: 'Ohhh you in trouble girl', error });
       
   }
});


export default router;