let lamp = new ElectricLamp();
let mySwitch = new SwitchButton();
mySwitch.connectToLamp(lamp);
var i =1
function Switch(){
    for(i; ;){
        if(i%2==0){
            mySwitch.swOff();
            i++
            break
        } else {
            mySwitch.swOn()
            i++
            break
        }
    }
    console.log(i);
}
// function switchOff(){
//     mySwitch.swOff()
// }
// function switchOn(){
    // mySwitch.swOn()
// }