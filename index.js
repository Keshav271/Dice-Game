var x=1;
document.querySelector(".btn").onclick=function(){
var randomNumber1=Math.floor(Math.random()*5)+1;
var randomNumber2=Math.floor(Math.random()*5)+1;
if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent="Draw!";
}
document.querySelector(".dice1 img").setAttribute("src","images\\dice"+randomNumber1+".png");
document.querySelector(".dice2 img").setAttribute("src","images\\dice"+randomNumber2+".png");
}
