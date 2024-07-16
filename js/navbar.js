const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");
const navBar = document.querySelector(".nav-lists");


showBtn.addEventListener("click", function(){
    showBtn.classList.add("dissapear");
    hideBtn.classList.add("appear");
    navBar.classList.add("active");
})

hideBtn.addEventListener("click", function(){
    showBtn.classList.remove("dissapear");
    hideBtn.classList.remove("appear");
    navBar.classList.remove("active");
})