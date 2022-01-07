// var language = "javascript";

// function check(){
//     var x = 5;
//     if (language === "javascript"){
//         var x = 7;
//     }
//     console.log(x);
// }

// check();


// with let
var language = "javascript";

function check(){
    let x = 5;
    if (language === "javascript"){
        let x = 7;
        console.log(x);
    }
}

check();


//array
let student = [
    { name: "Adel", score: 10},
    { name: "Sofian", score: 9},
    { name: "Karim", score: 12},
];

console.log("sarah")

function giveMePassed(liste) {
    liste.forEach((student) => {  //=> remplace function
        if(student.score >= 10){
            console.log(student.name + "passed");
        } 
    });
}

giveMePassed(student);


// opération sur les list
let numberList = [ 1, 2, 3];

let newList = numberList.map(function(st){
    return st * 2;
});
console.log(newList , numberList)