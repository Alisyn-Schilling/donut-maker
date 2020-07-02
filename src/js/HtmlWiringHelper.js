export { HtmlWiringHelper };

class HtmlWiringHelper {
  constructor(shop) {
    this.shop = shop;
  }

  donutDisplayUpdate(element) {
    element.innerText =
      "Donuts: " + Math.round(this.shop.checkDonuts()).toLocaleString("en");
  }
  donutButtonUpdate(element) {
    element.innerText =
      "Buy " + this.shop.donutsPerClick.toFixed(2) + " Donuts";
  }
  clickerDisplayUpdate(element) {
    element.innerText = "Auto Clickers: " + this.shop.autoClickers;
  }
  clickerButtonUpdate(element) {
    element.innerText =
      "Buy Auto Clicker: " + this.shop.autoClickerCost.toFixed(2) + " Donuts";
  }
  multiplierDisplayUpdate(element) {
    element.innerText = "Multipliers: " + this.shop.multipliers;
  }
  multiplierButtonUpdate(element) {
    element.innerText =
      "Buy multiplier: " + this.shop.multiplierCost.toFixed(2) + " Donuts";
  }
  checkMultiplierButton(element) {
    if (this.shop.donuts >= this.shop.multiplierCost) {
      element.disabled = false;
    } else {
      element.disabled = true;
    }
  }
  checkAutoClickerButton(element) {
    if (this.shop.donuts >= this.shop.autoClickerCost) {
      element.disabled = false;
    } else {
      element.disabled = true;
    }
  }
  companyInfoAlert(element) {
    element.addEventListener("click", () => {
      event.preventDefault();
      alert(
        "We are a baking company dedicated to the customer experience. Every Donut is made with love and you can taste it in every bite."
      );
    });
  }
  inspirationLink(element) {
    element.addEventListener("click", () => {
      event.preventDefault();
      window.open("https://orteil.dashnet.org/cookieclicker/", "_blank");
    });
  }
  contactInfo(modal, button, span) {
    button.addEventListener("click", () => {
      modal.style.display = "block";
    });

    span.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }
}
