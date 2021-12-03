import { Router } from "express";
import usersRouter from './users';
import locationsRouter from './locations';
import restaurantsRouter from './restaurants';
import card_dataRouter from './card_data';
import cardtagsRouter from './cardtags';

const router = Router();

router.use('/users', usersRouter);
router.use('/locations', locationsRouter);
router.use('/restaurants', restaurantsRouter);
router.use('/card_data', card_dataRouter);
router.use('/cardtags', cardtagsRouter);

export default router;