var sayhi = function(id){
    console.log("Hi from " + id);
    document.getElementById("p1").innerHTML = "Hi from "+ id;
}

var arr = ["Lars","Peter","Jan","Ian"];

var addLi = function(arr){
    var newarr =[];
    for(var i = 0; i < arr.length;i++){
        var ullarr = "<li>" + arr[i]+"</li>";
        newarr.push(ullarr);
    }
    return newarr;
    
}
var ekstra = "<ul>";
var result = addLi(arr);
var addUL = ekstra.concat(result).concat(ekstra);

document.getElementById("ul").innerHTML = addUL;

document.getElementById("name").addEventListener("click",function(event){
    event.preventDefault();
})

var addname = function(){
    var input = document.getElementById("name").value;
    arr.push(input);
    arr.join("");
    var newarr =[];
    var addUl = function(arr){
        for(var i = 0; i < arr.length;i++){
            var ullarr = "<li>" + arr[i]+"</li>";
            newarr.push(ullarr);
        }
        return newarr;
    }
    var ekstra = "<ul>";
    var result = addUl(arr);
    var result1 = ekstra.concat(result).concat(ekstra);
    this.result1 = result1;
    document.getElementById("ul").innerHTML =result1;
}

var getCars= function(){
    var cars = [
        { id: 1, Year: 1997, Make: 'Ford', Model: 'E350', Price: 3000 },
        { id: 2, Year: 1999, Make: 'Chevy', Model: 'Venture', Price: 4900 },
        { id: 3, Year: 2000, Make: 'Chevy', Model: 'Venture', Price: 5000 },
        { id: 4, Year: 1996, Make: 'Jeep', Model: 'Grand Cherokee', Price: 4799 },
        { id: 5, Year: 2005, Make: 'Volvo', Model: 'V70', Price: 44799 }
    ];
    return cars;
}

var addTabel = function (){
    var cars = getCars();
    var thead = "<thead>";
    var theadEnd = "</thead>";
    var tr = "<tr>";
    var trEnd = "</tr>";
    var start = "<table class = \"table\">"+thead + tr + "<th>id</th><th>Year</th><th>Make</th><th>Model</th><th>Price</th>"+ trEnd + theadEnd;
    var carlist = [];
    for(var i = 0; i< cars.length; i++){
        var carId = cars[i].id;
        var carYear = cars[i].Year;
        var carMake = cars[i].Make;
        var carModel = cars[i].Model;
        var carPrice = cars[i].Price;
        var carTable = "<tbody>" + tr + "<th scope = \"row\">" + carId +"</th><td>" + carYear + "</td>"+ "<td>" + carMake + "</td>"+ "<td>" + carModel + "</td>"+ "<td>" + carPrice + "</td></tr></tbody>";
        carlist.push(carTable);
        var carlist = carlist;
    }
    var end = "</table>";
    document.getElementById("cars").innerHTML = start + carlist + end;
}
addTabel();

var filterPrice = function (){
    var price = document.getElementById("price").value;
    var cars = getCars();
    var thead = "<thead>";
    var theadEnd = "</thead>";
    var tr = "<tr>";
    var trEnd = "</tr>";
    var start = "<table class = \"table\">"+thead + tr + "<th>id</th><th>Year</th><th>Make</th><th>Model</th><th>Price</th>"+ trEnd + theadEnd;
    
    var result = cars.filter(function(obj,arg){
        var filterlist = cars.Price < price;
        return filterlist;
    })
    var end = "</table>";
    document.getElementById("cars").innerHTML = result;
}


var clickMe = function (){
    var num = document.getElementById("buttons").innerText;
    var newNum = []
    for(var i =0; i < num.length; i++ ){
        return newNum.push(num[i]);
    }
    document.getElementById("display").innerText = num;
    alert(newNum);
}