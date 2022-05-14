//-------------class-------------

// class myClass1 {
//     constructor() {
//         this.color = "Red";
//     }
// }

// var obj1 = new myClass1();
// var obj2 = new myClass1();
// console.log(obj1);
// console.log(obj2);

// class myClass {
//     constructor(mycolor) {
//         this.color = mycolor;
//     }
// }

// var obj1 = new myClass("Red");
// var obj2 = new myClass("Green");
// console.log(obj1);
// console.log(obj2);


// class myClass3 {
//     constructor(mycolor, myflower) {
//         this.color = mycolor;
//         this.flower = myflower;
//     }
//     myExtraArea() {
//         console.log("My extra function");
//         console.log(this.color);
//     }
// }

// var obj1 = new myClass3("Red", "Rose");
// var obj2 = new myClass3("Green", "Hasnahena");
// console.log(obj1);
// console.log(obj2);

// obj1.myExtraArea();





//-------------class inheritance-------------


class myClass3 {
    constructor(mycolor, myflower) {
        this.color = mycolor;
        this.flower = myflower;
    }
    myExtraArea() {

        console.log(this.color);
    }
}

class myClass4 extends myClass3 {
    constructor(mycity, color, flower) {
        super(color, flower);
        this.City = mycity;
    }

}
let obj1 = new myClass4("Green", "Rose", "Rangpur");
console.log(obj1);