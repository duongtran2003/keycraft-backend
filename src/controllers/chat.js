import { BardAPI } from 'bard-api-node';

class ChatController {

  constructor() {
    this.bard = new BardAPI();
  }

  async getResponse(req, res) {
    const message = req.body.message;

    this.bard.initializeChat(process.env.BARD_API_KEY);
    const response = await this.bard.getBardResponse("Một câu hỏi nhỏ về bàn phím cơ (mechanical keyboard): " + message);
    return res.status(200).json(response.text);
  }
}

export {
  ChatController,
}
