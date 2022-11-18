const axios = {
    post: (a, b) => {},
  };
  
  const amqp = {
      publish: (a, b) => {},
    };
  
    const socket = {
        emit: (a, b) => {},
      };

  //Aplicando SRP
  //Modelado de Message
  class Message {
    constructor(private readonly payload: string) {}
  
    public getPayload(): string {
      return this.payload;
    }
  }
  

  //implementacion 1
  class MessageAmq implements Sender {
      public send(payload: string): void {
          amqp.publish("msg",payload);
      }
  }
  
  //implementacion 2
  class MessageHttp  {  
     public send(payload: string): void {
      axios.post("/sms", payload);
    }
  }


    //implementacion 2
    class MessageSocket  {  
        public send(payload: string): void {
         axios.post("/sms", payload);
       }
     }


  //cliente
  class Service {
    
    public sendMsg(type:string) {
      const message: Message = new Message("srp");
      const payload = message.getPayload();


      if(type==="http"){        
        axios.post("/sms", payload);
      }else if(type==="amqp"){
        amqp.publish("msg",payload);        
      }else if(type==="socket"){        
        socket.emit(payload);
      }
    }
  }
  
  
const service: Service = new Service();
service.sendMsg("http");
