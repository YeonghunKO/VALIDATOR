import { userInfoTemplate } from '../utils/templates.js';

export default function AddUserInfo({ $target }) {
  const usernameSection = userInfoTemplate({
    id: 'username',
    placeHolder: 'Enter Username',
  });
  const EmailSection = userInfoTemplate({
    id: 'email',
    placeHolder: 'Enter Email',
  });
  const passwordSection = userInfoTemplate({
    id: 'password',
    placeHolder: 'Enter password',
  });
  const confirmPasswordSection = userInfoTemplate({
    id: 'password2',
    placeHolder: 'Confirm Password',
  });

  // 여러개는 append를 쓴다.
  $target.append(
    usernameSection,
    EmailSection,
    passwordSection,
    confirmPasswordSection
  );
}
