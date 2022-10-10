 let perso = document.querySelector(".perso");
let obstacles = document.querySelector(".obstacles");


function sauter(){
    //function pour faire sauter le perso 
    //alert('cool');
if(perso.classList != "animation"){
    perso.classList.add('animation');
}
setTimeout(function(){
    perso.classList.remove('animation');
},500)
};


//verifier si l obstacle touche le perso 

let verification = setInterval(function(){
    let persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    let obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left")) ;
    if(obstaclesLeft>0 && obstaclesLeft<20 && persoTop>=150){
        obstacles.style.animation = "none";
        alert("the rock hit you mate !")
    } 
    

},1)



// ln 21 a 24 = si les pixels left sont entre 0 et 20 , et que le perso est a 150 px (entre 0 et 150) , ca veut dire qu il est
// ds la zone et donc le perso est touché . 