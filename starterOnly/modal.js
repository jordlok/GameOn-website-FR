function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalForm = document.querySelector(".close");
const closeModalFormValidation = document.querySelector(".closeValidation");

const formBox = document.querySelector("#formBox");
const formFirstName = document.querySelector("#first");
const formLastName = document.querySelector("#last");
const formEmail = document.querySelector("#email");
const formBirthdate = document.querySelector("#birthdate");
const formQuantity = document.querySelector("#quantity");
const formCGV = document.querySelector("#formCGV");
const formSubmitButton = document.querySelector(".btn-submit");
const formConfirmation = document.querySelector(".formConfirmation");

const firstNameConditionsValidation =
  /^[a-zA-ZéèîïÉÈÎÏ][a-zéèëàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèëàçîï]+)?/;
const emailConditionsValidation = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;
const quantityConditionsValidation = /^[0-9]/;

const formFirstNameMissed = document.querySelector("#formFirstNameMissed");
const formLastNameMissed = document.querySelector("#formLastNameMissed");
const formEmailMissed = document.querySelector("#formEmailMissed");
const formBirthdateMissed = document.querySelector("#formBirthdateMissed");
const formQuantityMissed = document.querySelector("#formQuantityMissed");
const formCgvMissed = document.querySelector("#formCgvMissed");
const formButtonRadioMissed = document.querySelector("#formButtonRadioMissed");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeModalForm.addEventListener("click", closeModal);
closeModalFormValidation.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

formBox.addEventListener("click", formValid);

let formValidOrNot = false;
// On annonce la fonction qui valide le formulaire

function formValid(e) {
  //*** Validité du champ Prenom

  if (formFirstName.validity.valueMissing) {
    e.preventDefault();
    formFirstNameMissed.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prenom.";
    formFirstName.classList.add("itemMissed");
    formFirstName.classList.remove("itemValid");
    formValidOrNot = false;
  } else if (firstNameConditionsValidation.test(formFirstName.value) == false) {
    e.preventDefault();
    formFirstNameMissed.textContent =
      "Avez-vous correctement saisi votre prenom ?";
    formFirstName.classList.add("itemMissed");
    formFirstName.classList.remove("itemValid");
    formValidOrNot = false;
  } else {
    formFirstNameMissed.textContent = "";
    formFirstName.classList.add("itemValid");
    formValidOrNot = true;
  }
  //*** Validité du champ Nom

  if (formLastName.validity.valueMissing) {
    e.preventDefault();
    formLastNameMissed.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    formLastName.classList.add("itemMissed");
    formLastName.classList.remove("itemValid");
    formValidOrNot = false;
  } else if (firstNameConditionsValidation.test(formLastName.value) == false) {
    e.preventDefault();
    formLastNameMissed.textContent = "Avez-vous correctement saisi votre nom ?";
    formLastName.classList.add("itemMissed");
    formLastName.classList.remove("itemValid");
    formValidOrNot = false;
  } else {
    formLastNameMissed.textContent = "";
    formLastName.classList.add("itemValid");
    formValidOrNot = true;
  }

  //*** Validité du champ Email

  if (formEmail.validity.valueMissing) {
    e.preventDefault();
    formEmailMissed.textContent = "Veuillez entrer une adresse email.";
    formEmail.classList.add("itemMissed");
    formEmail.classList.remove("itemValid");
    formValidOrNot = false;
  } else if (emailConditionsValidation.test(formEmail.value) == false) {
    e.preventDefault();
    formEmailMissed.textContent = "Avez-vous correctement saisi votre email ?";
    formEmail.classList.add("itemMissed");
    formEmail.classList.remove("itemValid");
    formValidOrNot = false;
  } else {
    formEmailMissed.textContent = "";
    formEmail.classList.add("itemValid");
    formValidOrNot = true;
  }

  //*** Validité du champ Date de naissance

  if (formBirthdate.validity.valueMissing) {
    e.preventDefault();
    formBirthdateMissed.textContent =
      "Vous devez entrer votre date de naissance.";
    formBirthdate.classList.add("itemMissed");
    formBirthdate.classList.remove("itemValid");
    formValidOrNot = false;
  } else {
    formBirthdateMissed.textContent = "";
    formBirthdate.classList.add("itemValid");
    formValidOrNot = true;
  }

  //*** Validité du champ Quantité

  if (formQuantity.validity.valueMissing) {
    e.preventDefault();
    formQuantityMissed.textContent =
      "Vous devez indiquer le nombre de tournois auquel vous avez participé.";
    formQuantity.classList.add("itemMissed");
    formQuantity.classList.remove("itemValid");
    formValidOrNot = false;
  } else if (quantityConditionsValidation.test(formQuantity.value) == false) {
    e.preventDefault;
    formQuantityMissed.textContent = "Veuillez entrer une valeur valide";
    formQuantity.classList.add("itemMissed");
    formQuantity.classList.remove("itemValid");
    formValidOrNot = false;
  } else {
    formQuantityMissed.textContent = "";
    formQuantity.classList.add("itemValid");
    formValidOrNot = true;
  }

  //*** Validité du champ radio

  var buttonChecked = "non";
  const formButtonRadio = document.querySelectorAll('input[name="location"]');

  for (const x of formButtonRadio) {
    if (x.checked) {
      var buttonChecked = "oui";
      break;
    }
  }
  if (buttonChecked == "oui") {
    formButtonRadioMissed.textContent = "";
    formValidOrNot = true;
  } else {
    e.preventDefault;
    formValidOrNot = false;
    formButtonRadioMissed.textContent = "Vous devez choisir une option.";
    return false;
  }

  //** Validité des CGV

  if (formCGV.checked) {
    formCgvMissed.textContent = "";
    formValidOrNot = true;
  } else {
    e.preventDefault;
    formValidOrNot = false;
    formCgvMissed.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    return false;
  }
}

formBox.addEventListener("submit", openValidation);

function openValidation() {
  if (formValidOrNot == true) {
    formConfirmation.style.display = "flex";
  }
}
