const popupProfile = document.querySelector(".popupProfile");
const popupMesto = document.querySelector(".popupMesto");
const popupContent = document.querySelector(".popup__content");
const popupTitle = document.querySelector(".popup__title");
const form = document.querySelector(".popup__form");
const nameField = document.querySelector(".popup__input_type_name");
const profField = document.querySelector(".popup__input_type_prof");
const popupCloseButton = document.querySelector(".popup__close");
const popupAddCloseButton = document.querySelector(".popup__close_mesto");
const editButton = document.querySelector(".profile__button");
const addButton = document.querySelector(".profile__add");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const inputTitle = document.querySelector(".popup__input_type_title");
const inputLink = document.querySelector(".popup__input_type_link");
const gallery = document.querySelector(".gallery");
const closeGalleryButton = document.querySelector(".gallery__close");
const list = document.querySelector(".elements");
const template = document.querySelector(".template");
const formMesto = document.querySelector(".popup__form_mesto");
const galleryImage = document.querySelector(".gallery__image");
const galleryTitle = document.querySelector(".gallery__title");
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

const getLike = function () {
  this.classList.toggle("element_like");
};

const getItems = (data) => {
  const card = template.content.cloneNode(true);
  card.querySelector(".element__title").innerText = data.title;
  card.querySelector(".element__back").src = data.link;

  const likeButton = card.querySelector(".element__button-like");
  likeButton.addEventListener("click", getLike);

  const removeButton = card.querySelector(".element__delete");
  removeButton.addEventListener("click", handlerRemove);

  const imageCard = card.querySelector(".element__back");
  imageCard.addEventListener("click", () => showImage(data.link, data.title));

  return card;
};

function bindHandlers(event) {
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
  galleryImage.src = src;
  galleryTitle.textContent = caption;
  gallery.classList.add("gallery_opened");
}

function showPopup(form) {
  form.classList.add("popup_opened");
  eraseError();
  document.addEventListener("keydown", keyHandlerEsc);
  document.addEventListener("click", closeOnClick);
}

function closePopup(form) {
  form.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyHandlerEsc);
  document.removeEventListener("click", closeOnClick);
}

function closeGallery() {
  gallery.classList.remove("gallery_opened");
}

function assignPopup() {
  nameField.value = title.textContent;
  profField.value = subtitle.textContent;
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

function eraseError() {
  const input = form.querySelectorAll(".popup__input");
  input.forEach((item ) => {
    const error = form.querySelector(`#${item.id}-error`);
    error.textContent = '';
    item.classList.remove("popup__input_state_invalid");
  });
}

editButton.addEventListener("click", assignPopup);
addButton.addEventListener("click", () => showPopup(popupMesto));
popupCloseButton.addEventListener("click", () => closePopup(popupProfile));
popupAddCloseButton.addEventListener("click", () => closePopup(popupMesto));
closeGalleryButton.addEventListener("click", () => closeGallery());
form.addEventListener("submit", submitForm);
formMesto.addEventListener("submit", bindHandlers);

renderList();





