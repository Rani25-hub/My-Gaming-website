//1. Tag Selector
// return an array
//HTMLcollection type of array

// let h1 = document.getElementsByTagName("h1");

// console.log(h1[1]);

// let a = document.getElementsByClassName("a");

// console.log(a[1]);

// let idSelector = document.getElementById("b");
// console.log(idSelector);

// // 4. Query Selector
// // Return Only a single and first value

// let data = document.querySelector("#b");
// console.log(data);

// // 5. QuerySelector All
// // return an array of type Nodelist
// let Mydata = document.querySelectorAll("h1");
// console.log(MyData[0]);

// //Read and Write Operations
// console.log(MyData[0].textContent);
// MyData[0].textContent = "Written By DOm";

// // Styling

// MyData[0].style.color = "red";
// MyData[0].style.background = "Yellow";

// add / remove / toggle
// let heading = document.querySelectorAll("h1");

// heading[1].classList.add("c");
// heading[1].classList.remove("b");
// heading[1].classList.remove("c");

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("btn clicker");
//   (heading[1], classList.toggle("c"));
//   document.body.classList.toggle("e");
// });

let input = document.querySelector("input");
let btn = document.querySelector(".g");
let ol = document.querySelector("ol");

btn.addEventListener("click", () => {
  if (input.value != "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    ol.appendChild(li);
    input.value = "";
  }
});
