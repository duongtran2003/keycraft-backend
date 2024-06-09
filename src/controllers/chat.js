import { BardAPI } from 'bard-api-node';

class ChatController {

  constructor() {
    this.bard = new BardAPI();
  }

  async getResponse(req, res) {
    const message = req.body.message;

    this.bard.initializeChat(process.env.BARD_API_KEY);
    const context = "Hãy tưởng tượng bạn là nhân viên tư vấn cho khách hàng về bàn phím cho cửa hàng bán phím, trả lời xúc tích ngắn gọn nhưng phải lễ phép, lịch sự, tế nhị. Sau đây là câu hỏi của tôi: ";
    const response = await this.bard.getBardResponse(context + message);
    return res.status(200).json(
      {
        response: response.text
      }
    );
  }
}

export {
  ChatController,
}
