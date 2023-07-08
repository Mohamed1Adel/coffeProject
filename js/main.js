let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active")

    searchForm.classList.remove("active")
    cartItem.classList.remove("active")

});




let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active")
    navbar.classList.remove("active")
    cartItem.classList.remove("active")
});



let cartItem = document.querySelector(".cart-items-container");
let cartBtn = document.querySelector("#cart-btn");
cartBtn.addEventListener("click", function () {
    cartItem.classList.toggle("active")
    navbar.classList.remove("active")
    searchForm.classList.remove("active")

});


window.onscroll = () => {
    navbar.classList.remove("active")
    searchForm.classList.remove("active")
    searchForm.classList.remove("active")

}
