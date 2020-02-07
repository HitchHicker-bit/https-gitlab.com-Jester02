 function Dog(name, breed, status){
      this.name = name;
      this.breed = breed;
      this.status = status;
      this.statusChanger = function(aStatus){
        this.status = aStatus;
        console.log(name + " " + aStatus);
      }
    }

    var Doggy = new Dog("Harold","doberman","jumping");
    console.log(Doggy);

    // Doggy.statusChanger("running");
    function Showing (object){
      for (key in object){
        console.log(key,object[key]);
      }
    }
    Doggy.statusChanger("running");
    // Showing(Doggy);
    Showing(Doggy);
