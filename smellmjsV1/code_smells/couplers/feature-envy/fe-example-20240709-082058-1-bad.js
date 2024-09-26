class Location {
  constructor(address, city, country) {
    this.address = address;
    this.city = city;
    this.country = country;
  }
}

class User {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getUserLocation() {
    return (
      this.location.address.toUpperCase() +
      ', ' +
      this.location.city.toLowerCase() +
      ', ' +
      this.location.country.toUpperCase()
    );
  }

  getLocationCountry() {
    return this.location.country.toUpperCase();
  }
}

const location = new Location('123 Main St', 'New York', 'USA');
const user = new User('John Doe', location);

console.log(user.getUserLocation());
console.log(user.getLocationCountry());
