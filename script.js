//VARIABLES

const button = document.getElementById("swipeClick");

const hoverButton = document.getElementById("hoverMe");

const dblButton = document.querySelector(".dblMe");

const bgButton = document.querySelector(".bgButton");

const theBody = document.getElementsByTagName("body")[0];

const spinBtn = document.querySelector(".spinBtn");

const evaporateBtn = document.querySelector(".evaporateBtn");

const morphBtn = document.querySelector(".morphBtn");

const buttons = document.button;

const threedBtn = document.querySelector(".threedBtn");

let counter = 0;

const biggerCircleBtn = document.querySelector(".biggerCircleBtn");


let currentWidth = 40;
let currentHeight = 40; 

const smallerBtn = document.querySelector(".smallerBtn");
//VARIABLES END


// FUNCTIONS 

const change = () => {

    button.textContent= "Do it!"

}

const changeBack= () => {

    button.innerHTML= " Click Me!"
}


const makeRed = () => {  

    hoverButton.style.backgroundColor= "red";
  


  }
const changeHoverText = () => {

  hoverButton.innerHTML= "Good Job!"
}
const changeHoverBack= () =>{

  hoverButton.innerHTML= "Hover Me!"

}


  const makeDefault= () => {

    hoverButton.style.backgroundColor= "blueviolet"

  }

  const makeBlue= () => {
   
        dblButton.classList.toggle("dblMeDefault");
        
    
      
  }

  const ChangeBackgroundColor= () => {

    theBody.classList.toggle("bodyColorChange");

  }


  const spin= () => {

    spinBtn.style.transform = "rotate(360deg)"; 

    setTimeout(() => spinBtn.style.transform = "rotate(0deg)", 0700)
    
}

  


  const evaportate= () =>{

    evaporateBtn.style.backgroundColor= "rgba(0,0,0,0)";
    evaporateBtn.style.color= "rgba(0,0,0,0)";

    evaporateBtn.style.cursor= "default";

    setTimeout(() => evaporateBtn.style.backgroundColor = "rgba(138, 43, 226,100)", 10000)

    setTimeout(() => evaporateBtn.style.color = "rgba(255,255,255,100)", 10000)

  }
 
  const morph = ()=> {

    morphBtn.style.borderRadius= "50%";
    counter++;
    
    if(counter == 2) {

      
      morphBtn.style.width= "120px";

    }
    if(counter == 3) {

      morphBtn.style.borderRadius= "0%";
      morphBtn.style.width= "120px";
      

    }
    if(counter == 4) {

      morphBtn.style.borderRadius= "0"
      morphBtn.style.width= "80px";
      counter = 0;

    }


  }

  const threeDTextChange = () => {

    threedBtn.textContent= "Do it!"
  }

  const threeDTextChangeBack = () => {

    threedBtn.textContent= "Click Me!"
  }

  const makeSlightlyBigger = () => {

    currentWidth += 4;
    currentHeight += 4;

  biggerCircleBtn.style.width = `${currentWidth}px` 
  biggerCircleBtn.style.height = `${currentHeight}px` 
  biggerCircleBtn.textContent = "again!"

  if(currentWidth >= 102 ) {

    currentWidth = 100;
    currentHeight = 100;

    biggerCircleBtn.textContent = "Click George"
    smallerBtn.textContent = "Im George"
    smallerBtn.style.backgroundColor = "gold"
  }



  console.log(currentWidth + 2)

  }


  const makeSlightlySmaller = () => {

    currentWidth -= 4;
    currentHeight -= 4;


    biggerCircleBtn.style.width = `${currentWidth}px` 
    biggerCircleBtn.style.height = `${currentHeight}px` 
    
    if(currentWidth <= 42){

currentWidth = 42;
currentHeight = 42;
biggerCircleBtn.textContent = "Click Me!"
smallerBtn.textContent = "..."
smallerBtn.style.backgroundColor = "blueviolet"
    }

  }
  //EVENTLISTENER

button.addEventListener("mouseover", change)

button.addEventListener("mouseout", changeBack)

hoverButton.addEventListener("mouseover",makeRed)

 hoverButton.addEventListener("mouseout",makeDefault)


  dblButton.addEventListener("dblclick",makeBlue)


  bgButton.addEventListener("click",ChangeBackgroundColor)

  spinBtn.addEventListener("click", spin)

  evaporateBtn.addEventListener("click", evaportate)

  morphBtn.addEventListener("click",morph)

  threedBtn.addEventListener("mouseover",threeDTextChange)
  threedBtn.addEventListener("mouseout",threeDTextChangeBack)

  biggerCircleBtn.addEventListener("click",makeSlightlyBigger)
  smallerBtn.addEventListener("click",makeSlightlySmaller)