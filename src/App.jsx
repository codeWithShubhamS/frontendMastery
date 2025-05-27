import SCSS from "./App.module.scss";
// import CountVowelsInString from "./components/CountVowelsInString";
// import IsNumberPalindrome from "./components/IsNumberPalindrome";
// import RemoveDuplicatesOfArray from "./components/RemoveDuplicatesOfArray";
// import FirstNonRepeatingCharacter from "./components/FirstNonRepeatingCharacter";
// import LongestWordInSentence from "./components/LongestWordInSentence"
import GroupWordsByLength from "./components/GroupWordsByLength";

const App = () => {
  return (
    <div className={SCSS.container}>
      {/* <IsNumberPalindrome /> */}
      {/* <CountVowelsInString /> */}
      {/* <FirstNonRepeatingCharacter /> */}
      {/* <LongestWordInSentence /> */}
      <GroupWordsByLength />
    </div>
  );
};

export default App;
