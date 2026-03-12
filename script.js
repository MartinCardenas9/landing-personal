/* estrellas */

const starsContainer = document.querySelector(".stars");

for(let i=0;i<80;i++){

const star = document.createElement("div");

star.classList.add("star");

star.style.left = Math.random()*100+"%";
star.style.top = Math.random()*100+"%";

star.style.animationDuration = (10+Math.random()*20)+"s";

starsContainer.appendChild(star);

}

/* animación scroll */

const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{

elements.forEach(el=>{

const position = el.getBoundingClientRect().top;

if(position < window.innerHeight - 100){
el.classList.add("visible");
}

});

});

/* formulario */

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Mensaje enviado correctamente");

});