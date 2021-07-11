//VARIABLES

const button = document.getElementById("swipeClick");

const hoverButton = document.getElementById("hoverMe");

const dblButton = document.querySelector(".dblMe");

const bgButton = document.querySelector(".bgButton");

const theBody = document.getElementsByTagName("body")[0];

const spinBtn = document.querySelector(".spinBtn");

const evaporateBtn = document.querySelector(".evaporateBtn");

//VARIABLES END


// FUNCTIONS 

function change (){

    button.innerHTML= "Do it!"

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
   

  }


  function evaportate(){

    evaporateBtn.style.backgroundColor= "rgba(0,0,0,0)";
    evaporateBtn.style.color= "rgba(0,0,0,0)";

    evaporateBtn.style.cursor= "default";
  }
 


  //EVENTLISTENER

  hoverButton.addEventListener("mouseover",makeRed)

 hoverButton.addEventListener("mouseout",makeDefault)


  dblButton.addEventListener("dblclick",makeBlue)


  bgButton.addEventListener("click",ChangeBackgroundColor)

  spinBtn.addEventListener("click", spin)

  evaporateBtn.addEventListener("click", evaportate)

