export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    };

    open() {
        this._popupSelector.classList.add("popup_opened");
    };

    close() {
        this._popupSelector.classList.remove("popup_opened");
    };

    setEventListeners() {
        this._popupSelector.querySelector('.popup__close').addEventListener('click', () => this.close());
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains("popup_opened")) {
                this.close();
            }
        })
    };
}
