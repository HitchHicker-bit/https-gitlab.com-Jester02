var Train = {
	name: "Revington",
	speed: 350,
	passengers: 150,
	ride: function(){
		console.log("Train " + this.name + " transporting "+ this.passengers + " passengers" + " with speed " + this.speed + " km/h");
	},
	standing: function( stop){
		this.speed = stop;
		console.log("Train " + this.name + " was stopped" + " current speed " + this.speed + " km/h");
	},
	sitting: function( NewNumber) {
		this.passengers += NewNumber;
			console.log ("Train take passengers now their numbers is "+ this.passengers);
	},
}
	// Train.ride();
	//Train.standing(0);
	// Train.sitting(500);
    
