interface Vehicle{
    startEngine()
    acelerate();
    brake();
    lightOn();
    signalLeft();
    signalRight();
    stopRadio();
    blockDoor();
}

class Car implements Vehicle{} //todo bien
class Moto implements Vehicle{} //todo bien