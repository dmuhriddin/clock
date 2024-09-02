import { useState } from "react";
import "./App.css";

function App() {
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [second, setSecond] = useState(null);

  setInterval(() => {
    setHour(new Date().getHours());
    setMinute(new Date().getMinutes());
    setSecond(new Date().getSeconds());
  }, 1000);

  return (
    <div className="app">
      <div className="clock__container">
        <h3>{hour < 10 ? `0${hour}` : hour}</h3>
        <span>:</span>
        <h3>{minute < 10 ? `0${minute}` : minute}</h3>
        <span>:</span>
        <h3>{second < 10 ? `0${second}` : second}</h3>
      </div>
    </div>
  );
}

export default App;
