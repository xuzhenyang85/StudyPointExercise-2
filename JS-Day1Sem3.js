//---------------------- opg 1 -------------------
console.log("------------ opg 1 -------------");
function add(n1, n2){ //function declarations
    return n1 +n2;
 }

var sub = function(n1,n2){ //function expressions
    return n1 - n2
  } 
  
var cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  };
  
//---------------------- opg 2 -------------------
console.log("------------ opg 2 -------------");
console.log("1. "+ add(1,2) )  // this will print 3

console.log(add ) // it will print [Function: add], name of the function 

  try{
    console.log("3. " +  add(1,2,3) ) ; // it will print 3, 3th parameter is ignored, cuz the function add dont have 3th parameter
  }
  catch(e){
    if(typeof n1 !== "number" && typeof callback !== "function"){
    console.log("n1 is undefined, or is not a number. callback is undefined or is not a function");
    }
  }

console.log("4. "+ add(1) );	  //it will print NaN, the add function trying to use the number fails 

console.log("5. " +  cb(3,3,add) ); //Result from the two numbers: 3+3=6

console.log("6. "+ cb(4,3,sub) ); //Result from the two numbers: 4+3=1

try{
  console.log("7. "+cb(3,3,add()));   //cuz add methods is been called but none parameters.
}
catch(e){
  if(typeof n1 !== "number" && typeof callback !== "function"){
  console.log("7. n1 is undefined, or is not a number. callback is undefined or is not a function");
  }
}

try{
  console.log("8. "+cb(3,"hh",add));// What will it print
  //Result from the two numbers: 3+hh=3hh
  //number 3 is changed to a String 3
}
catch(e){
  if(typeof n1 !== "number" && typeof callback !== "function"){
  console.log("8. n1 is undefined, or is not a number, and callback is undefined or is not a function");
  }
}

//---------------------- opg 3 -------------------
console.log("------------ opg 3 -------------");
var mul = function(n1,n2){
    return n1 * n2;
}
console.log("4) " + cb(3,3,mul));
console.log("4) " + cb(4,3,mul));

//---------------------- opg 4 -------------------
console.log("------------ opg 4 -------------");

//---------------------- opg 5 -------------------
console.log("------------ opg 5 -------------");
var div = function(n1,n2){
  return n1 / n2;
}
var divied = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"/"+n2+"="+callback(n1,n2);
};
console.log("5) " + divied(10,5,div));

//---------------------- Callback with map and filter and foreach -------------------
console.log("-------------------------");

var names = ["Lars","Jan","Peter","Bo","Frederik"];

function arrFilter (arr, callback){
    var resultArray = [];
    for( var i = 0; i < arr.length; i++){
        var element = arr[i];
        if(callback(element)){
            resultArray.push(element);
        }
    }
    return resultArray;
}

var result = arrFilter(names, function(element){ return element.length <=3});
console.log("1) "+result);

console.log("-------------------------");
var mapArray = names.map(function(element){ return element.toUpperCase();});
console.log("2) "+mapArray);

console.log("-------------------------");
var names2 =["Lars","Peter","Jan","Ian"];

var mapArr =names2.map(function(e){ 
    var start = "<li>";
    var end = "</li>"
    return start.concat(e).concat(end);
});
var mapAryJoin = mapArr.join("");

var start2 = "<ul>";
var end2 = "</ul>";

var newArry2 = start2.concat(mapAryJoin).concat(end2);

console.log(newArry2);

console.log("-------------------------");
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];


var yearFilter =function(obj){ //yearFilter
    var result= obj.year > 1999;
    return result;
}
console.log("Cars newer than 1999");
var yearResult = cars.filter(yearFilter);
console.log(yearResult);

var makeFilter = function(obj){ //makeFilter
    var result = obj.make == "Volvo";
    return result;
}
console.log("Al  Volvo’s");
var makeResult = cars.filter(makeFilter);
console.log(makeResult);

var priceFilter = function (obj){ //priceFilter
    var result = obj.price < 5000;
    return result;
}
console.log("All cars with a price below 5000");
var priceResult = cars.filter(priceFilter);
console.log(priceResult);

var newyearFilter = function(obj, arg){
    var result = [];
    for(var i = 0; i< obj.length; i++){
        if(obj[i].year > arg){
            result.push(obj[i]);
        }
    }
    return result;
}

console.log("new year filter with ekstra argument");
console.log(newyearFilter(cars,1999));

var newtypeFilter =function(obj, arg){
    var result = [];
    for(var i = 0; i< obj.length; i++){
        if(obj[i].make == arg){
            result.push(obj[i]);
        }
    }
    return result;
}
console.log("new make filter with ekstra argument");
console.log(newtypeFilter(cars,"Volvo"));

var newpriceFilter =function(obj, arg){
    var result = [];
    for(var i = 0; i < obj.length; i++){
        if(obj[i].price < arg){
            result.push(obj[i]);
        }
    }
    return result;
}
console.log("new price filter with ekstra argument");
console.log(newpriceFilter(cars,5000));

var mulFilter = function(obj,arg,callback){
    return callback(obj,arg);
}
console.log("MULFILTER with callback");
console.log(mulFilter(cars,1999,newyearFilter));

console.log("-------------------------");
console.log("aaaaaaaaaa");
console.log("dddddddddd");
console.log("ffffffffff");
console.log("eeeeeeeeee");
console.log("bbbbbbbbbb");
console.log("----------------------------------");

var msgPrinter = function(msg,delay){
    setTimeout(function(){
      console.log(msg);
    },delay);
  };
  console.log("aaaaaaaaaa");
  msgPrinter ("bbbbbbbbbb",2000);
  console.log("dddddddddd");
  msgPrinter ("eeeeeeeeee",1000);
  console.log("ffffffffff");
  
console.log("----------------------------------");

//Using the bind(..) function
function Person(name){
    this.name = name;  
    console.log("Name: "+ this.name);
    setTimeout(function(){
      console.log("Hi  "+this.name);  
    }.bind(this),2000);
  }

//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  // this is the global object name has been defined in the Person function

console.log("----------------------------------");

var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: "+ name);  //this is the global object name has been defined in the Person function

console.log("----------------------------------");

  
var greeter = function(){
    console.log(this.message);
  };
  var comp1 = { message: "Hello World" };
  var comp2 = { message: "Hi" };
  
  var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
  var g2 = greeter.bind(comp2 );//And here another “this”
  setTimeout(g1,500);
  setTimeout(g2,1000);


console.log("----------------------JavaScript Objects----------------");
  
var user = [
    { name: 'User1',birthday:'2000-01-01',hobby:'something',email:'someone@dk.dk' },
    { name: 'User2',birthday:'2000-01-01',hobby:'something',email:'someone@dk.dk' },
    { name: 'User3',birthday:'2000-01-01',hobby:'something',email:'someone@dk.dk' },
    { name: 'User4',birthday:'2000-01-01',hobby:'something',email:'someone@dk.dk' },
    { name: 'User5',birthday:'2000-01-01',hobby:'something',email:'someone@dk.dk' },
    { name: 'User6',birthday:'2000-01-01',hobby:'something',email:'someone@dk.dk' }
];

for(prop in user){
    console.log(prop,user[prop]);
}

console.log("----------------------------------");

for(prop in user){
    delete user.birthday;
    console.log(prop,user[prop]);
}

user.firstname = "firstname1";
user.lastname = "lastname";
user.age = 100;

var getUsers = function(){
    for (var prop in user) {
        console.log(prop,user[prop]);
    }
}
getUsers();