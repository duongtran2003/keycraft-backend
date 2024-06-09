import { Router } from "express";
import { ChatController } from "../controllers/chat.js";
import { jwtGuard } from "../middlewares/guards/jwtGuard.js";

const router = new Router();
const chatController = new ChatController();

router.post('/getResponse', jwtGuard, chatController.getResponse.bind(chatController));

export {
  router,
}

