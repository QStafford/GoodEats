import { Router } from "express";
import restaurantsRouter from "./restaurants";
import usersRouter from "./users"


const router = Router();

router.use('/restaurants', restaurantsRouter);
router.use('/users', usersRouter);


export default router;