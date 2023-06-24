let all_btn = "QWERTYUIOP";
let secound_row = "ASDFGHJKL";
let third_row = "ZXCVBNM";
let guessed = [];
let ll;
let answer;
let mistake = 0;
let max = document.querySelector(".maxximum");
let quection = document.querySelector(".quec");
let dash_line = document.querySelector(".dash");
let mis = document.querySelector('.mistakes');
let circle_proceesing_bar = document.querySelector('.marks');
let precentage = document.querySelector('.percentage_marks');
let wordStatus= null;
let chances;
let close_btn_1 = document.querySelector('.close_btn');
let quection_and_answers = {

    "What is the most popular Programming Language ?":"PYTHON",
    "Who is the father of Computer ?":"CHARLS",
    "What is the first Digital Computer ?":"MARKI",
    "What is the first computer Language ?":"C",
    "Which protocol is used to send and receive email over the Internet ?":"SMTP",
    "Which computer programming language is often used for web development ?":"HTML",
    "The abbreviation for the worldwide network of computers that allows the exchange of information is ?":"INTERNET",
    "The technology that enables wireless communication between devices over short distances is known as ?":"BLUETOOTH"

};

const min = 1; 
const max1 = 8; 
const randomInteger = Math.floor(Math.random() * (max1 - min)) + min;
console.log(randomInteger);

const entries_1 = Object.entries(quection_and_answers);

if (randomInteger >= 0 && randomInteger < entries_1.length) {
    const [key, value] = entries_1[randomInteger];
    console.log(`Key: ${key}, Value: ${value}`);
    console.log(typeof(key));
    console.log(value.length);
   /*  max.innerHTML = value.length; */
    max.innerHTML = 6
    /* chances = value.length; */
    chances = 6
    console.log(chances);
    ll = value.length;
    quection.innerHTML = key;
    answer = value;
   /*  guessed = value; */
  /*   dash_printting(value.length); */
   circle_proceesing_bar.classList.add('active'); 
  } else {
    console.log('Invalid index');
}


function next(){


  mistake = 0;
  update_current_mistakes();
 

  if(dash_line.classList.contains("won_state"))
  {
    dash_line.classList.remove("won_state");

  }
  else if(dash_line.classList.contains("active"))
  {
    dash_line.classList.remove("active");
  }
  else
  {
    console.log("shehan_12");
  }

  circle_proceesing_bar.classList.add('active'); 
  const randomInteger = Math.floor(Math.random() * (max1 - min)) + min;
  if (randomInteger >= 0 && randomInteger < entries_1.length) {
    const [key, value] = entries_1[randomInteger];
    console.log(`Key: ${key}, Value: ${value}`);
    console.log(typeof(key));
    console.log(value.length);
   /*  max.innerHTML = value.length; */
    max.innerHTML = 6
    /* chances = value.length; */
    chances = 6
    console.log(chances);
    ll = value.length;
    quection.innerHTML = key;
    answer = value;
   /*  guessed = value; */
  /*   dash_printting(value.length); */
  } else {
    console.log('Invalid index');
}


}
  



let p = all_btn.split('').map(letter=>

    `<button class="btn_button" id=`+letter+` onClick="handleGuess('` + letter + `')" >`+letter+`</button>`

);

let p2 = secound_row.split('').map(letter=>

  `<button class="btn_button" id=`+letter+` onClick="handleGuess('` + letter + `')" >`+letter+`</button>`

);

let p3 = third_row.split('').map(letter=>

  `<button class="btn_button" id=`+letter+` onClick="handleGuess('` + letter + `')" >`+letter+`</button>`

);

document.querySelector('.key_bord > .first_row').innerHTML = p.join('');
document.querySelector('.key_bord > .secound_row').innerHTML = p2.join('');
document.querySelector('.key_bord > .third_row').innerHTML = p3.join('');



/* document.getElementsByClassName("confetti-button")[0].addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    let container = document.getElementsByClassName("button-wrapper")[0];
    canvas.width = 600;
    canvas.height = 600;
  
    container.appendChild(canvas);
  
    let confetti_button = confetti.create(canvas);
    confetti_button().then(() => container.removeChild(canvas));
  });
 */



/*   document.getElementsByClassName("confetti-button_1")[0].addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    let container = document.getElementsByClassName("button-wrapper_1")[0];
    canvas.width = 600;
    canvas.height = 600;
  
    container.appendChild(canvas);
  
    let confetti_button = confetti.create(canvas);
    confetti_button().then(() => container.removeChild(canvas));
  });




  for(let i = 0; i < 10; i++){

    let canvas = document.createElement("canvas");
    let container = document.getElementsByClassName("button-wrapper_1")[0];
    canvas.width = 600;
    canvas.height = 600;
  
    container.appendChild(canvas);
  
    let confetti_button = confetti.create(canvas);
    confetti_button().then(() => container.removeChild(canvas));


  }
 */
  const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
  const entries = Object.entries(obj);
  
  const index = 1; // Example index
  
  if (index >= 0 && index < entries.length) {
    const [key, value] = entries[index];
    console.log(`Key: ${key}, Value: ${value}`);
  } else {
    console.log('Invalid index');
  }
  


/* function dash_printting(dash){

  let dash_string =''

  for(let i = 0; i < dash; i++){

    dash_string+='_ ';

  }

  console.log(dash_string);

  dash_line.innerHTML = dash_string;


} */



/* function handleGuess(d){

 let p = guessed.indexOf(d);
 console.log(p);

 if(p === -1)
 {
  console.log("There is no index");
 }
 else
 {

  letter_printting(p,ll);
 }


}
 */
/* let dfdf=[];

function letter_printting(ss,lklk)
{

  let as = guessed[ss];





  dfdf.push(as);

  console.log(dfdf);
  let new_sttr = '';

  for(let i = 0; i < lklk; i++)
  {


    for(let p = 0; p < lklk; p++){

      if(dfdf[i] === guessed[p])
      {
        new_sttr = new_sttr + guessed[p];

      }
      else
      {

        new_sttr = new_sttr + "_ ";

      }
    }


  }


  console.log(new_sttr);

}
 */





/* let k = "shehan";

let s = k.indexOf("j");
console.log(s); */



function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checking_won();


  } else if (answer.indexOf(chosenLetter) === -1) {
    mistake++;
    update_current_mistakes()
    console.log(mistake);
    wherther_Lose();
    update_image();

  }
}

function update_image(){

  document.querySelector('.hang_man_images').src = './images/' + mistake + '.jpg';


}





function update_current_mistakes(){

  mis.innerHTML = mistake;

}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  dash_line.innerHTML = wordStatus;
}


function checking_won(){
  if (wordStatus === answer) {

    console.log("you are won");
    dash_line.classList.add("won_state");

    dash_line.innerHTML = "Your Answer is Correct.";

    document.querySelector('.hang_man_images').src = './images/giphy.gif';
    

    setTimeout(() => {
      // Add the "image-hidden" class to fade out and hide the image

      console.log("shehan Hansaja");
      document.querySelector('.hang_man_images').src = './images/0.jpg';
      circle_proceesing_bar.classList.remove('active');
      score();

    }, 5000);





    for(let i = 0; i < 20; i++)
    {
      let canvas = document.createElement("canvas");
      let container = document.getElementsByClassName("button-wrapper")[0];
      canvas.width = 600;
      canvas.height = 600;
    
      container.appendChild(canvas);
    
      let confetti_button = confetti.create(canvas);
      confetti_button().then(() => container.removeChild(canvas));

    }
  }
}



function wherther_Lose(){

  if(chances === mistake)
  {
    console.log("You are lose !!!!!");
    dash_line.classList.add("active");
    dash_line.innerHTML ="The Correct Answer is "+ answer;
  }


}


guessedWord()
update_current_mistakes()

let keybord = document.querySelector('.key_bord');
let pp_up = document.querySelector('.pop_up');
let body_hand = document.querySelector('.hang_man');

let nav = document.querySelector('.navigation_bar');
let btn_buttons = document.querySelector('.play_again_btn');
let exit_btn = document.querySelector('.exit_btn');
let pop_close = document.querySelector('.close_win');
let play_btn = document.querySelector('.play_btn');


/* close_btn.addEventListener('click',()=>{

  nav.classList.remove('active');
  keybord.classList.remove('active');
  body_hand.classList.remove("active");
  pp_up.classList.add('close');
  btn_buttons.classList.remove('active');


})   */

/* close_btn.addEventListener('click',pop_up_function());


function pop_up_function(){

  console.log("Shehan");
} */


/* close_btn.addEventListener('click',()=>{

  myWindow.close();




}) */
exit_btn.addEventListener('click',()=>{

  window.close();
})


close_btn_1.addEventListener('click',()=>{

  window.close(); 
 console.log("shehehehehhehhehehhee");
})

play_btn.addEventListener('click',()=>{

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let name = document.querySelector('.name_input').value;
  let email = document.querySelector('.email_input').value;
  let email_1 = document.querySelector('.email_input');
  let email_error = document.querySelector('.email_error');
  let user_nm = document.querySelector('.user_name');
  let name_error = document.querySelector('.name_error');
  console.log(name);
  let verification_value = 0;


  var result =  emailRegex.test(email);
  if (result === true){

/*     user_nm.textContent = name;
    console.log("true")
    nav.classList.remove('active');
    keybord.classList.remove('active');
    body_hand.classList.remove("active");
    pp_up.classList.add('close');
    btn_buttons.classList.remove('active'); */

    verification_value = 1;




  }
  else
  {
    console.log("False");
    console.log(email_1.placeholder);
    email_error.innerHTML = "Invalid Email";
    verification_value = 0;
  }


  if(name ==='')
  {

    verification_value = 0;
    console.log("Empty");
    name_error.innerHTML = "Empty Field";
  }
  else
  {
    verification_value *=verification_value;

    name_error.innerHTML = "";
    console.log("Does not Empty");
  }


var radioButtons = document.getElementsByName('gender');
  
for (var i = 0; i < radioButtons.length; i++) {

  console.log("shehan");
    if (radioButtons[i].checked) {
        console.log("Selected Gender: " + radioButtons[i].value);

        if(radioButtons[i].value === "male"){

          document.querySelector('.profile_image').src = './images/pic.jpeg';
          verification_value *=verification_value;

        }
        else
        {

          document.querySelector('.profile_image').src = './images/girl.jpg';
          verification_value *=verification_value;

        }
    }
}


if(verification_value === 1)
{
  user_nm.textContent = name;
  console.log("true")
  nav.classList.remove('active');
  keybord.classList.remove('active');
  body_hand.classList.remove("active");
  pp_up.classList.add('close');
  btn_buttons.classList.remove('active');

}
else
{

  console.log("Login Faild");

}

/* console.log("No gender selected."); */


})





let play_ag = document.querySelector('.play_again');

play_ag.addEventListener('click',()=>{

  guessed=[];

  next();
  guessedWord();

});




function score(){


let end_value = percentage_calculation(mistake);

let start_value = 0;
/* let end_value = 90; */
let speed = 20;


let progras = setInterval(()=>{

  start_value++;
  precentage.textContent = `${start_value}%`;
  circle_proceesing_bar.style.background = `conic-gradient(#7d2ae8 ${start_value * 3.6}deg, #d9d9d9 0deg)`;

  if(start_value == end_value)
  {
    clearInterval(progras);
  }


},speed)


}



function percentage_calculation(number_of_mistakes){


  let percentage_of = 0;

  percentage_of = ((number_of_mistakes/6)*100);
  percentage_of = parseInt(percentage_of);
  net_percentage = (100-percentage_of);
  return net_percentage;
}
