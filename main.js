const body = document.body; //"importation" de l'élément body
setInterval(snowFall,0); //initialisation de l'interval
function snowFall() { //initialisation de la fonction de la neige qui tombe
  const snowDrop = document.createElement("i"); //"importation" de l'élément i (flocon de neige)
  let sw = Math.random() + .7; //initialisation de la variable sp (Speed Weight)
  snowDrop.classList.add("fas"); //initialisation de la variable fas
  snowDrop.classList.add("fa-snowflake");
  snowDrop.style.fontSize = sw * 7 + "px";
  sw = (1/sw);
  snowDrop.style.animationDuration = sw * 5 + "s";
  snowDrop.style.opacity = sw + 0.3;
  snowDrop.style.left = Math.random() * window.innerWidth + "px";
  body.appendChild(snowDrop)
  setTimeout(() => {
    snowDrop.remove();
  }, 6666);
}
