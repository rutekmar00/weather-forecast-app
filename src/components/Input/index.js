import "./styles.css";
import { useState } from "react";

export default function Input(props) {
  const [inputText, setInputText] = useState("");

  const changeInput = (event) => {
    setInputText(event.target.value);
    if (props.jsonData !== null) {
      props.setJsonData(null);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${inputText.trim()}&appid=${
          process.env.REACT_APP_API_KEY
        }`
      );
      const json = await result.json();
      console.log(json);
      if (json.cod === "404" || json.cod === "429") {
        console.log(json.message);
        props.setJsonData(null);
      } else {
        props.setJsonData(json);
      }
      setInputText("");
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="search">
        <form className="form" onSubmit={submitForm}>
          <div className="search-box">
            <input
              type="text"
              onChange={changeInput}
              value={inputText}
              placeholder="Write city"
            ></input>
          </div>
          <button disabled={!(inputText.trim().length > 0)}>Search</button>
        </form>
      </div>
    </>
  );
}
