interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow for arbitrary properties
}

function createCar(manufacturer: string, model: string, ...options: any[]): Car {
  const car: Car = { manufacturer, model };
  options.forEach(option => {
    const [key, value] = option.split(':');
    car[key.trim()] = value.trim();
  });
  return car;
}

const myCar = createCar('Toyota', 'Corolla', 'color: silver', 'sunroof: true');
console.log(myCar);
