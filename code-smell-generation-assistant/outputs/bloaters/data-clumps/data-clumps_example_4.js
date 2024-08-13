function registerVehicle(ownerName, plateNumber, model, color, year, vin) {
  console.log(`Registering vehicle for ${ownerName}: ${plateNumber}, ${model}, ${color}, ${year}, ${vin}`);
}

function transferVehicle(ownerName, newOwnerName, plateNumber, model, color, year, vin) {
  console.log(`Transferring vehicle from ${ownerName} to ${newOwnerName}: ${plateNumber}, ${model}, ${color}, ${year}, ${vin}`);
}

const ownerName = 'Bob';
const newOwnerName = 'Charlie';
const plateNumber = 'ABC123';
const model = 'Toyota Camry';
const color = 'Silver';
const year = '2018';
const vin = '1234567890ABCDEFGHIJ';

registerVehicle(ownerName, plateNumber, model, color, year, vin);
transferVehicle(ownerName, newOwnerName, plateNumber, model, color, year, vin);
