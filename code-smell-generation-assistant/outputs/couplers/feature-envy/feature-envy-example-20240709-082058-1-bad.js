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
    return this.location.address + ', ' + this.location.city + ', ' + this.location.country;
  }
}