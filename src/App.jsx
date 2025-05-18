import CSS from "./App.module.css";
import CountVowelsInString from "./components/CountVowelsInString";

const App = () => {
  return (
    <div className={CSS.container}>
      <CountVowelsInString />
    </div>
  )
}

export default App;