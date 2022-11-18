const axios = {
    post: (a, b) => {},
  };
  
  const amqp = {
      publish: (a, b) => {},
    };
  
  //Aplicando SRP
  //Modelado de Message
  class Message {
    constructor(private readonly payload: string) {}
  
    public getPayload(): string {
      return this.payload;
    }
  }
  

  //cliente
  class Service {
    public sendMsg() {
      const message: Message = new Message("srp");
      const payload = message.getPayload();
      axios.post("/sms", payload);      
    }
  }
  