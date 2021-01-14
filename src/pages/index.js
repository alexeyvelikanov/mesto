import './index.css';
import { Card } from "../scripts/components/card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { initialCards } from "../scripts/utils/utils.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { popupProfile, popupMesto, popupImage, formProfile, nameField, profField, editButton, addButton, title,
  subtitle, inputTitle, inputLink, list, template, formMesto, validationConfig } from "../scripts/utils/constants.js";

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

function createCard(item) {
  const card = new Card({
    data:item,
    handleCardClick: () => {
      popupWithImage.openImage(item.title, item.link)
    }
  }, template);
  const cardElement = card.getView();
  return cardElement;
}
const cardList = new Section({
  data: initialCards,
  renderer:(item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement, true);
  }
}, list);

const userInfo = new UserInfo(title, subtitle);
const popupWithProfile = new PopupWithForm({
  popupSelector: popupProfile,
  handleFormSubmit: () => {
    userInfo.setUserInfo(nameField, profField);
    popupWithProfile.close();
  }
})
popupWithProfile.setEventListeners();

const popupWithMesto = new PopupWithForm({
  popupSelector: popupMesto,
  handleFormSubmit: () => {
    const item = {
      title: inputTitle.value,
      link: inputLink.value
    }
   const card = createCard(item); 
   cardList.addItem(card, false);
   popupWithMesto.close();
  }
});
popupWithMesto.setEventListeners();

const formProfileValidation = new FormValidator(validationConfig, formProfile);
formProfileValidation.enableValidation();
const formMestoValidation = new FormValidator(validationConfig, formMesto);
formMestoValidation.enableValidation();

addButton.addEventListener("click", () => {
  formMesto.reset();
  formMestoValidation.resetValidation();
  popupWithMesto.open();
});

editButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  nameField.value = info.title;
  profField.value = info.subtitle;
  formProfileValidation.resetValidation();
  popupWithProfile.open();
});

cardList.renderItems();