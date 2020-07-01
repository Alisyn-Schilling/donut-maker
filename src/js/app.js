const shop = new Shop();


const donutDisplay = document.querySelector('.click__display-donuts');
const donutButton = document.querySelector('.click__add-donut');

const autoClickerDisplay = document.querySelector('.auto-clicker__auto-clickers-purchased');
const autoClickerButton = document.querySelector('.auto-clicker__add-auto-clicker');

const multiplierDisplay = document.querySelector('.click-multiplier__multipliers-purchased');
const multiplierButton = document.querySelector('.click-multiplier__add-multiplier');

const resetButton = document.querySelector('.reset__button');

const donutUpdate = () => {
    donutDisplay.innerText = "Donuts: " + Math.round(shop.checkDonuts());
}
const activateAutoClickers = () =>{
    setInterval(()=>{
        shop.addDonut(shop.autoClickers);
        donutUpdate();
        checkAutoClickerButton();
        checkMultiplierButton();
    }
    , 1000);
}
activateAutoClickers();
const checkAutoClickerButton = () =>{
    if (shop.donuts >= shop.autoClickerCost){
        autoClickerButton.disabled = false;
    } else {
        autoClickerButton.disabled = true; 
    }
}

const checkMultiplierButton = () => {
    if (shop.donuts >= shop.multiplierCost){
        multiplierButton.disabled = false;
    } else {
        multiplierButton.disabled = true;
    }
}

donutButton.addEventListener('click', ()=> {
    shop.addDonut();
    donutUpdate();
    checkAutoClickerButton();
    checkMultiplierButton();
})

autoClickerButton.addEventListener('click', ()=>{
    shop.buyAutoClicker();
    autoClickerDisplay.innerText = "Auto Clickers: " + shop.autoClickers;
    donutUpdate();
    autoClickerButton.innerText = "Buy Auto Clicker: " + shop.autoClickerCost.toFixed(2); + 
    " Donuts"
    checkAutoClickerButton();
})

multiplierButton.addEventListener('click', ()=>{
    shop.buyDonutMultiplier();
    multiplierDisplay.innerText = "Multipliers: " + shop.multipliers;
    donutButton.innerText = "Buy " + shop.donutsPerClick.toFixed(2) + " Donuts";
    donutUpdate();
    multiplierButton.innerText = "Buy multiplier: " + shop.multiplierCost.toFixed(2) + 
    " Donuts"
    checkMultiplierButton();
})


resetButton.addEventListener('click', ()=>{
    shop.reset();
    donutUpdate();
    autoClickerDisplay.innerText = "Auto Clickers: " + shop.autoClickers;
    autoClickerButton.innerText = "Buy Auto Clicker: " + Math.round(shop.autoClickerCost) + 
    " Donuts";
    multiplierDisplay.innerText = "Multipliers: " + shop.multipliers;
    donutButton.innerText = "Buy " + Math.round(shop.donutsPerClick) + " Donut";
    multiplierButton.innerText = "Buy multiplier: " + Math.round(shop.multiplierCost) + 
    " Donuts";
    checkAutoClickerButton();
    checkMultiplierButton();
})



const companyInfo = document.querySelector(".company-info");

companyInfo.addEventListener("click", ()=>{
    event.preventDefault();
    alert("We are a baking company dedicated to the customer experience. Every Donut is made with love and you can taste it in every bite.")
})

const inspiration = document.querySelector(".inspiration");

inspiration.addEventListener("click", ()=> {
    event.preventDefault();
    window.open("https://orteil.dashnet.org/cookieclicker/", "_blank")
})


const modal = document.getElementById("modal");
const contactInfo = document.querySelector(".contact-info");
const span = document.getElementsByClassName("close")[0];


contactInfo.addEventListener("click", () => {
  modal.style.display = "block";
})

span.addEventListener("click", () => {
  modal.style.display = "none";
})

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})