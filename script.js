// 1️⃣ Car Constructor Function
function Car(make, model) {
    this.make = make;   
    this.model = model; 
}

// Car Prototype Method
Car.prototype.getMakeModel = function() {
    return this.make + " " + this.model;
};

// 2️⃣ SportsCar Constructor Function
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); 
    this.topSpeed = topSpeed;    
}

// 3️⃣ Inherit Car Prototype
SportsCar.prototype = Object.create(Car.prototype);

// Constructor को सही से सेट करें
SportsCar.prototype.constructor = SportsCar;

// SportsCar Prototype Method
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};


function showCarDetails() {
    let car1 = new SportsCar("Ferrari", "Testarossa", 200);
    let output = document.getElementById("output");

    // Show Car details in HTML
    output.innerHTML = `
        <strong>Make & Model:</strong> ${car1.getMakeModel()} <br>
        <strong>Top Speed:</strong> ${car1.getTopSpeed()} mph`;
}
