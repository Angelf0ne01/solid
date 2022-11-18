const axios = {
    post: (a, b) => {},
  };
  
  //violacion del SRP
  //Modelado de Message
  class Message {
    constructor(private readonly payload: string) {}
  
    public send(): void {
      axios.post("/sms", this.payload);
    }
  }
  
  //cliente
  class Service {   
    public sendMsg() {
      const message: Message = new Message("srp");
      message.send();
    }
  }
  