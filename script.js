//1.Compare two JSON have the same properties withou order
let obj1 = {name:"Person 1",age :5}
let obj2 = {age :5,name:"Person 1"}
var res = JSON.stringify(obj1);
var res1 = JSON.stringify(obj2);
console.log(res==res1);


//2.Display all the country flags in consloe
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    var data = request.response;
    
    var result = JSON.parse(data);
    

   for (var i=0; i<result.length; i++ )
    {
        console.log(result[i].flags.png);
    }
}

//3.Print all the countries name,rejions,sub-region in consloe

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function(){
    var data1 = request1.response;
    
    var result1 = JSON.parse(data1);
    
    
   

   for (var i=0; i<result1.length; i++ )
    {
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population
            );
    }
}