import { Shop } from "../../src/js/DonutMaker.js";

const shop = new Shop();

describe("Donut Shop should add Donuts", () => {
  it("Given 0 Clicks, count should be 1 Donuts", () => {
    shop.reset();
    shop.addDonut(0);
    expect(shop.checkDonuts()).toBe(0);
    shop.donuts = 0;
  });
  it("Given no clicks, count should add 1 Donuts", () => {
    shop.reset();
    shop.addDonut();
    expect(shop.checkDonuts()).toBe(1);
  });
  it("Given 3 Clicks, count should be 3 Donuts", () => {
    shop.reset();
    shop.addDonut(3);
    expect(shop.checkDonuts()).toBe(3);
  });
});

describe("Donut Shop Should Add Auto Clickers", () => {
  it("Should not buy Auto Clicker if not enough donuts", () => {
    shop.reset();
    shop.buyAutoClicker();
    expect(shop.autoClickers).toBe(0);
  });
  it("Should buy Auto Clicker with enough donuts", () => {
    shop.reset();
    shop.donuts = 100;
    shop.buyAutoClicker();
    expect(shop.autoClickers).toBe(1);
  });
  it("Should increase the cost of next Auto Clicker", () => {
    shop.reset();
    shop.donuts = 100;
    shop.buyAutoClicker();
    expect(shop.autoClickerCost).toBe(110);
  });
});

describe("Donut Shop Should Add Multipliers", () => {
  it("Should not buy Multiplier if not enough donuts", () => {
    shop.reset();
    shop.buyDonutMultiplier();
    expect(shop.multipliers).toBe(0);
  });
  it("Should buy Multiplier with enough donuts", () => {
    shop.reset();
    shop.donuts = 10;
    shop.buyDonutMultiplier();
    expect(shop.multipliers).toBe(1);
  });
  it("Should increase the cost of next Multiplier", () => {
    shop.reset();
    shop.donuts = 10;
    shop.buyDonutMultiplier();
    expect(shop.multiplierCost).toBe(11);
  });
  it("Should increase the value of clicks", () => {
    shop.reset();
    shop.donuts = 10;
    shop.buyDonutMultiplier();
    shop.addDonut();
    expect(shop.checkDonuts()).toBe(1.2);
  });
});
