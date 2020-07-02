export { Shop };

class Shop {
  constructor() {
    this.donuts = 0;
    this.donutsPerClick = 1;
    this.autoClickers = 0;
    this.autoClickerCost = 100;
    this.multipliers = 0;
    this.multiplierCost = 10;
  }
  addDonut(clicks = 1) {
    this.donuts += this.donutsPerClick * clicks;
  }
  checkDonuts() {
    return this.donuts;
  }
  buyAutoClicker() {
    if (this.donuts >= this.autoClickerCost) {
      this.autoClickers += 1;
      this.donuts -= this.autoClickerCost;
      this.autoClickerCost += this.autoClickerCost * 0.1;
    }
  }

  buyDonutMultiplier() {
    if (this.donuts >= this.multiplierCost) {
      this.multipliers += 1;
      this.donuts -= this.multiplierCost;
      this.multiplierCost += this.multiplierCost * 0.1;
      this.donutsPerClick = Math.pow(1.2, this.multipliers);
    }
  }
  reset() {
    this.donuts = 0;
    this.donutsPerClick = 1;
    this.autoClickers = 0;
    this.autoClickerCost = 100;
    this.multipliers = 0;
    this.multiplierCost = 10;
  }
}
