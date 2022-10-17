import { Router } from "express";

import {
    DisplayBusinessList,
    DisplayBusinessAddPage,
    ProcessBusinessAddPage,
    ProcessBusinessUpdatePage,
    DisplayBusinessUpdatePage,
    ProcessBusinessDelete
} from "../controllers/business.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/business-list', DisplayBusinessList);
router.get('/business-add', AuthGuard, DisplayBusinessAddPage);
router.post('/business-add', AuthGuard, ProcessBusinessAddPage);
router.get('/business-edit/:id', AuthGuard, DisplayBusinessUpdatePage);
router.post('/business-edit/:id', AuthGuard, ProcessBusinessUpdatePage);
router.get('/business-delete/:id', AuthGuard, ProcessBusinessDelete);

export default router;