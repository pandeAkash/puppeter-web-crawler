import express from 'express';
import { getContentOfUrl } from '../handlers/crawler';

const router = express.Router();

/* GET home page. */
router.get('/crawl-page', getContentOfUrl);

export default router;
