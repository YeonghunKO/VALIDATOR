import { createAndAppendElement } from '../utils/templates.js';
import { isConstructorFunction } from '../utils/validator.js';

export default function Header({ $target }) {
  isConstructorFunction(new.target, Header);
  const header = createAndAppendElement($target, 'h2');
  this.render = () => {
    header.innerHTML = 'Register With Us';
  };

  this.render();
}
