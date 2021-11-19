// DOM Elements
const modalForm = document.querySelector("#modalForm");
const modalThanks = document.querySelector(".thanks");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const modalCloseBtnBottom = document.querySelector(".closeModal");
const modalSubmitBtn = document.querySelector(".btn-submit");
const firstName = document.querySelector("#first");
const formDataFirst = document.querySelector(".formDataFirst");
const lastName = document.querySelector("#last");
const formDataLast = document.querySelector(".formDataLast");
const emailAddress = document.querySelector("#email");
const formDataEmail = document.querySelector(".formDataEmail");
const birth = document.querySelector("#birthdate");
const formDataBirthdate = document.querySelector(".formDataBirthdate");
const qty = document.querySelector("#quantity");
const formDataQuantity = document.querySelector(".formDataQuantity");
const place = document.querySelector(".town");
const formDataTown = document.querySelector(".formDataTown");
const check = document.querySelector("#checkbox1");
const formDataCheckboxes = document.querySelector(".formDataCheckboxes");

// Mobile navigation menu
function editNav() {
  var nav = document.getElementById("myTopnav");
  if (nav.className.includes("topnav")) {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalForm.style.display = "block";
  modalThanks.style.display = "none";
}

// Close modal event
modalCloseBtn.addEventListener("click", closeModal);
modalCloseBtnBottom.addEventListener("click", closeModal);


// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validation with submit button
modalSubmitBtn.addEventListener("click", (e) => {
  first();
  last();
  email();
  birthdate();
  quantity();
  town();
  checkboxes();
  e.preventDefault();
  if (nbrFirst + nbrLast + nbrEmail + nbrBirthdate + nbrQuantity + nbrTown + nbrCheckboxes == 0) {
        modalForm.style.display = "none";
        modalThanks.style.display = "flex";
  }
});

// First verification
firstName.addEventListener("focusout", () => {
  first();
});

errorFirst = document.createElement('p');
let nbrFirst = 0;

function first() {
  if (firstName.validity.valid == false && nbrFirst === 0) {
    formDataFirst.appendChild(errorFirst);
    document.querySelector(".formDataFirst input").style.border = "2px solid red";
    errorFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    nbrFirst = 1;
  }
  else if (firstName.validity.valid == true && nbrFirst === 1) {
    document.querySelector(".formDataFirst input").style.border = "none";
    formDataFirst.removeChild(errorFirst);
    nbrFirst = 0;
  }
}

// Last verification
lastName.addEventListener("focusout", () => {
  last();
});

errorLast = document.createElement('p');
let nbrLast = 0;

function last() {
  if (lastName.validity.valid == false && nbrLast === 0) {
    formDataLast.appendChild(errorLast);
    document.querySelector(".formDataLast input").style.border = "2px solid red";
    errorLast.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    nbrLast = 1;
  }
  else if (lastName.validity.valid == true && nbrLast === 1) {
    document.querySelector(".formDataLast input").style.border = "none";
    formDataLast.removeChild(errorLast);
    nbrLast = 0;
  }
}

// Email verification
emailAddress.addEventListener("focusout", () => {
  email();
});

errorEmail = document.createElement('p');
let nbrEmail = 0;

function email() {
  if (emailAddress.validity.valid == false && nbrEmail === 0) {
    formDataEmail.appendChild(errorEmail);
    document.querySelector(".formDataEmail input").style.border = "2px solid red";
    errorEmail.textContent = "Veuillez entrer une adresse email valide.";
    nbrEmail = 1;
  }
  else if (emailAddress.validity.valid == true && nbrEmail === 1) {
    document.querySelector(".formDataEmail input").style.border = "none";
    formDataEmail.removeChild(errorEmail);
    nbrEmail = 0;
  }
}

// Birthdate verification
birth.addEventListener("focusout", () => {
  birthdate();
});

errorBirthdate = document.createElement('p');
let nbrBirthdate = 0;

function birthdate() {
  if (birth.validity.valid == false && nbrBirthdate === 0) {
    formDataBirthdate.appendChild(errorBirthdate);
    document.querySelector(".formDataBirthdate input").style.border = "2px solid red";
    errorBirthdate.textContent = "Veuillez entrer une date de naissance valide.";
    nbrBirthdate = 1;
  }
  else if (birth.validity.valid == true && nbrBirthdate === 1) {
    document.querySelector(".formDataBirthdate input").style.border = "none";
    formDataBirthdate.removeChild(errorBirthdate);
    nbrBirthdate = 0;
  }
}

// Quantity verification
qty.addEventListener("focusout", () => {
  quantity();
});

errorQuantity = document.createElement('p');
let nbrQuantity = 0;

function quantity() {
  if (qty.validity.valid == false && nbrQuantity === 0) {
    formDataQuantity.appendChild(errorQuantity);
    document.querySelector(".formDataQuantity input").style.border = "2px solid red";
    errorQuantity.textContent = "Vous devez entrer un chiffre.";
    nbrQuantity = 1;
  }
  else if (qty.validity.valid == true && nbrQuantity === 1) {
    document.querySelector(".formDataQuantity input").style.border = "none";
    formDataQuantity.removeChild(errorQuantity);
    nbrQuantity = 0;
  }
}

// Town verification
errorTown = document.createElement('p');
let nbrTown = 0;

function town() {
  if (place.validity.valid == false && nbrTown === 0) {
    formDataTown.appendChild(errorTown);
    errorTown.textContent = "Vous devez choisir une option.";
    nbrTown = 1;
  }
  else if (place.validity.valid == true && nbrTown === 1) {
    formDataTown.removeChild(errorTown);
    nbrTown = 0;
  }
}

// Checkboxes verification
errorCheckboxes = document.createElement('p');
let nbrCheckboxes = 0;

function checkboxes() {
  if (check.validity.valid == false && nbrCheckboxes === 0) {
    formDataCheckboxes.appendChild(errorCheckboxes);
    errorCheckboxes.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    nbrCheckboxes = 1;
    console.log("Coucou2");
  }
  else if (check.validity.valid == true && nbrCheckboxes === 1) {
    formDataCheckboxes.removeChild(errorCheckboxes);
    nbrCheckboxes = 0;
  }
}