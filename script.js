console.log("Cake Shop Loaded");

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    themeIcon.classList.add("rotate");

    setTimeout(() => {
        themeIcon.textContent = document.body.classList.contains("dark-mode")
            ? "☀️"
            : "🌙";

        themeIcon.classList.remove("rotate");
    }, 200);
});

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

document
.querySelectorAll(".add-cart")
.forEach(button=>{

button.addEventListener("click",()=>{

const item = {

name:button.dataset.name,

price:Number(button.dataset.price)

};

cart.push(item);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

document.getElementById("cartCount")
.textContent = cart.length;

alert(item.name + " added to cart!");

});

});

const overlay =
document.getElementById("overlay");

offerBtn.addEventListener("click",()=>{

    offerPopup.classList.add("show");
    overlay.classList.add("show");

});

closeOffer.addEventListener("click",()=>{

    offerPopup.classList.remove("show");
    overlay.classList.remove("show");

});

reviewBtn.addEventListener("click",()=>{

    reviewPopup.classList.add("show");
    overlay.classList.add("show");

});

closeReview.addEventListener("click",()=>{

    reviewPopup.classList.remove("show");
    overlay.classList.remove("show");

});

overlay.addEventListener("click",()=>{

    offerPopup.classList.remove("show");
    reviewPopup.classList.remove("show");

    overlay.classList.remove("show");

});

const orderBtn =
document.querySelector(".cta-button");

orderBtn.addEventListener("click",()=>{

    alert(
        "Thank you for choosing Cake Shop! 🎂"
    );

});





