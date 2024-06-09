import { Router } from "express";
import { ChatController } from "../controllers/chat.js";

const router = new Router();
const chatController = new ChatController();

router.post('/getResponse', chatController.getResponse.bind(chatController));

export {
  router,
}

