import Header from "./components/Header";
import Weather from "./containers/Weather";
import { useState } from "react";

function App() {
  const [jsonData, setJsonData] = useState(null);

  return (
    <>
      <Header />
      <Weather jsonData={jsonData} setJsonData={setJsonData} />
    </>
  );
}

export default App;
