class User {
    constructor(name) {
        this.name = name;
        this.address = new Address();
    }
    setAddress(street, city, country) {
        this.address.setStreet(street);
        this.address.setCity(city);
        this.address.setCountry(country);
    }
    getAddress() {
        return this.address;
    }
}

class Address {
    constructor() {
        this.street = "";
        this.city = "";
        this.country = "";
    }

    setStreet(street) {
        this.street = street;
    }

    setCity(city) {
        this.city = city;
    }

    setCountry(country) {
        this.country = country;
    }

    getStreet() {
        return this.street;
    }

    getCity() {
        return this.city;
    }

    getCountry() {
        this.country = country;
    }
}

let user = new User("John Doe");
user.setAddress("123 Main St", "Anytown", "USA");