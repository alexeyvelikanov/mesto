export class Card {
    constructor({ data, handleCardClick }, cardSelector) {
      this._title = data.title;
      this._link = data.link;
      this._handleCardClick = handleCardClick;
      this._handleCardClickHandler = this._handleCardClickHandler.bind(this)
      this._cardSelector = cardSelector;
    }
  
    _handlerRemove() {
      this._card.remove();
      this._card = '';
    }
  
    _handleLike() {
      this._card
        .querySelector(".element__button-like")
        .classList.toggle("element_like");
    }
    
    _handleCardClickHandler() {
      this._handleCardClick(this._title, this._link);
    }

    _setEventListener() {
      this._card
        .querySelector(".element__image")
        .addEventListener('click', () => this._handleCardClickHandler());
      this._card
        .querySelector(".element__button-like")
        .addEventListener("click", () => this._handleLike());
      this._card
        .querySelector(".element__delete")
        .addEventListener("click", () => this._handlerRemove());
    }
  
    getItems() {
      this._card = this._cardSelector.content
        .querySelector(".element")
        .cloneNode(true);
      this._card.querySelector(".element__title").innerText = this._title;
      this._imageCard = this._card.querySelector(".element__image");
      this._imageCard.src = this._link;
      this._imageCard.alt = this._title;
      this._setEventListener();
      return this._card;
    }
  }