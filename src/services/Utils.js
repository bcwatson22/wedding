const delay = (time) => {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve();

    }, time);

  });

}

const cleanResponse = (obj, key) => {

  const { __typename, ...cleaned } = obj;

  return cleaned;

}

const checkCurrentProp = ($target) => {

  const $elem = (typeof $target === 'object' && $target.hasOwnProperty('current'))
    ? $target.current
    : $target;

  return $elem;

}

const getHeight = ($element) => {

  const $elem = checkCurrentProp($element);
  const height = $elem.scrollHeight;

  return height;

}

const setHeight = ($element, variable, height) => {

  const $elem = checkCurrentProp($element);

  $elem.style.setProperty(variable, height);

  return $elem;

}

const getSetHeight = ($element, $binding, variable) => {

  const $elem = checkCurrentProp($element);
  const $bind = checkCurrentProp($binding);
  const height = getHeight($elem);

  setHeight($bind, variable, height);

  return height;

}

const scrollTo = ($target) => {

  const $elem = checkCurrentProp($target);

  $elem.scrollIntoView({ behavior: 'smooth' });

  return $elem;

}

const checkExists = (thingToCheck) => {

  return typeof thingToCheck !== 'undefined';

}

const isInBrowser = () => {

  return typeof window !== 'undefined';

}

const hasLocalStorage = () => {

  return typeof localStorage !== 'undefined';

}

export {
  delay,
  cleanResponse,
  getHeight,
  setHeight,
  getSetHeight,
  scrollTo,
  checkExists,
  isInBrowser,
  hasLocalStorage
};
