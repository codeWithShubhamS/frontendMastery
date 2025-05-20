import SCSS from "./IsNumberPalindrome.module.scss";

const IsNumberPalindrome = () => {

  function isPalindrome(inputParamter) {
    inputParamter = Number(inputParamter)
    if(isNaN(inputParamter)) {
      return `The given input (${inputParamter}) is not a number, please enter a number.`
    }

    if(inputParamter < 0) {
      return `The given input (${inputParamter}) is not a positive number, please enter a positive number.`
    }

    let originalNum = inputParamter
    let reversedNum = 0

    while(inputParamter > 0) {
      let lastDigit = inputParamter % 10
      reversedNum = reversedNum * 10 + lastDigit
      inputParamter = Math.floor(inputParamter/10)
    }

    console.log(typeof originalNum, typeof reversedNum)

    if(originalNum === reversedNum) {
      return `The given input number (${originalNum}) is a palindrome.`
    } else {
      return `The given input number (${originalNum}) is not a palindrome.`
    }
  }

  function handleButton() {
    const inputValue = document.querySelector(`.${SCSS.input}`).value
    const isPalindromeValue = isPalindrome(inputValue)
    console.log(isPalindromeValue)
    document.querySelector(`.${SCSS.isPlaindromeStatus}`).textContent = `${isPalindromeValue}`
  }

  return (
    <>
      <h1 className={SCSS.title}>Check whether a given number is Palindrome or Not?</h1>
      <input type="text" placeholder="Enter a number" className={SCSS.input} />
      <button className={SCSS.button} onClick={handleButton}>Palindrome Check</button>
      <div className={SCSS.resultContainer}>
        <p className={SCSS.isPlaindromeStatus}>The Entered Number is Palindrome</p>
      </div>
    </>
  );
};

export default IsNumberPalindrome;
