import {Router} from 'express';
import * as authCtrl from '../controllers/auth.controller';
import * as middleware from '../middlewares/verifySignup';

const router = Router();

router.post('/signup', middleware.checkDuplicate, authCtrl.signUp);
router.post('/signin', authCtrl.signIn);

export default router;