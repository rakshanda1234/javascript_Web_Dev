const btn = document.querySelector(".btn");
//mouse over,out
btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "white";

  btn.addEventListener("mouseover", (e) => {
    e.preventDefault();
    document.querySelector("#my-form").style.background = "grey";

    // document.querySelector("body").classList.add("bg-dark");
    //document.querySelector(".items").lastElementChild.innerHTML =
    //"<h1>Hello</h1>";
  });
});
