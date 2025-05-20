import SCSS from "./App.module.scss";
import CountVowelsInString from "./components/CountVowelsInString";
import IsNumberPalindrome from "./components/IsNumberPalindrome";

const App = () => {
  return (
    <div className={SCSS.container}>
      <IsNumberPalindrome />
      {/* <CountVowelsInString /> */}
    </div>
  );
};

export default App;
