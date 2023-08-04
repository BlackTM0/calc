var rand1, rand2, correctAnswer;
let output1 = document.querySelector('#output1'); 
let output2 = document.querySelector('#output2');
let randomAct = document.querySelector('#act'); 
let bill =0 ; 
let billTemp = document.querySelector('#bills'); 
billTemp.textContent = bill; 
let countGame = 0; 
let lvlTemp = document.querySelector('#lvlNum');



document.querySelector('#btn').addEventListener('click', () => { 
  document.body.style.background =''; 
   countGame +=1; 
   let stray =document.querySelector('#gameC'); 
stray.textContent = countGame; 

if (bill > 20) {
  rand1 = Math.round(Math.random() * (50-11+1)+11); 
  rand2 = Math.round(Math.random() * (50-11+1)+11);
  lvlTemp.textContent='Уровень 2'; 

  if (bill > 100) {
    rand1 = Math.round(Math.random() *(100-40+1)+40); 
    rand2 = Math.round(Math.random() * (100-40+1)+40);
    lvlTemp.textContent='Уровень 3'; }
  
  
  
} else {
  rand1 = Math.round(Math.random() * 10); 
  rand2 = Math.round(Math.random() * 10);
}
  if (rand1 < rand2){ 
    rand2 = rand1;  
  }
  if (rand1 % rand2 !== 0) { 
    rand1 -= rand1 % rand2; 
  }; 
  let act = ['+', '-', '/', 'X']; 
  let actTemp = Math.floor(Math.random() * act.length);
  randomAct.value = act[actTemp];  
  output1.value = rand1; 
  output2.value = rand2; 
  userTemp.value =''; 
});




let userTemp = document.querySelector('#answer');  
document.querySelector('#check').addEventListener('click', () => { 

  let userAnswer = parseInt(userTemp.value); 
  if (randomAct.value ==='+') { 
    correctAnswer = rand1 + rand2; 
  } else if (randomAct.value ==='-') { 
    correctAnswer = rand1 - rand2; 
  } else if (randomAct.value ==='X') { 
    correctAnswer = rand1 * rand2; 
  } else if (randomAct.value ==='/') { 
    if(rand2 !=0 && rand1 % rand2 ===0) 
    correctAnswer = rand1 / rand2; 
  } 



  if (userAnswer === correctAnswer) { 
    document.body.style.background ='green'; 
     bill +=10;
     billTemp.textContent = bill; 
     
    
  } else { 
    document.body.style.background ='red';
    bill -=10; 
    billTemp.textContent = bill; 
     
  }

});
 
