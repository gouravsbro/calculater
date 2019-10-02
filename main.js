{
  $(".nav li").on("click", function () {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });
}


// for all code
// function calculate() {
//   var weight = Number(document.getElementById("weight").value);
//   var height = Number(document.getElementById("height").value);
//   var uttar = weight / (height * height);
//   var lastUttar = uttar.toFixed(2);
//   var cmt = ' ';
//   if(lastUttar < 18){
//       cmt = "You have to increase your weight.."
//   }else if(lastUttar >= 18 && lastUttar < 23){
//       cmt = "Your weight is too cool.."
//   }else if(lastUttar >= 23){
//       cmt = "You are Over weight.."
//   }else{
//       cmt = "Who are you ?"
//   }
//   document.getElementById("uttar").innerHTML = "Your BMI is " + lastUttar + " " + cmt;
// }

// for BMI 
function calculate() {
  var weight = Number(document.getElementById("weight").value);
  var height = Number(document.getElementById("height").value);
  var uttar = weight / (height * height);
  var lastUttar = uttar.toFixed(2);
  var cmt = ' ';
  if (weight == " " || weight == null || height == " " || height == null) {
    alert("Please Enter the valid value");
  }
  if (lastUttar < 18) {
    cmt = "You have to increase your weight.."
  } else if (lastUttar >= 18 && lastUttar < 23) {
    cmt = "Your weight is too cool.."
  } else if (lastUttar >= 23) {
    cmt = "You are Over weight.."
  } else {
    cmt = "Who are you ?"
  }
  document.getElementById("uttar").innerHTML = "Your BMI is " + lastUttar + " " + cmt;
}



// area of rect
function calArea() {
  var rectAa = Number(document.getElementById("rectAa").value);
  var rectAb = Number(document.getElementById("rectAb").value);
  var uttar = rectAa * rectAb;
  var lastUttar = uttar.toFixed(2);
  if (rectAa == " " || rectAa == null || rectAb == " " || rectAb == null) {
    alert("Please enter the number for finding area");
  } else {
    document.getElementById("uttar").innerHTML = "Formula: Height X Width <br> Area of this rect is " + lastUttar;
  }
}

// perimeter of rect
function calPeri() {
  var rectPa = Number(document.getElementById("rectPa").value);
  var rectPb = Number(document.getElementById("rectPb").value);
  var uttar2 = 2 * (rectPa + rectPb);
  var lastUttar = uttar2.toFixed(2);
  if (rectPa == " " || rectPa == null || rectPb == " " || rectPb == null) {
    alert("Please enter the number for finding perimeter");
  } else {
    document.getElementById("uttar2").innerHTML = "Formula: 2(Height + Width) <br> Perimeter of this rect is " + lastUttar;
  }
}


// perimeter of triangle
function calTriPeri() {
  var triPa = Number(document.getElementById("triPa").value);
  var triPb = Number(document.getElementById("triPb").value);
  var triPc = Number(document.getElementById("triPc").value);
  var uttar = triPa + triPb + triPc;
  var lastUttar = uttar.toFixed(2);
  if (triPa == " " || triPa == null || triPb == " " || triPb == null || triPc == " " || triPc == null) {
    alert("Please enter the number for finding perimeter");
  } else {
    document.getElementById("uttar3").innerHTML = "Formula: Sum of all side <br> Area of this triangle is " + lastUttar;
  }
}

// area of triangle
function calTriArea() {
  var triAa = Number(document.getElementById("triAa").value);
  var triAb = Number(document.getElementById("triAb").value);
  var uttar = (triAa * triAb) / 2;
  var lastUttar = uttar.toFixed(2);
  if (triAa == " " || triAa == null || triAb == " " || triAb == null) {
    alert("Please enter the number for finding area");
  } else {
    document.getElementById("uttar4").innerHTML = "Formula: (1/2) height x base <br> Area of this triangle is " + lastUttar;
  }
}