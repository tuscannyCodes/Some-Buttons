//VARIABLES

const button = document.getElementById("swipeClick");

const hoverButton = document.getElementById("hoverMe");

const dblButton = document.querySelector(".dblMe");

const bgButton = document.querySelector(".bgButton");

const theBody = document.getElementsByTagName("body")[0];

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

 


  //EVENTLISTENER

  hoverButton.addEventListener("mouseover",makeRed)

 hoverButton.addEventListener("mouseout",makeDefault)


  dblButton.addEventListener("dblclick",makeBlue)


  bgButton.addEventListener("click",ChangeBackgroundColor)

