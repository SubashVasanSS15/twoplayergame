"use strict";

const modal = document.querySelector(".modal");
//const overlay = document.querySelector('.overlay');
//const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelectorAll(".show-modal");
const openRPS = function () {
  window.open("rps.html", "_self");
};
const openPIG = function () {
  window.open("piggame.html", "_self");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

openBtn[0].addEventListener("click", openRPS);
openBtn[1].addEventListener("click", openPIG);

closeBtn.addEventListener("click", closeModal); //we are not including Paranthesis because the program or the function will be execyted before we click the button
overlay.addEventListener("click", closeModal);

//quitting uing esc key

document.addEventListener("keydown", function (e) {
  //console.log(e.key); here e is an object which contains more characteristics or info about the key pressed like name,code of the key like a dictionary to say
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
