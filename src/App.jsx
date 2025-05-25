import SCSS from "./App.module.scss";
// import CountVowelsInString from "./components/CountVowelsInString";
// import IsNumberPalindrome from "./components/IsNumberPalindrome";
import RemoveDuplicatesOfArray from "./components/RemoveDuplicatesOfArray";

const App = () => {
  return (
    <div className={SCSS.container}>
      {/* <IsNumberPalindrome /> */}
      {/* <CountVowelsInString /> */}
      <RemoveDuplicatesOfArray />
    </div>
  );
};

export default App;
