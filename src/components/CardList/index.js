import "./styles.css";

export default function CardList(props) {
  return (
    <>
      <div className="card-list">
        <h4>Weather in upcoming days</h4>
        <div className="list-items">
          {props.dailyData.map((dayData) => {
            return <Card data={dayData} key={dayData.dt} />;
          })}
        </div>
      </div>
    </>
  );
}

function Card({ data }) {
  return (
    <div className="card-day-item">
      <div>{new Date(data.dt * 1000).toLocaleDateString()}</div>
      <span className="image-span">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt="Weather icon"
        />
      </span>
      <div>{((data.temp.max + data.temp.min) / 2).toFixed(2)} °C</div>
    </div>
  );
}
