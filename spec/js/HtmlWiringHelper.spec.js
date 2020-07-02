import { HtmlWiringHelper } from "../../src/js/HtmlWiringHelper.js";
import { Shop } from "../../src/js/DonutMaker.js";

describe("HtmlWiringHelper wires up elements to the DonutMaker object.", () => {
  it("Wire up the donut count to the DonutMaker count.", () => {
    const shop = new Shop();
    const underTest = new HtmlWiringHelper(shop);
    const testDisplay = document.createElement("span");
    underTest.donutDisplayUpdate(testDisplay);
    expect(testDisplay.innerText).toBe("Donuts: 0");
  });

  it("Update display after 1 click", () => {
    const shop = new Shop();
    const underTest = new HtmlWiringHelper(shop);
    const testDisplay = document.createElement("span");
    shop.addDonut();
    underTest.donutDisplayUpdate(testDisplay);
    expect(testDisplay.innerText).toBe("Donuts: 1");
  });

  it("Update Donut Button after 1 Multiplier", () => {
    const shop = new Shop();
    const underTest = new HtmlWiringHelper(shop);
    const testDisplay = document.createElement("span");
    shop.addDonut(10);
    shop.buyDonutMultiplier();
    underTest.donutButtonUpdate(testDisplay);
    expect(testDisplay.innerText).toBe("Buy 1.20 Donuts");
  });

  it("Update Auto Clicker Display after 1 Clicker", () => {
    const shop = new Shop();
    const underTest = new HtmlWiringHelper(shop);
    const testDisplay = document.createElement("span");
    shop.addDonut(100);
    shop.buyAutoClicker();
    underTest.clickerDisplayUpdate(testDisplay);
    expect(testDisplay.innerText).toBe("Auto Clickers: 1");
  });

  it("Update Auto Clicker Button after 1 Clicker", () => {
    const shop = new Shop();
    const underTest = new HtmlWiringHelper(shop);
    const testDisplay = document.createElement("span");
    shop.addDonut(100);
    shop.buyAutoClicker();
    underTest.clickerButtonUpdate(testDisplay);
    expect(testDisplay.innerText).toBe("Buy Auto Clicker: 110.00 Donuts");
  });

  it("Auto Clicker Button Should Be Disabled when unaffordable", () => {
    const shop = new Shop();
    const underTest = new HtmlWiringHelper(shop);
    const testDisplay = document.createElement("button");
    underTest.checkAutoClickerButton(testDisplay);
    expect(testDisplay.disabled).toBe(true);
  });

  it("Auto Clicker Button Should Be Enabled when affordable", () => {
    const shop = new Shop();
    const underTest = new HtmlWiringHelper(shop);
    const testDisplay = document.createElement("button");
    shop.addDonut(100);
    underTest.checkAutoClickerButton(testDisplay);
    expect(testDisplay.disabled).toBe(false);
  });

  it("Update Multiplier display after 1 Multiplier", () => {
    const shop = new Shop();
    const underTest = new HtmlWiringHelper(shop);
    const testDisplay = document.createElement("span");
    shop.addDonut(10);
    shop.buyDonutMultiplier();
    underTest.multiplierDisplayUpdate(testDisplay);
    expect(testDisplay.innerText).toBe("Multipliers: 1");
  });

  it("Update Multiplier Button after 1 Multiplier", () => {
    const shop = new Shop();
    const underTest = new HtmlWiringHelper(shop);
    const testDisplay = document.createElement("span");
    shop.addDonut(10);
    shop.buyDonutMultiplier();
    underTest.multiplierButtonUpdate(testDisplay);
    expect(testDisplay.innerText).toBe("Buy multiplier: 11.00 Donuts");
  });

  it("Multiplier Button Should Be Disabled when unaffordable", () => {
    const shop = new Shop();
    const underTest = new HtmlWiringHelper(shop);
    const testDisplay = document.createElement("button");
    underTest.checkMultiplierButton(testDisplay);
    expect(testDisplay.disabled).toBe(true);
  });

  it("Multiplier Button Should Be Enabled when affordable", () => {
    const shop = new Shop();
    const underTest = new HtmlWiringHelper(shop);
    const testDisplay = document.createElement("button");
    shop.addDonut(10);
    underTest.checkMultiplierButton(testDisplay);
    expect(testDisplay.disabled).toBe(false);
  });
});
