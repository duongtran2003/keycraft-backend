import { Router } from "express";
import { jwtGuard } from "../middlewares/guards/jwtGuard.js";
import { ChatController } from "../controllers/chat.js";

const router = new Router();
const chatController = new ChatController();

router.post('/getResponse', jwtGuard, chatController.getResponse.bind(chatController));

export {
  router,
}

