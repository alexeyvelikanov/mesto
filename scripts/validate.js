export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  _showError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.add(this._config.inputInvalidClass);
    error.textContent = input.validationMessage;
  }

  _hideError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._config.inputInvalidClass);
    error.textContent = "";
  }

  _checkInputValidity(form, input) {
    if (!input.validity.valid) {
      this._showError(form, input);
    } else {
      this._hideError(form, input);
    }
  }

  _setButtonState(button, isActive) {
    if (isActive) {
      button.classList.remove(this._config.buttonInvalidClass);
      button.disabled = false;
    } else {
      button.classList.add(this._config.buttonInvalidClass);
      button.disabled = true;
    }
  }

  _setEventListeners(form, config) {
    const inputsList = form.querySelectorAll(this._config.inputSelector);
    const submitButton = form.querySelector(this._config.submitButtonSelector);
    inputsList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(form, input);
        this._setButtonState(submitButton, form.checkValidity());
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(this._form);
  }
}
