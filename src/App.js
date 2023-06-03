import "./App.css";
import { useEffect } from "react";

function App() {
  const min = 1;
  const cronIntervalInMillis = min * 60 * 1000;
  const hitBackendAPi = async () => {
    console.log("Hitting backend api periodically.");
    const response = await fetch(
      "https://fastmart-backend.onrender.com/user/check/invalidmail@email.com"
    );
    const data = await response.json();
  };
  const cronJob = () => {
    setInterval(() => {
      hitBackendAPi();
    }, cronIntervalInMillis);
  };

  useEffect(() => {
    cronJob();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
