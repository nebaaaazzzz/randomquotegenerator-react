import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [advice, setAdvice] = useState();

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      setAdvice(res.data.slip.advice);
    });
  }, []);
  function handleClick() {
    console.log("hello wld");
    axios.get("https://api.adviceslip.com/advice", {}).then((res) => {
      setAdvice(res.data.slip.advice);
    });
  }
  return (
    <div className="app">
      <div className="card md:w-2/4 md:h-1/3 sm:w-2/3 min-w-max">
        <h1 className="heading">{advice}</h1>
        <button
          className="button md:w-1/3 md:h-10 sm:w-2/4 "
          onClick={handleClick}
        >
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
