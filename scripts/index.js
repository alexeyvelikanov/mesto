import { Card } from "./card.js";
import { FormValidator } from "./validate.js";

const popupProfile = document.querySelector(".popupProfile");
const popupMesto = document.querySelector(".popupMesto");
const popupImage = document.querySelector(".popupImage");
const formProfile = popupProfile.querySelector(".popup__form_profile");
const nameField = popupProfile.querySelector(".popup__input_type_name");
const profField = popupProfile.querySelector(".popup__input_type_prof");
const popupCloseButton = popupProfile.querySelector(".popup__close_profile");
const popupAddCloseButton = popupMesto.querySelector(".popup__close_mesto");
const popupImgCloseButton = popupImage.querySelector(".popup__close_image");
const editButton = document.querySelector(".profile__button");
const addButton = document.querySelector(".profile__add");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const inputTitle = popupMesto.querySelector(".popup__input_type_title");
const inputLink = popupMesto.querySelector(".popup__input_type_link");
const list = document.querySelector(".elements");
const template = document.querySelector(".template");
const formMesto = document.querySelector(".popup__form_mesto");
const popupPicture = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const initialCards = [
  {
    title: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    title: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    title: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    title: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    title: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__subm",
  inputInvalidClass: "popup__input_state_invalid",
  buttonInvalidClass: "popup__subm_invalid",
};

function showImage(src, caption) {
  popupPicture.src = src;
  popupCaption.textContent = caption;
  showPopup(popupImage);
}

function handleAddCard(event) {
  event.preventDefault();
  const item = {
    title: inputTitle.value,
    link: inputLink.value,
  };
  const card = new Card(item, template, showImage);
  const cardElement = card.getItems();
  list.prepend(cardElement);
  inputTitle.value = "";
  inputLink.value = "";
  closePopup(popupMesto);
}

function showPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", keyHandlerEsc);
  popup.addEventListener("click", closeOnClick);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyHandlerEsc);
  popup.removeEventListener("click", closeOnClick);
}

function assignPopup() {
  nameField.value = title.textContent;
  profField.value = subtitle.textContent;
  eraseError(popupProfile);
  showPopup(popupProfile);
}

function submitForm(event) {
  event.preventDefault();
  title.textContent = nameField.value;
  subtitle.textContent = profField.value;
  closePopup(popupProfile);
}

function keyHandlerEsc(evt) {
  if (evt.key === "Escape") {
    const activPopup = document.querySelector(".popup_opened");
    closePopup(activPopup);
  }
}

function closeOnClick(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    const activPopup = document.querySelector(".popup_opened");
    closePopup(activPopup);
  }
}

function eraseError(form) {
  const inputsList = form.querySelectorAll(".popup__input");
  inputsList.forEach((item) => {
    const error = form.querySelector(`#${item.id}-error`);
    error.textContent = "";
    item.classList.remove("popup__input_state_invalid");
  });
}

const formProfileValidation = new FormValidator(validationConfig, formProfile);
formProfileValidation.enableValidation();
const formMestoValidation = new FormValidator(validationConfig, formMesto);
formMestoValidation.enableValidation();

editButton.addEventListener("click", assignPopup);
addButton.addEventListener("click", () => {
  formMesto.reset();
  eraseError(popupMesto);
  showPopup(popupMesto);
});
popupCloseButton.addEventListener("click", () => closePopup(popupProfile));
popupAddCloseButton.addEventListener("click", () => closePopup(popupMesto));
popupImgCloseButton.addEventListener("click", () => closePopup(popupImage));
formProfile.addEventListener("submit", submitForm);
formMesto.addEventListener("submit", handleAddCard);

initialCards.forEach((item) => {
  const card = new Card(item, template, showImage);
  const cardElement = card.getItems();
  list.prepend(cardElement);
});