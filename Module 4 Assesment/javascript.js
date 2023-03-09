// var x ="hello world";
// console.log(x)

// console.log((5+3)/3);
// console.log(undefined/3);
// var x = 4, y="4";
// if(x===y){
//     console.log("x and y are equal");
// }
// else{
//     console.log("x and y are not equal")
// }

// var company = new Object();
// company.name = "Facebook";
// company.owner = "Mohd Yaseen"
// company.stock = "100$"
// console.log(company);

// var company2 {
//     company2.name : "Mivrosoft",
// }
var names = new Array();
names[0] = "javed";
names[1] = "Yaseen";
names[2] = "Rameez";
names[3] = "Junaid";
names[4] = "Jalal";

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === "J" || names[i].charAt(0) === "j") {
        console.log("Goodbye "+ names[i]);
    }
    else{
        console.log("Hello " + names[i]);
    }
}