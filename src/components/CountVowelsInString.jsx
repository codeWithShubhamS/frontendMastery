import SCSS from "./CountVowelsInString.module.scss";

const CountVowelsInString = () => {
  function countVowelsAndConsonants(inputParameter) {
    inputParameter = inputParameter.toLowerCase()

    const vowels = ["a", "e", "i", "o", "u"]

    let vowelCount = 0
    let consonantCount = 0;

    for(let i = 0; i < inputParameter.length; i++) {
      if(/[a-z]/.test(inputParameter[i])) {
        vowels.includes(inputParameter[i]) ? vowelCount++ : consonantCount++
      }
    }

    return { vowelCount, consonantCount }

  }

  const displayCount = () => {
    const inputText = document.querySelector(`.${CSS.input}`).value
    const { vowelCount, consonantCount} = countVowelsAndConsonants(inputText) // return an object {}

    document.querySelector(`.${SCSS.resultVowels}`).textContent = `Vowels: ${vowelCount}`
    document.querySelector(`.${SCSS.resultConsonants}`).textContent = `Consonants: ${consonantCount}`
  }


  return (
    <>
      <h1 className={SCSS.title}>Count Vowels In a String</h1>
      <input type="text" placeholder="Enter a string" className={SCSS.input} />
      <button className={SCSS.button} onClick={displayCount}>Count Vowels</button>
      <div className={SCSS.resultContainer}>
        <p className={SCSS.resultVowels}>Vowels: 0</p>
        <p className={SCSS.resultConsonants}>Consonants: 0</p>
      </div>
    </>
  )
}

export default CountVowelsInString;