const smallPBtn = document.querySelector(".pBtn.small");
const medPBtn = document.querySelector(".pBtn.med");
const largePBtn = document.querySelector(".pBtn.large");

const smallPBtnBuy = document.querySelector(".pBtn.small.buy");
const medPBtnBuy = document.querySelector(".pBtn.med.buy");
const largePBtnBuy = document.querySelector(".pBtn.large.buy");

const smallMBtn = document.querySelector(".mBtn.small");
const medMBtn = document.querySelector(".mBtn.med");
const largeMBtn = document.querySelector(".mBtn.large");

const smallPizzaQty = document.querySelector(".smallPizzaQty");
const medPizzaQty = document.querySelector(".medPizzaQty");
const largePizzaQty = document.querySelector(".largePizzaQty");

const smallPizzaTotal = document.querySelector(".smallPizzaTotal");
const medPizzaTotal = document.querySelector(".medPizzaTotal");
const largePizzaTotal = document.querySelector(".largePizzaTotal");
const cartTotal = document.querySelector(".cartTotal");

const checkOut = document.querySelector(".checkOut");

const payOut = document.querySelector(".payOut");
const message = document.querySelector(".message");
const payAmt = document.querySelector(".payAmt");
const payBtn = document.querySelector(".payBtn");

var smallQty = 0;
var medQty = 0;
var largeQty = 0;
var totalCart = 0;

function BtnClick() {
    if (event.target.className == "pBtn small" || event.target.className == "pBtn small buy") {
        smallQty++;
        smallPizzaQty.innerHTML = smallQty;
    } else if (event.target.className == "pBtn med" || event.target.className == "pBtn med buy") {
        medQty++;
        medPizzaQty.innerHTML = medQty;
    } else if (event.target.className == "pBtn large" || event.target.className == "pBtn large buy") {
        largeQty++;
        largePizzaQty.innerHTML = largeQty;
    }

    if (event.target.className === "mBtn small") {
        smallQty--;
        if (smallQty < 0) {
            smallQty = 0;
        }
        smallPizzaQty.innerHTML = smallQty;
    } else if (event.target.className === "mBtn med") {
        medQty--;
        if (medQty < 0) {
            medQty = 0;
        }
        medPizzaQty.innerHTML = medQty;
    } else if (event.target.className === "mBtn large") {
        largeQty--;
        if (largeQty < 0) {
            largeQty = 0;
        }
        largePizzaQty.innerHTML = largeQty;
    }

    smallPizzaTotal.innerHTML = (smallQty * 39).toFixed(2);
    medPizzaTotal.innerHTML = (medQty * 79).toFixed(2);
    largePizzaTotal.innerHTML = (largeQty * 99).toFixed(2);
    totalCart = smallQty * 39.00 + medQty * 79.00 + largeQty * 99.00;
    cartTotal.innerHTML = totalCart.toFixed(2);
}

function checkOutClick(){
    checkOut.classList.add('hidden');
    payOut.classList.remove('hidden');
}

function payment(){
    message.classList.toggle('hidden');
    var paymentAmt = Number(payAmt.value);
 if (paymentAmt == totalCart){
    message.innerHTML = "Enjoy your Pizza!";
 } else if (paymentAmt > totalCart) {
    var change = paymentAmt - totalCart;
    message.innerHTML = "Enjoy your Pizza, here is your change R" + change.toFixed(2);
 } else {
    message.innerHTML = "Sorry, that is not enough money!";
 }
}

smallPBtn.addEventListener('click', BtnClick);
smallMBtn.addEventListener('click', BtnClick);
smallPBtnBuy.addEventListener('click',BtnClick);

medPBtn.addEventListener('click', BtnClick);
medMBtn.addEventListener('click', BtnClick);
medPBtnBuy.addEventListener('click',BtnClick);

largePBtn.addEventListener('click', BtnClick);
largeMBtn.addEventListener('click', BtnClick);
largePBtnBuy.addEventListener('click',BtnClick);

checkOut.addEventListener('click', checkOutClick)

payBtn.addEventListener('click',payment)