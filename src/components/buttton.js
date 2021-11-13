import { createAndAppendElement } from '../utils/templates.js';
import { isConstructorFunction } from '../utils/validator.js';

export default function Button({ $target }) {
  isConstructorFunction(new.target, Button);
  const button = createAndAppendElement($target, 'button');

  this.render = () => {
    button.setAttribute('type', 'submit');
    button.innerText = 'Submit';
  };

  this.render();
}
