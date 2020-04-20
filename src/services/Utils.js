const Utils = {

  delay(time) {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve();

      }, time);

    });

  },

  setHeightVar($target, $element, varName) {

    let height = $target.scrollHeight;

    $element.style.setProperty(varName, height);

    return height;

  }

};

export default Utils;
