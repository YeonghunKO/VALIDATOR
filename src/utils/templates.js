function createAndAppendElement($target, element) {
  const createdEle = document.createElement(element);

  $target.appendChild(createdEle);

  return createdEle;
}

const stringToHTML = str => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc.body.firstElementChild;
};

const userInfoTemplate = ({ id, placeHolder }) => {
  const template = `
  <div class="form__control">
                                      
    <label for="${id}">${placeHolder.split(' ').splice(1)}</label>
    <p class="input-box">
    <input type="${
      id.includes('password') ? 'password' : 'type'
    }" id="${id}" placeholder="${placeHolder}" />
    ${
      id === 'password' || id === 'password2'
        ? '<i class="bi bi-eye-slash" id="togglePassword"></i>'
        : ''
    }
    </p>
   
    <small>Error Message</small>
  </div>
`;

  return stringToHTML(template);
};

export { createAndAppendElement, userInfoTemplate };
