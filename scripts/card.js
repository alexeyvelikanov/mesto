export class Card {
    constructor(data, cardSelector, showImage) {
      this._title = data.title;
      this._image = data.link;
      this._showImage = showImage;
      this._cardSelector = cardSelector;
    }
  
    _handlerRemove() {
      this._card.remove();
    }
  
    _handleLike() {
      this._card
        .querySelector(".element__button-like")
        .classList.toggle("element_like");
    }
  
    _setEventListener() {
      this._card
        .querySelector(".element__image")
        .addEventListener("click", () =>
          this._showImage(this._image, this._title)
        );
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
      this._imageCard.src = this._image;
      this._imageCard.alt = this._title;
  
      this._setEventListener();
  
      return this._card;
    }
  }