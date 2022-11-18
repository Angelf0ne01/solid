interface SpeedControl{
    startEngine()
    acelerate();
    brake();
}

interface Light{
    lightOn();
    signalLeft();
    signalRight();
}

interface Radio{
    stopRadio();
    playRadio();
}

class CarOne implements SpeedControl,Light{
    lightOn() {
        throw new Error("Method not implemented.");
    }
    signalLeft() {
        throw new Error("Method not implemented.");
    }
    signalRight() {
        throw new Error("Method not implemented.");
    }
    startEngine() {
        throw new Error("Method not implemented.");
    }
    acelerate() {
        throw new Error("Method not implemented.");
    }
    brake() {
        throw new Error("Method not implemented.");
    }

}