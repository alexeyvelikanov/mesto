const popupProfile = document.querySelector(".popupProfile");
const popupMesto = document.querySelector(".popupMesto");
const popupImage = document.querySelector(".popupImage");
const popupContent = document.querySelector(".popup__content");
const popupTitle = document.querySelector(".popup__title");
const profileForm = popupProfile.querySelector(".popup__form");
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

const renderList = () => {
  const items = initialCards.map((element) => getItems(element));
  list.append(...items);
};

const handlerRemove = (event) => {
  event.target.closest(".element").remove();
};

const handleLike = function (event) {
  event.target.classList.toggle("element_like");
};

const getItems = (data) => {
  const card = template.content.cloneNode(true);
  card.querySelector(".element__title").innerText = data.title;
  const imageCard = card.querySelector(".element__image");
  imageCard.src = data.link;
  imageCard.alt = data.title;
  imageCard.addEventListener("click", () => showImage(data.link, data.title));
  const likeButton = card.querySelector(".element__button-like");
  likeButton.addEventListener("click", handleLike);
  const removeButton = card.querySelector(".element__delete");
  removeButton.addEventListener("click", handlerRemove);
  return card;
};

function handleAddCard(event) {
  event.preventDefault();
  const item = getItems({
    title: inputTitle.value,
    link: inputLink.value,
  });
  list.prepend(item);
  inputTitle.value = "";
  inputLink.value = "";
  closePopup(popupMesto);
}

function showImage(src, caption) {
  popupPicture.src = src;
  popupCaption.textContent = caption;
  showPopup(popupImage);
  document.addEventListener("keydown", keyHandlerEsc);
  document.addEventListener("click", closeOnClick);
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
  if (evt.key === 'Escape') {
    const activPopup = document.querySelector('.popup_opened');
    closePopup(activPopup);
  }
}

function closeOnClick(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const activPopup = document.querySelector('.popup_opened');
    closePopup(activPopup);
  }
}

function eraseError(form) {
  const inputsList = form.querySelectorAll(".popup__input");
  inputsList.forEach((item ) => {
    const error = form.querySelector(`#${item.id}-error`);
    error.textContent = '';
    item.classList.remove("popup__input_state_invalid");
  });
}

editButton.addEventListener("click", assignPopup);
addButton.addEventListener("click", () => {
  formMesto.reset();
  eraseError(popupMesto);
  showPopup(popupMesto);
});
popupCloseButton.addEventListener("click", () => closePopup(popupProfile));
popupAddCloseButton.addEventListener("click", () => closePopup(popupMesto));
popupImgCloseButton.addEventListener("click", () => closePopup(popupImage));
profileForm.addEventListener("submit", submitForm);
formMesto.addEventListener("submit", handleAddCard);

renderList();





