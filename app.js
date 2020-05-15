const displayScreen = document.querySelector(".display");
const num = document.querySelectorAll(".button__num");
const operators = document.querySelectorAll(".button__op");
const c = document.getElementById("c");
const ac = document.getElementById("ac");
const equal = document.getElementById("equal");

let array = [];
let num1 = "";
let op = "";
let num2 = "";
let result;

function clearArray(arr) {
  arr.length = 0;
  num1 = "";
  num2 = "";
  op = "";
  displayScreen.innerHTML = arr.join(" ");
}

function evaluate(arr) {
  let final;
  let [first, act, last] = arr;
  console.log(first);
  console.log(act);
  console.log(last);

  first = Number(first);
  last = Number(last);
  if (act.length !== 1) return "ERR";
  switch (act) {
    case "+":
      final = first + last;
      break;
    case "-":
      final = first - last;
      break;
    case "*":
      final = first * last;
      break;
    case "/":
      final = first / last;
      break;
  }
  return Number.isNaN(final) ? "ERR" : Number.isFinite(final) ? final : "ERR";
}

num.forEach(function (item) {
  item.addEventListener("click", () => {
    if (array.length >= 2) {
      num2 += item.innerHTML;
      array[2] = num2;
      console.log(array);
      displayScreen.innerHTML = array.join(" ");
    } else {
      num1 += item.innerHTML;
      array[0] = num1;
      console.log(array);
      displayScreen.innerHTML = array.join(" ");
    }
  });
});

operators.forEach(function (item) {
  item.addEventListener("click", () => {
    if (array.length === 1) {
      op += item.innerHTML;
      array[1] = op;
      console.log(array);
      displayScreen.innerHTML = array.join(" ");
    }
    if (array.length === 2) {
      op = item.innerHTML;
      array[1] = op;
      console.log(array);
      displayScreen.innerHTML = array.join(" ");
    }
  });
});

c.addEventListener("click", function () {
  array.pop();
  console.log(array);
  displayScreen.innerHTML = array.join(" ");
});

ac.addEventListener("click", function () {
  clearArray(array);
  console.log(array);
});

equal.addEventListener("click", function () {
  if (array.length === 3) {
    displayScreen.innerHTML = evaluate(array);
    array = [];
    num1 = "";
    num2 = "";
    op = "";
  }
});
