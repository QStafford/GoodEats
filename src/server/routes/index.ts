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




import usersRouter from './users';
import locationsRouter from './locations';
import restaurantsRouter from './restaurants';
import card_dataRouter from './card_data';
import cardtagsRouter from './cardtags';





export default router;