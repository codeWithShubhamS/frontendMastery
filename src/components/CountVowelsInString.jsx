import CSS from "./CountVowelsInString.module.css";

const CountVowelsInString = () => {
  function countLetters(originalString) {
    originalString = originalString.toLowerCase()

    const vowels = ["a", "e", "i", "o", "u"]

    let vowelCount = 0
    let consonantCount = 0;

    for(let i = 0; i < originalString.length; i++) {
      if(/[a-z]/.test(originalString[i])) {
        vowels.includes(originalString[i]) ? vowelCount++ : consonantCount++
      }
    }

    return { vowelCount, consonantCount }

  }

  const displayCount = () => {
    const inputText = document.querySelector(`.${CSS.input}`).value
    const { vowelCount, consonantCount} = countLetters(inputText) // return an object {}

    document.querySelector(`.${CSS.resultVowels}`).textContent = `Vowels: ${vowelCount}`
    document.querySelector(`.${CSS.resultConsonants}`).textContent = `Consonants: ${consonantCount}`
  }


  return (
    <>
      <h1 className={CSS.title}>Count Vowels In a String</h1>
      <input type="text" placeholder="Enter a string" className={CSS.input} />
      <button className={CSS.button} onClick={displayCount}>Count Vowels</button>
      <div className={CSS.resultContainer}>
        <p className={CSS.resultVowels}>Vowels: 0</p>
        <p className={CSS.resultConsonants}>Consonants: 0</p>
      </div>
    </>
  )
}

export default CountVowelsInString;