import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./utils.js";

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

function createCard(item) {
  const card = new Card(item, template, showImage);
  const cardElement = card.getItems();
  list.prepend(cardElement);
}

function handleAddCard(event) {
  event.preventDefault();
  const item = {
    title: inputTitle.value,
    link: inputLink.value,
  };
  createCard(item);
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
  formProfileValidation.resetValidation();
  showPopup(popupProfile);
}

function submitProfileForm(event) {
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

const formProfileValidation = new FormValidator(validationConfig, formProfile);
formProfileValidation.enableValidation();

const formMestoValidation = new FormValidator(validationConfig, formMesto);
formMestoValidation.enableValidation();

editButton.addEventListener("click", assignPopup);
addButton.addEventListener("click", () => {
  formMesto.reset();
  formMestoValidation.resetValidation();
  showPopup(popupMesto);
});
popupCloseButton.addEventListener("click", () => closePopup(popupProfile));
popupAddCloseButton.addEventListener("click", () => closePopup(popupMesto));
popupImgCloseButton.addEventListener("click", () => closePopup(popupImage));
formProfile.addEventListener("submit", submitProfileForm);
formMesto.addEventListener("submit", handleAddCard);

initialCards.forEach((item) => {
   createCard(item);
});