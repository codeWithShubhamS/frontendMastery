import SCSS from "./GroupWordsByLength.module.scss";

const GroupWordsByLength = () => {

  function getObjectCountWithWords(inputParamter) {
    let words = []
    let currentWord = ""

    for(let i = 0; i < inputParamter.length; i++) {
      let character = inputParamter[i]

      if(/[a-zA-Z0-9']/.test(character)) {
        currentWord += character
      } else {
        words.push(currentWord)
        currentWord = ""
      }
    }

    if(currentWord.length > 0) {
      words.push(currentWord)
    }

    let charCountObject = {}
    for(let i = 0; i < words.length; i++) {
      if(charCountObject[words[i].length]) {
        charCountObject[words[i].length].push(words[i])
      } else {
        charCountObject[words[i].length] = [words[i]]
      }
    }

    console.log(charCountObject)
    return charCountObject
  }

  function handleGroupWords() {
    let inputTextValue = document.querySelector(`.${SCSS.input}`).value.trim()
    let groupedWords = JSON.stringify(getObjectCountWithWords(inputTextValue))
    document.querySelector(`.${SCSS.resultWord}`).textContent = `Group words by length: ${groupedWords}`
  }

  return (
    <>
      <h1 className={SCSS.title}>Group words by length in a Sentence</h1>
      <input type="text" placeholder="Enter a string" className={SCSS.input} />
      <button className={SCSS.button} onClick={handleGroupWords}>Longest Word</button>
      <div className={SCSS.resultContainer}>
        <p className={SCSS.resultWord}>Group words by length:</p>
      </div>
    </>
  );
};

export default GroupWordsByLength;
