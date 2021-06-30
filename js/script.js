function reponsiveFunc(){
    var navUl = document.querySelector(".container nav ul");
    var screenWidth = window.innerWidth;

    if(screenWidth < 767){
        alert("done");
        navUl.style.backgroundColor = "red";
    }
}
