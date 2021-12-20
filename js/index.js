let navigation = document.querySelector(".header");
window.addEventListener("scroll", () =>{
    if(window.scrollY>navigation.offsetTop){
        navigation.classList.add("navigation-hidden")
    }
    else{
        navigation.classList.remove("navigation-hidden")
    }
})
let title = document.querySelector(".gallery-title");
let positionChange = 100;
window.addEventListener("scroll", ()=>{
    if(window.scrollY>positionChange){
        title.classList.add("title-hidden")
    }
    else{
        title.classList.remove("title-hidden")
    }
    console.log(window.scrollY);
}) 
let overlay = document.querySelector(".overlay");
window.addEventListener("scroll", ()=>{
    if(window.scrollY>10){
        overlay.classList.add("overlay-hidden")
    }
    else{
        overlay.classList.remove("overlay-hidden")
    }
})

//changement de page
let liens = document.querySelectorAll(".header a");
let transition = document.querySelector(".transition");
console.log(liens[0].getAttribute("href"));
for(let i=0; i<liens.length; i++){
    liens[i].addEventListener("click", (event)=> {
        event.preventDefault();
        transition.style.animation = "fadeIn 4s forwards";
        window.location.href=  liens[i].getAttribute("href");
    })
}
