<<<<<<< HEAD
let popup = document.querySelector('.popup');
let popupContent = document.querySelector('.popup__content');
let popupTitle = document.querySelector('.popup__title');
let form = document.querySelector('.popup__form');
let nameField = document.querySelector('.popup__input_type_name');
let profField = document.querySelector('.popup__input_type_prof');
let popupCloseButton = document.querySelector('.popup__close');
let EditButton = document.querySelector('.profile__button');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
=======
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupTitle = document.querySelector('.popup__title');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_type_name');
const profField = document.querySelector('.popup__input_type_prof');

const popupCloseButton = document.querySelector('.popup__close');

const EditButton = document.querySelector('.profile__button');


>>>>>>> 7492cdbce77eb32ddb25c9f112c235fb301f02e9

function showPopup() {
    nameField.value = title.textContent;
    profField.value = subtitle.textContent;
    popup.classList.add('popup_opened');
<<<<<<< HEAD
=======
    nameField.value= title.textContent;
    profField.value = subtitle.textContent; 
>>>>>>> 7492cdbce77eb32ddb25c9f112c235fb301f02e9
    //popup.removeEventListener('click', showPopup);
}

function closePopup() {
    popup.classList.remove('popup_opened'); 
}


function submitForm(event) {
    event.preventDefault();
    title.textContent = nameField.value;
    subtitle.textContent = profField.value;
    closePopup();
}

EditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', submitForm);

