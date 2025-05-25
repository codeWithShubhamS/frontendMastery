import SCSS from "./FirstNonRepeatingCharacter.module.scss";

const FirstNonRepeatingCharacter = () => {
  function firstNonRepeatingChar(inputParameter) {
    inputParameter = inputParameter.toLowerCase();

    if(inputParameter.length === 1) {
      return null
    }

    let charCount = {};
    for (let i = 0; i < inputParameter.length; i++) {
      if (charCount[inputParameter[i]] >= 1) {
        charCount[inputParameter[i]]++;
      } else {
        charCount[inputParameter[i]] = 1;
      }
    }

    for (let i = 0; i < inputParameter.length; i++) {
      if (charCount[inputParameter[i]] === 1) {
        return inputParameter[i];
      }
    }
    return null;
  }

  function getCharacter() {
    let inputTextValue = document.querySelector(`.${SCSS.input}`).value;
    let character = firstNonRepeatingChar(inputTextValue);
    document.querySelector(
      `.${SCSS.resultCharacter}`
    ).textContent = `The first non-repeating character is ${character}.`;
  }

  return (
    <>
      <h1 className={SCSS.title}>First Non-Repeating Character In a String</h1>
      <input type="text" placeholder="Enter a string" className={SCSS.input} />
      <button className={SCSS.button} onClick={getCharacter}>
        Get Character
      </button>
      <div className={SCSS.resultContainer}>
        <p className={SCSS.resultCharacter}>Character:</p>
      </div>
    </>
  );
};

export default FirstNonRepeatingCharacter;
