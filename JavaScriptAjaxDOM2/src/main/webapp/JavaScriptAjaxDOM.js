
document.getElementById("bt").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("div").innerHTML = Date();
    setInterval(displayDate, 100); //300000 MS == 5 minutes
}


var div2 = document.getElementById("div2");
div2.innerHTML = "Content to be replaced";
var url = "http://localhost:8084/JavaScriptAjaxDOM2/api/persons";
var conf = {method: 'get'};
var promise = fetch(url, conf);
promise.then(function (response) {
    return response.text();
}).then(function (text) {
    div2.innerHTML = "Her skal vise tekster fra server: " + text;
});

var conf = {method: 'GET'};
var promise = fetch('https://jokes-plaul.rhcloud.com/api/joke', conf);
promise.then(function (response) {
    return response.json();
}).then(function (quote) {
    document.getElementById("joke").innerHTML = quote.joke;

});


var getPersons = function () {
    var persons = document.getElementById("persons");
    persons.innerHTML = "Content to be replaced";
    var url = "http://localhost:8084/JavaScriptAjaxDOM2/api/persons";
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        div2.innerHTML = "List of persons: <br />" + text;
    });
};

var addUser = function () {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var persons = document.getElementById("persons").value;
    alert(fname + lname);
    var url = "http://localhost:8084/JavaScriptAjaxDOM2/api/persons";
    var conf = {method: 'post'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        
    }).then(function (text) {
        persons.innerHTML = "Her skal vise tekster fra server: " + text;
    });
};