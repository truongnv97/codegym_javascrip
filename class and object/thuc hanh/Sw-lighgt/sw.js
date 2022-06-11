class SwitchButton {
  status;
  lamp;
  constructor() {
    this.status = false;
  }
  connectToLamp(lamp) {
    this.lamp = lamp;
  }
  swOn() {
    this.status=true;
    if (this.lamp !==undefined) {
        this.lamp.turnOn()
    }
  }
  swOff() {
    this.status=false;
    if (this.lamp !==undefined) {
        this.lamp.turnOff()
    }
  }
}
