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

interface Sender {
  send(payload: string): void;
}
//implementacion 1
class MessageAmqp implements Sender {
  public send(payload: string): void {
    amqp.publish("msg", payload);
  }
}

//implementacion 2
class MessageHttp implements Sender {
  public send(payload: string): void {
    axios.post("/sms", payload);
  }
}

class MessageSocket implements Sender {
  public send(payload: string): void {
    socket.emit("/msg", payload);
  }
}

//cliente
class Service {
  public sendMsg(messageSender: Sender) {
    const message: Message = new Message("srp");
    const payload = message.getPayload();

    messageSender.send(payload);
  }
}

const service: Service = new Service();
const messageSender: Sender = new MessageSocket();
service.sendMsg(messageSender);
