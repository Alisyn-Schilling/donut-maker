import { donutUpdate } from "../../src/js/app.js";

describe("donutCount changes donut-count element when clicked", () => {
  it("Click the button once should update count", () => {
    const clickButton = document.querySelector(".click__add-donut");
    clickButton.click();
    const donutCountElement = document.querySelector(".click__display-donuts");
  });
});
