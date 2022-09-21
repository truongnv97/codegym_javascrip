let qAndA = document.getElementById("qAndA");
let number=0;
let score = 0;
let numbers = document.getElementById("number")
let scores = document.getElementById("score")
function update(){
    number++
    numbers.innerHTML = number
    answerCheck()
}

function questionAndAnswer() {
  let i = Math.floor(Math.random() * quizList.length - 1) +1;
  console.log(i);
  let data = "";
  data += '<div id="question">' + quizList[i].question + "</div>";
  data += '<div id="answer">';
  for (let j = 0; j < quizList[i].options.length; j++) {
    data +=
      '<button class="answer-btn" onclick="answerCheck('+i+","+j+')">' + quizList[i].options[j] + "</button>";
  }
  data += ' <button class="next-btn" onclick="nextQuestion()">Next Question</button>';
  data += "</div>";
  qAndA.innerHTML = data;
  update();
}
questionAndAnswer();

function answerCheck(index,ans){
    console.log(quizList[index].answer);
    console.log(quizList[index].options[ans]);
    if(quizList[index].answer===quizList[index].options[ans]){
score+=10
scores.innerHTML = score
console.log(score);
quizList.splice(i,1);
    }
}
function nextQuestion(){
    questionAndAnswer()
}

