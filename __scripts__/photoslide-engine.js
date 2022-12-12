const currentTheme = window.localStorage.getItem("theme")
const backgroundVideo = document.getElementById("currentBackground")
const currentStyleSheet = document.getElementById("currentTheme");
if(currentTheme == 'true'){
    $("html").fadeOut("fast", function(){
        currentStyleSheet.href = "__style__\\style_light.css";
        backgroundVideo.innerHTML = "";
        backgroundVideo.innerHTML = '<source src="__site_assets__\\grass_animation_lightTheme_1080p.mp4" type="video/mp4">';
        backgroundVideo.load();
        $("html").fadeIn("slow");
    });
}
else{
    $("html").fadeOut("fast", function(){
        currentStyleSheet.href = "__style__\\style_dark.css";
        backgroundVideo.innerHTML = "";
        backgroundVideo.innerHTML = '<source src="__site_assets__\\grass_animation_darkTheme_1080p.mp4" type="video/mp4">';
        backgroundVideo.load();
        $("html").fadeIn("slow");
    });
}

var currentThemeButton =  document.getElementById("logoJS");

currentThemeButton.onclick = function(){

    var currentTheme = window.localStorage.getItem("theme");
    var currentStyleSheet = document.getElementById("currentTheme");
    var backgroundVideo = document.getElementById("currentBackground");
    if (currentTheme == "true"){
        window.localStorage.setItem("theme", false);
        $(".logo").css("transform","rotate(180deg)");
        $("html").fadeOut("slow", function(){
            currentStyleSheet.href = "__style__\\style_dark.css";

            backgroundVideo.innerHTML = "";
            backgroundVideo.innerHTML = '<source src="__site_assets__\\grass_animation_darkTheme_1080p.mp4" type="video/mp4">';
            backgroundVideo.load();

            $("html").fadeIn("slow");
        });
    }
    else{
        window.localStorage.setItem("theme", true);
        $(".logo").css("transform","rotate(360deg)");
        $("html").fadeOut("slow", function(){
            currentStyleSheet.href = "__style__\\style_light.css";

            backgroundVideo.innerHTML = "";
            backgroundVideo.innerHTML = '<source src="__site_assets__\\grass_animation_lightTheme_1080p.mp4" type="video/mp4">';
            backgroundVideo.load();

            $("html").fadeIn("slow");
        });
    }
}



const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]')
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active

    })
})
