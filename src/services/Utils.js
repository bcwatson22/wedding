const delay = (time) => {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve();

    }, time);

  });

}

const setHeightVar = ($target, $element, varName) => {

  let height = $target.scrollHeight;

  $element.style.setProperty(varName, height);

  return height;

}

const checkExists = (thingToCheck) => {

  return typeof thingToCheck !== 'undefined';

}

const scrollTo = ($target) => {

  $target.scrollIntoView({ behavior: 'smooth' });

  return $target

}

const hasLocalStorage = () => {

  return typeof localStorage !== 'undefined';

}

export {
  delay,
  setHeightVar,
  checkExists,
  scrollTo,
  hasLocalStorage
};
