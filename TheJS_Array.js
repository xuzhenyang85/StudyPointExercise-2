function myFunc(){
    //b)concat () joins two arrays and returns a new array.
    var boys = ["Peter","lars","Ole"];
    var girls =["Janne", "hanne", "Sanne"];
    const allArray = boys.concat(girls);
    return allArray;
    }
    
    console.log(myFunc());
    // concat
    
    var joinArray = myFunc().join(" , ");
    console.log(joinArray);
    
    var joinArray = myFunc().join(" - ");
    console.log( joinArray);
    
    var pushArray = myFunc();
    pushArray.push("Lone","Gitte");
    console.log(pushArray);
    
    var unshiftArray = myFunc();
    unshiftArray.unshift("Hans","Kurt");
    console.log(unshiftArray);
    
    var shiftArray = myFunc();
    shiftArray.shift();
    console.log(shiftArray);
    
    var popArray = myFunc();
    popArray.push("Lone","Gitte");
    popArray.pop();
    console.log(popArray);
    
    var spliceArray = myFunc();
    spliceArray.splice(2,2);
    console.log(spliceArray);
    
    var reverseArray = myFunc();
    reverseArray.reverse();
    console.log(reverseArray);
    
    var sortArray = myFunc();
    for(var i = 0; i < sortArray.length;i++){
        sortArray[i]= sortArray[i].charAt(0).toUpperCase() + sortArray[i].substr(1);
    }
    sortArray.sort();
    console.log(sortArray);
    

    var newArray = myFunc();
    var mapArray = newArray.map(function(x){
        return x.toUpperCase();})
    console.log(mapArray);


    var newArray1 = myFunc();
    for(var i = 0; i < newArray1.length;i++){
        newArray1[i]= newArray1[i].charAt(0).toUpperCase() + newArray1[i].substr(1);
    }
    newArray1.sort();
    function filterLetter(query){
        return newArray1.filter(function(first){
            return first.charAt(0) ==(query)
        })
    }
    console.log(filterLetter("L") || filterLetter("I"));