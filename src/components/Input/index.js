import "./styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../Error";

export default function Input(props) {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    props.setJsonData(null);
  }, []);

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
        `https://api.openweathermap.org/data/2.5/weather?q=${inputText.trim()}&appid=${
          process.env.REACT_APP_API_KEY
        }`
      );
      const json = await result.json();
      console.log(json);
      if (json.cod === "404" || json.cod === "429") {
        setError(json.message);
        props.setJsonData(null);
      } else {
        props.setJsonData(json);
        setError("");
      }
      setInputText("");
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const selectCity = () => {
    navigate("/city");
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
            />
            {props.jsonData ? (
              <ul className="dropdown">
                <li onClick={selectCity}>
                  <span>{props.jsonData.name}, </span>
                  <span>{props.jsonData.sys.country} </span>
                </li>
              </ul>
            ) : null}
          </div>
          <button disabled={!(inputText.trim().length > 0)}>Search</button>
        </form>
        {error ? <Error message={error} /> : null}
      </div>
    </>
  );
}
