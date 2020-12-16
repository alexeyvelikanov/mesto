import {initialCards} from './util.js';

const ds = document.querySelector('.cards__container');

export class Card {
    constructor(data, cardSelector) {
        this._text = data.name;
        this._image = data.link;
        this._cardSelector = cardSelector;
    }
    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.elements__item')
        .cloneNode(true);
        return cardElement;
    }
     generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.elements__image').src = this._image;
        this._element.querySelector('.elements__text').textContent = this._text;
        return this._element;
     }
    _deleteItem() { 
        this._element.remove();
    }

    _likeHandler() { 
        const checkSrc = this._element.querySelector('.elements__like-picture').getAttribute('src'); 
        if (checkSrc === 'images/icon_like.svg') { 
            this._element.querySelector('.elements__like-picture').setAttribute('src', 'images/black-like.svg'); 
        } 
        else { 
            this._element.querySelector('.elements__like-picture').setAttribute('src', 'images/icon_like.svg'); 
        } 
    } 

    _setEventListeners() {
        this._element.querySelector('.elements__trash').addEventListener('click', () => {
            this._deleteItem();
        });
        this._element.querySelector('.elements__like-picture').addEventListener('click', () => {
            this._likeHandler();
        })
    }

}

 initialCards.forEach((item) =>{
     const card = new Card(item, '.elements');
     const cardElement = card.generateCard();
     ds.prepend(cardElement);
 });
