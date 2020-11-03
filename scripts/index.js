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

function showPopup() {
    nameField.value = title.textContent;
    profField.value = subtitle.textContent;
    popup.classList.add('popup_opened');
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

