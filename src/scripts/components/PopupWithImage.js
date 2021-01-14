import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._link = popupSelector.querySelector(".popup__image");
        this._title = popupSelector.querySelector(".popup__caption");
    }

    openImage(alt, src) {
        this._link.src = src;
        this._title.alt = alt;
        this._title.textContent = alt;
        super.open();
    }
    setEventListeners() {
        super.setEventListeners();
    }
}