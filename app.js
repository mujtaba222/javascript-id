var textinput1 = document.getElementById("inp1");
var textinput2 = document.getElementById("inp2");
var textinput3 = document.getElementById("inp3");
var textinput4 = document.getElementById("inp4");
var textinput5 = document.getElementById("inp5");
var textinput6 = document.getElementById("inp6");
var errorpara = document.getElementById("error");


var a = [];

 function addvalue() {
     var b = textinput1.value;
     if (b == "") {
         errorpara.innerHTML = "Enter value";
     } else {
        a.push (b);
         // console.log(a);
     }

     var c = textinput2.value;

     if (c == "") {
         errorpara.innerHTML = "Enter value";
     } else {
         a.push (c);
         // console.log(a);
     }
     var d = textinput3.value;

     if (d == "") {
         errorpara.innerHTML = "Enter value";
     } else {
         a.push (d);
         // console.log(a);
     }
     var e = textinput4.value;

     if (e == "") {
         errorpara.innerHTML = "Enter value";
     } else {
         a.push (e);
         // console.log(a);
     }
    
    
     var f = textinput5.value;
    
     if (f == "") {
     errorpara.innerHTML = "Enter value";
     } else {
      a.push (f);
     // console.log(a);
     }

    var g = textinput6.value;
    
     if (g == "") {
         errorpara.innerHTML = "Enter value";
     } else {
         a.push (g);
         console.log(a);
     }
 }


// function addvalue() {
//     var b = textinput1.value;
//     var c = textinput2.value;
//     var d = textinput3.value;
//     var e = textinput4.value;
//     var f = textinput5.value;
//     var g = textinput6.value;
//     if (b == "") {
//         errorpara.innerHTML = "Enter value";
//     } else {
//         a.push (b);
//         a.push (c);
//         a.push (d);
//         a.push (e);
//         a.push (f);
//         a.push (g);
//         console.log(a);
//     }
// }










