/**
 * Created by OnlyMid on 2017/3/29.
 */
[typeof null,null instanceof Object];
console.log(typeof null);
console.log(null instanceof Object);

var array = [1,2,3];
console.log(typeof array);

function myFunction() {

}
console.log(typeof myFunction);

var myString = new String("i am fine");
console.log(typeof myString);   //object
console.log(myString.constructor == String);   //true
console.log(myString instanceof String);    //true
console.log(Object.prototype.toString.call(myString));    //true
console.log(Object.prototype.toString(myString));    //true
console.log(myString.toString());    //true

console.log(Object.prototype.toString.call(array));



