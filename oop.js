// class carFactory{
//    constructor(name) {
//        this.name = name;
//     }

//     pabrik() {
//         console.log(this.name);
//     }

// }

// let pabrikMobil = new carFactory('Honda');
// pabrikMobil.pabrik(); 

// /*
// function Factory(car, production) {
//     function calcProduction(max) {
//         return Math.floor(Math.random() * Math.floor(max));
//       }
// }

// this.
// */



// // class Car{
// //     constructor(name, made, year) {
// //         this.name = name;
// //         this.made = made;
// //         this.year = year;
// //     }
// // }   


// function Car () {
//     var self = {
//       make: 'Honda',
//       model: 'Accord',
//       color: 'red',
//       paint: function(color){
//         self.color = color;
//       }
//     };
//     return self;
//   }
   
//   var myCar = Car();

//   console.log(myCar);
  

class Tyre {
    constructor(merk, qty) {
        this._merk = merk; // private
        this.qty = qty;
    }

    // setter
    set merk(inputMerk){
        this._merk = inputMerk;
    }

    // getter
    get merk(){
        return this._merk;
    }

    hitungBesarBan(){

    }

    hitungBesarBan(diamter){

    }
}

let a = new Tyre();

a.merk
a.qty
a.hitungBesarBan(5)


class Car {
    constructor(seat, door, tyre, guarantee, year, type) {
        this.seat = seat;
        this.door = door;
        this.tyre = tyre;
        this.guarantee = guarantee;
        this.year = year;
        this.type = type;
    }

    expireGuarantee(currentYear) {
        if (currentYear - this.guarantee <= this.year) {
            console.log("garansi masih berlaku");
        } else {
            console.log("garansi habis");
        }
    }
}

class Avanza extends Car {
    constructor(year) {
        super(7, 5, new Tyre("bridgestone", 4), 3, year, 'Avanza');
    }
}

class Agya extends Car {
    constructor(year) {
        super(5, 5, new Tyre("dunlop", 4), 1, year, 'Agya');
    }
}

class abstract CarFactoryModel{
    avanzaProduced(){

    }
    agyaProduced(){

    }
    productionResult(){

    }
}

class CarFactory implements CarFactoryModel{
    constructor() {
        this.avanzaList = [];
        this.agyaList = [];
    }

    avanzaProduced(year) {
        let totalAvanza = CarFactory.getRandomInt();
        for (let i = 0; i < totalAvanza; i++) {
            this.avanzaList.push(new Avanza(year));
        }
    }

    agyaProduced(year) {
        let totalAgya = CarFactory.getRandomInt();
        for (let i = 0; i < totalAgya; i++) {
            this.agyaList.push(new Agya(year));
        }
    }

    productionResult() {
        console.log(`avanza telah diproduksi sebanyak ${this.avanzaList.length}, yakni :`);
        for (let i = 0; i < this.avanzaList.length; i++) {
            console.log('avanza ', this.avanzaList[i]);
        }
        console.log(`avanza telah diproduksi sebanyak ${this.agyaList.length}, yakni :`);
        for (let i = 0; i < this.agyaList.length; i++) {
            console.log('agya ', this.agyaList[i]);
        }
    }

    guaranteeSimulation(year) {
        console.log(`hasil simulasi untuk avanza, yakni :`);
        for (let i = 0; i < this.avanzaList.length; i++) {
            console.log(this.avanzaList[i]);
            this.avanzaList[i].expireGuarantee(year);
        }
        console.log(`hasil simulasi untuk agya, yakni :`);
        for (let i = 0; i < this.agyaList.length; i++) {
            console.log(this.agyaList[i]);
            this.agyaList[i].expireGuarantee(year);
        }
    }

    static getRandomInt() {
        let min = 1;
        let max = 5;
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

let toyota = new CarFactory();
toyota.avanzaProduced(2012);
toyota.agyaProduced(2013);
toyota.agyaProduced(2015);
toyota.productionResult();
toyota.guaranteeSimulation(2015);




