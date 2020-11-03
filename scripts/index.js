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



function showPopup() {
    popup.classList.add('popup_opened');
    nameField.textContent = title.value;
    profField.textContent = subtitle.value; 
    console.log("rfd");
    
    
    //popup.removeEventListener('click', showPopup);
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

EditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);


function submitForm(event) {
    event.preventDefault();
    title.textContent = nameField.value;
    subtitle.textContent = profField.value;
    closePopup();
}

form.addEventListener('submit', submitForm);
