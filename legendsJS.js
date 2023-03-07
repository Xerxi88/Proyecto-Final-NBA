document.querySelector(".jordan").addEventListener('load',()=>{
    document.querySelector(".jordan").className=" jordan transicion";
    document.querySelector(".right").className=" right transicionRight";
    document.querySelector(".left").className=" left transicionLeft";
});

window.addEventListener("scroll", function(){
    let kidd = document.querySelector(".kidd");
    kidd.classList.toggle("transicionBodyLeft",window.scrollY>300);
})
window.addEventListener("scroll", function(){
    let petit = document.querySelector(".bonPetit");
    petit.classList.toggle("transicionBodyRight",window.scrollY>800);
})
window.addEventListener("scroll", function(){
    let west = document.querySelector(".west");
    west.classList.toggle("transicionBodyLeft",window.scrollY>1300);
})
window.addEventListener("scroll", function(){
    let jordanM = document.querySelector(".jordanM");
    jordanM.classList.toggle("transicionBodyRight",window.scrollY>1800);
})
window.addEventListener("scroll", function(){
    let kobe = document.querySelector(".kobe");
    kobe.classList.toggle("transicionBodyLeft",window.scrollY>2400);
})
window.addEventListener("scroll", function(){
    let barry = document.querySelector(".barry");
    barry.classList.toggle("transicionBodyRight",window.scrollY>2900);
})
window.addEventListener("scroll", function(){
    let allen = document.querySelector(".allen");
    allen.classList.toggle("transicionBodyLeft",window.scrollY>3400);
})
window.addEventListener("scroll", function(){
    let duncan = document.querySelector(".duncan");
    duncan.classList.toggle("transicionBodyRight",window.scrollY>3900);
})
window.addEventListener("scroll", function(){
    let abdul = document.querySelector(".abdul");
    abdul.classList.toggle("transicionBodyLeft",window.scrollY>4600);
})
window.addEventListener("scroll", function(){
    let bird = document.querySelector(".bird");
    bird.classList.toggle("transicionBodyRight",window.scrollY>5100);
})
window.addEventListener("scroll", function(){
    let shaq = document.querySelector(".shaq");
    shaq.classList.toggle("transicionBodyLeft",window.scrollY>5800);
})
window.addEventListener("scroll", function(){
    let pippen = document.querySelector(".pippen");
    pippen.classList.toggle("transicionBodyRight",window.scrollY>6500);
})
window.addEventListener("scroll", function(){
    let magic = document.querySelector(".magic");
    magic.classList.toggle("transicionBodyLeft",window.scrollY>7000);
})
window.addEventListener("scroll", function(){
    let nash = document.querySelector(".nash");
    nash.classList.toggle("transicionBodyRight",window.scrollY>7400);
})
window.addEventListener("scroll", function(){
    let garnet = document.querySelector(".garnet");
    garnet.classList.toggle("transicionBodyLeft",window.scrollY>8100);
})
window.addEventListener("scroll", function(){
    let pierce = document.querySelector(".pierce");
    pierce.classList.toggle("transicionBodyRight",window.scrollY>8600);
})


