import Header from './components/Header.js';
import AddUserInfo from './components/AdduserInfo.js';
import Button from './components/buttton.js';

export default function App({ $target }) {
  this.state = [];

  new Header({ $target });
  AddUserInfo({ $target });
  new Button({ $target });
}
