export const popupProfile = document.querySelector(".popupProfile");
export const popupMesto = document.querySelector(".popupMesto");
export const popupImage = document.querySelector(".popupImage");
export const formProfile = popupProfile.querySelector(".popup__form_profile");
export const nameField = popupProfile.querySelector(".popup__input_type_name");
export const profField = popupProfile.querySelector(".popup__input_type_prof");
export const editButton = document.querySelector(".profile__button");
export const addButton = document.querySelector(".profile__add");
export const title = document.querySelector(".profile__title");
export const subtitle = document.querySelector(".profile__subtitle");
export const inputTitle = popupMesto.querySelector(".popup__input_type_title");
export const inputLink = popupMesto.querySelector(".popup__input_type_link");
export const list = document.querySelector(".elements");
export const template = document.querySelector(".template");
export const formMesto = document.querySelector(".popup__form_mesto");
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__subm",
  inputInvalidClass: "popup__input_state_invalid",
  buttonInvalidClass: "popup__subm_invalid",
};