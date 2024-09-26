let car = dealership.getCar();
let carModel = car.getModel();
let carManufacturer = carModel.getManufacturer();
let manufacturerCountry = carManufacturer.getCountry();
let countryInfo = manufacturerCountry.getInfo();
let countryCurrency = countryInfo.getCurrency();
let currencySymbol = countryCurrency.getSymbol();

console.log(
  `The car's manufacturer's country uses the currency symbol: ${currencySymbol}`
);
