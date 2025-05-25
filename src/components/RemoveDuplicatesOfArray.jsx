import SCSS from "./RemoveDuplicatesOfArray.module.scss";

const RemoveDuplicatesOfArray = () => {
  function removeDuplicates(inputArray) {
    let newArray = [];
    for (let i = 0; i < inputArray.length; i++) {
      if (!newArray.includes(inputArray[i])) {
        newArray.push(inputArray[i]);
      }
    }
    return newArray;
  }

  let myValue;

  function handleButton() {
    let inputArray = [1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6];
    myValue = removeDuplicates(inputArray);
    document.querySelector(`.${SCSS.newArrayDuplicatesRemovedStatus}`).textContent = `The New Array with Duplicates Removed is: ${myValue}`;
  }

  return (
    <>
      <h1 className={SCSS.title}>Remove Duplicates from an Array</h1>
      <button className={SCSS.button} onClick={handleButton}>
        Remove Duplicates
      </button>
      <div className={SCSS.resultContainer}>
        <p className={SCSS.newArrayDuplicatesRemovedStatus}>
          The New Array with Duplicates Removed is:
        </p>
      </div>
    </>
  );
};

export default RemoveDuplicatesOfArray;
