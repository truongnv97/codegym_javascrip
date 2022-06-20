let sc = document.getElementById("sc");
let mn = document.getElementById("mn");
let hr = document.getElementById("hr");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours();
  let mm = day.getMinutes();
  let ss = day.getSeconds();

  hr.style.transform = ` rotateZ(${hh * 30 + mm / 2}deg)`;
  mn.style.transform = ` rotateZ(${mm * 6}deg)`;
  sc.style.transform = ` rotateZ(${ss * 6}deg)`;

  let hour = (document.getElementById("hours"));
  let minute = (document.getElementById("minutes"));
  let second = (document.getElementById("seconds"));
  let ampm = document.getElementById("ampm");
  hh= (hh<10)? "0" + hh : hh
  mm= (mm<10)? "0" + mm : mm
  ss= (ss<10)? "0" + ss : ss
  
  if(hh<12){
    ampm.innerHTML="AM"
  } else{
    ampm.innerHTML = "PM"
  }
  hour.innerHTML = hh;
  minute.innerHTML = mm;
  second.innerHTML = ss;
}, 1000);

// digital clock
