import "./styles.css";

export default function MainCard(props) {
  return (
    <div className="card-container">
      <section className="card">
        <h3>Weather in {props.cityName}</h3>
        <InformationTemperature
          type="temperature"
          symbol={"°C"}
          value={props.jsonData.current.temp}
          icon={props.jsonData.current.weather[0].icon}
        />
        <Information
          type={"Pressure"}
          symbol={"hPa"}
          value={props.jsonData.current.pressure}
        />
        <Information
          type={"Humidity"}
          symbol={"%"}
          value={props.jsonData.current.humidity}
        />
        <Information
          type={"Wind"}
          symbol={"km/h"}
          value={(props.jsonData.current.wind_speed * 3.6).toFixed(2)}
        />
      </section>
    </div>
  );
}

function Information(props) {
  return (
    <div>
      {props.type}: {props.value} {props.symbol}
    </div>
  );
}

function InformationTemperature(props) {
  return (
    <div className={`${props.type}`}>
      <span>
        Temperature: {props.value} {props.symbol}
      </span>
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt="Weather icon"
      />
    </div>
  );
}
