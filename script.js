var language = "javascript";

function check1(){
    var x = 5;
    if (language === "javascript"){
        var x = 7;
    }
    console.log(x);
}

check1();


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
let students = [
    { name: "Adel", score: 10},
    { name: "Sofian", score: 9},
    { name: "Karim", score: 12},
];
function giveMePassed(liste) {
    liste.forEach((students) => {  //=> remplace function
        if(students.score >= 10){
            console.log(students.name + " passed");
        } 
    });
}
giveMePassed(students);

// écriture 2009
// function gimES5(list) {
//     const newList = list.map(function (st){
//         return st.name + " has score " + st.score;
//     })
//     return newList;
// }

// autre écriture (2022)

let gim = (liste) => {
    return liste.map((student) => ` ${student.name} has score ${student.score}`);
};
const result = gim(students);
console.log(result);




// opération sur les list
let numberList = [ 1, 2, 3];

let newList = numberList.map(function(st){
    return st * 2;
});
console.log(newList , numberList)

//DOM
const mytitle = document.getElementById("h1");
let i = 0;
setInterval(function(){
    mytitle.innerHTML = i;
    i++
}, 1000)