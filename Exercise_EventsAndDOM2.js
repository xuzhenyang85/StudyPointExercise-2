var sayhi = function(id){
    console.log("Hi from " + id);
    document.getElementById("p1").innerHTML = "Hi from "+ id;
}

var persons = ["Lars","Peter","Jan","Ian"];
var personsList = persons.map(function(e){
    return "<li>" + e + "</li>";
});
var newNames = personsList.join(" ");
document.getElementById("ul").innerHTML = newNames;


document.getElementById("name").addEventListener("click",function(event){
    event.preventDefault();
})

var addname = function(){
    var input = document.getElementById("name").value;
    personsList.push("<li>"+input+"</li>");
    var newNames = personsList.join(" ");
    document.getElementById("ul").innerHTML = newNames;

}

var cars = [
    { id: 1, Year: 1997, Make: 'Ford', Model: 'E350', Price: 3000 },
    { id: 2, Year: 1999, Make: 'Chevy', Model: 'Venture', Price: 4900 },
    { id: 3, Year: 2000, Make: 'Chevy', Model: 'Venture', Price: 5000 },
    { id: 4, Year: 1996, Make: 'Jeep', Model: 'Grand Cherokee', Price: 4799 },
    { id: 5, Year: 2005, Make: 'Volvo', Model: 'V70', Price: 44799 }
];


var addTabel = function (){
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
document.getElementById("getPrice").addEventListener("click",function(e){
    var inputPrice = document.getElementById("price").value;
    var carsPrice = cars.filter(function (obj){
        return obj.Price < inputPrice;
    });
    carsPrice.forEach(function(obj){
        document.getElementById("cars2").innerHTML += "Id: " +obj.id + " Make: "+ obj.Make + " Model: " +obj.Model+ " Price: "+ obj.Price +"<br />";
    });
});

document.getElementById("buttons").addEventListener("click",function(e){
    var value = e.target.innerText;
    if(value.innerText == "="){
        document.getElementById("display").innerText +=100;
    }
    else{
        document.getElementById("display").innerText +=value;
    }
});
