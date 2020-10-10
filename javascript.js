function calqulator(price2,price3){
    var price = price2;
    var tax = price3;
    var result = price / 100 * tax + price;
    return result;
}
document.querySelector(".demo").innerHTML = "Bkash payment = " + calqulator(1000,1.75);
document.querySelector(".demo1").innerHTML = "sell comition = " + calqulator(2000,5);

function toCelcius(f){
    var fahrenheit = (9/5)*(f-32);
    return fahrenheit;
}
document.querySelector(".demo3").innerHTML = "Fahrenheit = "+toCelcius(66);