import { Shop } from "./DonutMaker.js";
import { HtmlWiringHelper } from "./HtmlWiringHelper.js";
const shop = new Shop();
const wiring = new HtmlWiringHelper(shop);
const donutDisplay = document.querySelector(".click__display-donuts");
const donutButton = document.querySelector(".click__add-donut");

const autoClickerDisplay = document.querySelector(
  ".auto-clicker__auto-clickers-purchased"
);
const autoClickerButton = document.querySelector(
  ".auto-clicker__add-auto-clicker"
);

const multiplierDisplay = document.querySelector(
  ".click-multiplier__multipliers-purchased"
);
const multiplierButton = document.querySelector(
  ".click-multiplier__add-multiplier"
);

const resetButton = document.querySelector(".reset__button");

const activateAutoClickers = () => {
  setInterval(() => {
    shop.addDonut(shop.autoClickers);
    wiring.donutDisplayUpdate(donutDisplay);
    wiring.checkAutoClickerButton(autoClickerButton);
    wiring.checkMultiplierButton(multiplierButton);
  }, 1000);
};

activateAutoClickers();
wiring.checkAutoClickerButton(autoClickerButton);
wiring.checkMultiplierButton(multiplierButton);

donutButton.addEventListener("click", () => {
  shop.addDonut();
  wiring.donutDisplayUpdate(donutDisplay);
  wiring.checkAutoClickerButton(autoClickerButton);
  wiring.checkMultiplierButton(multiplierButton);
});

autoClickerButton.addEventListener("click", () => {
  shop.buyAutoClicker();
  wiring.clickerDisplayUpdate(autoClickerDisplay);
  wiring.donutDisplayUpdate(donutDisplay);
  wiring.clickerButtonUpdate(autoClickerButton);
  wiring.checkAutoClickerButton(autoClickerButton);
  wiring.checkMultiplierButton(multiplierButton);
});

multiplierButton.addEventListener("click", () => {
  shop.buyDonutMultiplier();
  wiring.multiplierDisplayUpdate(multiplierDisplay);
  wiring.donutButtonUpdate(donutButton);
  wiring.donutDisplayUpdate(donutDisplay);
  wiring.multiplierButtonUpdate(multiplierButton);
  wiring.checkAutoClickerButton(autoClickerButton);
  wiring.checkMultiplierButton(multiplierButton);
});

resetButton.addEventListener("click", () => {
  shop.reset();
  wiring.donutDisplayUpdate(donutDisplay);
  wiring.donutButtonUpdate(donutButton);
  wiring.clickerDisplayUpdate(autoClickerDisplay);
  wiring.clickerButtonUpdate(autoClickerButton);
  wiring.multiplierDisplayUpdate(multiplierDisplay);
  wiring.multiplierButtonUpdate(multiplierButton);
  wiring.checkAutoClickerButton(autoClickerButton);
  wiring.checkMultiplierButton(multiplierButton);
});

const companyInfo = document.querySelector(".company-info");

wiring.companyInfoAlert(companyInfo);

const inspiration = document.querySelector(".inspiration");

wiring.inspirationLink(inspiration);

const modal = document.getElementById("modal");
const contactInfo = document.querySelector(".contact-info");
const span = document.getElementsByClassName("close")[0];

wiring.contactInfo(modal, contactInfo, span);
