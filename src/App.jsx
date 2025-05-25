import SCSS from "./App.module.scss";
// import CountVowelsInString from "./components/CountVowelsInString";
// import IsNumberPalindrome from "./components/IsNumberPalindrome";
// import RemoveDuplicatesOfArray from "./components/RemoveDuplicatesOfArray";
import FirstNonRepeatingCharacter from "./components/FirstNonRepeatingCharacter";

const App = () => {
  return (
    <div className={SCSS.container}>
      {/* <IsNumberPalindrome /> */}
      {/* <CountVowelsInString /> */}
      <FirstNonRepeatingCharacter />
    </div>
  );
};

export default App;
