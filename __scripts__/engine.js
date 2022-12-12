if (typeof(Storage)!== undefined){
    
    var currentStyleSheet = document.getElementById("currentTheme");
    var backgroundVideo = document.getElementById("currentBackground");

    if(currentStyleSheet.href.contains == "light" || window.localStorage.getItem("theme") == "true"){
        window.localStorage.setItem("theme", true);
        $(".logo").css("transform","rotate(360deg)");
        $("html").fadeOut("fast", function(){
            currentStyleSheet.href = "__style__\\style_light.css";
            backgroundVideo.innerHTML = "";
            backgroundVideo.innerHTML = '<source src="__site_assets__\\grass_animation_lightTheme_1080p.mp4" type="video/mp4">';
            backgroundVideo.load();
            $("html").fadeIn("slow");
        });
    }
    else{
        window.localStorage.setItem("theme", false);
        $(".logo").css("transform","rotate(180deg)");
        $("html").fadeOut("fast", function(){
            currentStyleSheet.href = "__style__\\style_dark.css";
            backgroundVideo.innerHTML = "";
            backgroundVideo.innerHTML = '<source src="__site_assets__\\grass_animation_darkTheme_1080p.mp4" type="video/mp4">';
            backgroundVideo.load();
            $("html").fadeIn("slow");
        });
    }
}
else{
    alert("Your browser does not support local storage. The current theme will not be saved.")
}

var currentThemeButton =  document.getElementById("logoJS");

currentThemeButton.onclick = function(){

    var currentTheme = window.localStorage.getItem("theme");
    var currentStyleSheet = document.getElementById("currentTheme");
    var backgroundVideo = document.getElementById("currentBackground");
    console.log(currentBackground.src);
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


