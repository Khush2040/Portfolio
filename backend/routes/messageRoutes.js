import express from 'express';
import { submitMessage, getMessages } from '../controllers/messageController.js';

const router = express.Router();

router.post('/', submitMessage);
router.get('/', getMessages); // Should be protected by auth middleware in a real app

export default router;
