import Header from "./components/Header";
import Weather from "./containers/Weather";
import WeatherDetails from "./containers/WeatherDetails";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [jsonData, setJsonData] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exace
            path="/"
            element={<Weather jsonData={jsonData} setJsonData={setJsonData} />}
          />
          <Route
            exace
            path="/city"
            element={<WeatherDetails jsonData={jsonData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
