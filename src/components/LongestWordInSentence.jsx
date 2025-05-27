import SCSS from "./LongestWordInSentence.module.scss";

const LongestWordInSentence = () => {

  function getLongestWord(inputParamter) {
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

    let wordsAndCount = {}

    for(let i = 0; i < words.length; i++) {
      wordsAndCount[words[i]] = words[i].length
      console.log(wordsAndCount)
    }

    let biggestWord = ""
    let wordss = Object.keys(wordsAndCount)
    for(let i = 0; i < wordss.length; i++) {
      if(wordss[i].length > biggestWord.length){
        biggestWord = wordss[i]
      }
    }

    console.log(biggestWord)
    return biggestWord
  }

  function handleLongestWord() {
    let inputTextValue = document.querySelector(`.${SCSS.input}`).value.trim()
    let longestWord = getLongestWord(inputTextValue)
    document.querySelector(`.${SCSS.resultWord}`).textContent = `Longest Word in a Sentence: ${longestWord}`
  }

  return (
    <>
      <h1 className={SCSS.title}>Longest word in a Sentence</h1>
      <input type="text" placeholder="Enter a string" className={SCSS.input} />
      <button className={SCSS.button} onClick={handleLongestWord}>Longest Word</button>
      <div className={SCSS.resultContainer}>
        <p className={SCSS.resultWord}>Longest Word:</p>
      </div>
    </>
  );
};

export default LongestWordInSentence;
