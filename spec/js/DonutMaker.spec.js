import { Shop } from "../../src/js/DonutMaker.js";

describe("Can Create Donut Shop", () => {
  it("We can create new DonutMaker Object", () => {
    let shop = new Shop();
    expect(shop instanceof Shop).toBeTruthy();
  });

  describe("Donut Shop should add Donuts", () => {
    it("Given 0 Clicks, count should be 0 Donuts", () => {
      let shop = new Shop();
      shop.addDonut(0);
      expect(shop.checkDonuts()).toBe(0);
      shop.donuts = 0;
    });

    it("Given no clicks, count should add 1 Donuts", () => {
      let shop = new Shop();
      shop.addDonut();
      expect(shop.checkDonuts()).toBe(1);
    });

    it("Given 3 Clicks, count should be 3 Donuts", () => {
      let shop = new Shop();
      shop.addDonut(3);
      expect(shop.checkDonuts()).toBe(3);
    });
  });

  describe("Donut Shop Should Add Auto Clickers", () => {
    it("Should not buy Auto Clicker if not enough donuts", () => {
      let shop = new Shop();
      shop.buyAutoClicker();
      expect(shop.autoClickers).toBe(0);
    });

    it("Should buy Auto Clicker with enough donuts", () => {
      let shop = new Shop();
      shop.donuts = 100;
      shop.buyAutoClicker();
      expect(shop.autoClickers).toBe(1);
    });

    it("Should increase the cost of next Auto Clicker", () => {
      let shop = new Shop();
      shop.donuts = 100;
      shop.buyAutoClicker();
      expect(shop.autoClickerCost).toBe(110);
    });
  });

  describe("Donut Shop Should Add Multipliers", () => {
    it("Should not buy Multiplier if not enough donuts", () => {
      let shop = new Shop();
      shop.buyDonutMultiplier();
      expect(shop.multipliers).toBe(0);
    });

    it("Should buy Multiplier with enough donuts", () => {
      let shop = new Shop();
      shop.donuts = 10;
      shop.buyDonutMultiplier();
      expect(shop.multipliers).toBe(1);
    });

    it("Should increase the cost of next Multiplier", () => {
      let shop = new Shop();
      shop.donuts = 10;
      shop.buyDonutMultiplier();
      expect(shop.multiplierCost).toBe(11);
    });

    it("Should increase the value of clicks", () => {
      let shop = new Shop();
      shop.donuts = 10;
      shop.buyDonutMultiplier();
      shop.addDonut();
      expect(shop.checkDonuts()).toBe(1.2);
    });
  });
});
