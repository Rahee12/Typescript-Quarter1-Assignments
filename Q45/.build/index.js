"use strict";
function createCar(manufacturer, model, ...options) {
  const car = { manufacturer, model };
  options.forEach((option) => {
    const [key, value] = option.split(":");
    car[key.trim()] = value.trim();
  });
  return car;
}
const myCar = createCar("Toyota", "Corolla", "color: silver", "sunroof: true");
console.log(myCar);
//# sourceMappingURL=index.js.map
