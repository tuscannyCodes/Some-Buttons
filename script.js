//VARIABLES

const button = document.getElementById("swipeClick");

const hoverButton = document.getElementById("hoverMe");

const dblButton = document.querySelector(".dblMe");

const bgButton = document.querySelector(".bgButton");

const theBody = document.getElementsByTagName("body")[0];

const spinBtn = document.querySelector(".spinBtn");

const evaporateBtn = document.querySelector(".evaporateBtn");

const morphBtn = document.querySelector(".morphBtn");

let counter = 0;

//VARIABLES END


// FUNCTIONS 

function change (){

    button.textContent= "Do it!"

}

function changeBack (){

    button.innerHTML= " Click Me!"
}


function makeRed (){  

    hoverButton.style.backgroundColor= "red";
  


  }
function changeHoverText (){

  hoverButton.innerHTML= "Good Job!"
}
function changeHoverBack (){

  hoverButton.innerHTML= "Hover Me!"

}


  function makeDefault(){

    hoverButton.style.backgroundColor= "blueviolet"

  }

  function makeBlue (){
   
        dblButton.classList.toggle("dblMeDefault");
        
    
      
  }

  function ChangeBackgroundColor (){

    theBody.classList.toggle("bodyColorChange");

    console.log("hello")
  }


  function spin(){

    spinBtn.style.transform = "rotate(360deg)"; 

    setTimeout(() => spinBtn.style.transform = "rotate(0deg)", 0700)
    
}

  


  function evaportate(){

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
