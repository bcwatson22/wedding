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

const setHeightVar = ($target, $element, varName) => {

  let height = $target.scrollHeight;

  $element.style.setProperty(varName, height);

  return height;

}

const scrollTo = ($target) => {

  const $elem = (typeof $target === 'object' && $target.hasOwnProperty('current'))
    ? $target.current
    : $target;

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
  setHeightVar,
  scrollTo,
  checkExists,
  isInBrowser,
  hasLocalStorage
};
