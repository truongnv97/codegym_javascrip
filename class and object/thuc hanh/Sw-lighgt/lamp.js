class ElectricLamp {
  status;
  constructor() {
    this.status = false;
  }
  turnOff() {
    this.status = false;
    alert("Đèn tắt!");
}
turnOn() {
    this.status = true;
    alert("Đèn bật!");
  }
};
