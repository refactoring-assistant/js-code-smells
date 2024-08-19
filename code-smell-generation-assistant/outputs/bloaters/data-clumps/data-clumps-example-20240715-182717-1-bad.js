function bookFlight (firstName, lastName, address, city, state, zipCode, destination, departureDate, returnDate) {
   console.log(`Booking flight for ${firstName} ${lastName} to ${destination} departing on ${departureDate} and returning on ${returnDate}.`);
}

function cancelFlight (firstName, lastName, address, city, state, zipCode, destination, departureDate, returnDate) {
   console.log(`Cancelling flight for ${firstName} ${lastName} to ${destination} departing on ${departureDate} and returning on ${returnDate}.`);
}

const passengerFirstName = 'John';
const passengerLastName = 'Doe';
const passengerAddress = '123 Main St';
const passengerCity = 'Anytown';
const passengerState = 'Anyplace';
const passengerZipCode = '12345';
const flightDestination = 'Los Angeles';
const flightDepartureDate = '2022-04-01';
const flightReturnDate = '2022-04-07';

bookFlight(passengerFirstName, passengerLastName, passengerAddress, passengerCity, passengerState, passengerZipCode, flightDestination, flightDepartureDate, flightReturnDate);
cancelFlight(passengerFirstName, passengerLastName, passengerAddress, passengerCity, passengerState, passengerZipCode, flightDestination, flightDepartureDate, flightReturnDate);