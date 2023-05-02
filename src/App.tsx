import { useState } from "react";
import { Home } from "./Components/Home";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <title>ChatBot</title>
        <meta charSet="utf-8" />
        <meta name="description" content="ChatBot application" />
        <link rel="icon" type="image/png" href="../public/chatbot.png"/>
      </Helmet>
      <div className="App">
        <Home></Home>
      </div>
    </>
  );
}

export default App;
