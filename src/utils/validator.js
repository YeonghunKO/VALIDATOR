// new target 으로 검사(푸름이형꺼 참고)
// message constant에 담기
// input값에 대한 validator 만들기

import { ERROR_MESSAGE, CLASSNAME } from './constants.js';
// 사실 component안에 있는 property(setState같은거)를 쓸일이 없으므로 new를 굳이 검사할 필요는 없음.
// 근데 연습상 그냥 해봤음

const isCorrectType = (obj, type) => {
  if (typeof obj === type) {
    return true;
  }
  return false;
};

const isConstructorFunction = (newTarget, constructorFunc) => {
  if (
    newTarget !== constructorFunc ||
    !isCorrectType(constructorFunc, 'function')
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_FUNCTION_CONSTRUCTOR);
  }
};

export { isConstructorFunction };
