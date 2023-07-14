window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
    
})

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow", 
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate:15, 
        strech:0, 
        depth:300,
        modifier:1, 
        slideShadows: true,
    },
    loo:true,
    
});