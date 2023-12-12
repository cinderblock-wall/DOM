

// navigation bar
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
const topMenuEl = document.querySelector("#top-menu")
  console.log(topMenuEl);
  
topMenuEl.style.height = '100%';
  
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.innerHTML +=`<a href=$(menuLinks.href}>${menuLinks.text}</a>`;
for (let i = 0; i < menuLinks.length; i++) {
    topMenuEl.innerHTML += `<a href=${menuLinks[i].href}>${menuLinks[i].text}</a>`;
}

// main element

const mainEl = document.querySelector('main')
console.log(mainEl);

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>Magic 8 Ball</h1>';
mainEl.classList.add("flex-ctr");

mainEl.classList.add("flex-ctr");


// event listener and validation
const form = document.querySelector('form');
const questionInput = document.getElementById('question');
const button = document.getElementById('button');
const inputsec = document.getElementById('inputsec');
const prompt1 = document.querySelector('h2');

prompt1.classList.add("flex-ctr");

form.classList.add("flex-ctr");
inputsec.style.background = 'var(--main-bg)';
// input question validation
function validateQuestion() {
    let questionVal = questionInput.value;
  
    if (questionVal === "") {
      alert("Please provide a question.");
      questionInput.focus();
      return false;
    }
}
// prompt1.classList.add("#flex-around"); to make ask me anything in center
button.classList.add("#button");
document.getElementById("button").addEventListener("click", windowAlert);

// function for random outputs

// switch statement didn't work
// let randomNumber = Math.floor(Math.random() * 8)
// let eightball = '';

// switch (randomNumber){
//   case '0' :
//     eightball = 'It is certain';
//     break;
//   case '1' :
//     eightball = 'It is decidedly so';
//     break;
//   case '2' :
//     eightball = 'Repy is hazy try again';
//     break
//   case '3' :
//     eightball = 'Cannot predict now';
//     break;
//   case '4' :
//     eightball = 'Do not count on it';
//     break;
//   case '5' :
//     eightball = 'My sources say no';
//     break;
//   case '6' :
//     eightball = 'Outlook not so good';
//     break;
//   case '7' :
//     eightball = 'Signs point to yes';
//     break;
//   default :
//     eightball = 'yes';
//     break;
// }

// console.log(`The magic eightball said : ${eightball}.`)

const eightball = ['It is certain', 'It is decidedly so', 'Reply is hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes', 'yes']
// console.log(eightball[Math.floor(Math.random() * 8)])

const random = () => {
const output = eightball[Math.floor(Math.random() * 8)];
console.log(output);
};
random()

function windowAlert() {
    answer = window.alert(
     // need to make a function with a switch statement 
      `${eightball[Math.floor(Math.random() * 8)]}`
    );
    myWindow.focus();
  }

  