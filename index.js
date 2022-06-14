let age = Number (prompt("How old are you?"));
let travelDistance = Number (prompt("How far is your destination (KM)?"));
let price = 0.21;
let normalPrice = travelDistance * price;
let under18Discount = 0.2;
let over65Discount = 0.4;
let under18Price = normalPrice - (normalPrice * under18Discount);
let over65Price = normalPrice - (normalPrice * over65Discount);
let travelPrice;
if ( age < 18){
    travelPrice = under18Price;
}else if( 18 <= age && age < 65){
    travelPrice = normalPrice;
}
else if( age >= 65){
    travelPrice = over65Price;
}
console.log("Your have to pay: " + travelPrice + "€");