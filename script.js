// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
}
	car.prototype.getMakeModel=function(){
		return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {

	car.call(this, make, model);
	this.topSpeed=topSpeed;
}
	SportsCar.prototype=object.create(car.prototype)
	SportsCar.prototype.constructor=SportsCar;


	SportsCar.prototype.getTopSpeed=function(){
		return this.topSpeed;
	};



// function showCarDetails() {
//     const car1 = new SportsCar("Ferrari", "Testarossa", 200);
//     const output = document.getElementById("output");

//     output.innerHTML = `
//         ${car1.getMakeModel()} <br>
//         ${car1.getTopSpeed()}`;
// }
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
