// 'use strict';
import {
  form,
  username,
  email,
  password,
  confirmedPass,
} from './domStorage.js';
import { ERROR_MESSAGE, CLASSNAME, SUCCESS_MESSAGE } from './constants.js';

const getFieldName = input => input.id;

const showError = (input, message) => {
  const formControl = input.parentElement.parentElement;
  formControl.className = CLASSNAME.ERROR;
  const small = formControl.querySelector('small');
  small.innerText = message;
};

const showSuccess = (...inputs) => {
  inputs.forEach(input => {
    const formControl = input.parentElement.parentElement;
    formControl.className = CLASSNAME.SUCCESS;
  });
};

const checkEmail = input => {
  if (input.value) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
      return true;
    } else {
      showError(input, ERROR_MESSAGE.INVALID_EMAIL);
      return false;
    }
  }
};

const checkRequired = inputArr => {
  const valid = Array(inputArr.length).fill(false);
  inputArr.forEach((input, ind) => {
    if (input.value.trim()) {
      showSuccess(input);
      valid[ind] = true;
    } else {
      showError(
        input,
        `${getFieldName(input)} ${ERROR_MESSAGE.INPUT_REQUIRED}`
      );
    }
  });

  return valid.every(x => x);
};

const checkLength = (input, min, max) => {
  if (input.value) {
    if (input.value.length > max) {
      showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
      );
    } else if (input.value.length < min) {
      showError(
        input,
        `${getFieldName(input)} must be over than ${min} characters`
      );
    } else {
      showSuccess(input);
      return true;
    }
  }

  return false;
};

const checkPasswordMatch = (pass1, pass2) => {
  if (pass1.value || pass2.value) {
    if (pass1.value === pass2.value) {
      showSuccess(pass1, pass2);
      return true;
    } else {
      showError(pass2, ERROR_MESSAGE.PASSWORD_NOT_MATCH_MESSAGE);
      return false;
    }
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  const valid = [
    checkRequired([username, email, password, confirmedPass]),
    checkLength(username, 3, 15),
    checkEmail(email),
    checkPasswordMatch(password, confirmedPass),
    checkLength(password, 6, 15),
  ].every(check => check);

  if (valid) {
    alert(`${username.value} ${SUCCESS_MESSAGE.REGISTERED_COMPLETE_MESSGAE}`);
  }
});

form.addEventListener('click', e => {
  const eye = e.target;
  const eyeId = eye.id === 'togglePassword';
  const input = eye.previousElementSibling;
  if (eyeId) {
    const inputType =
      input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', inputType);

    eye.classList.toggle('bi-eye');
  }
});
