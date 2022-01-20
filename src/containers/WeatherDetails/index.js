import { useEffect, useState } from "react";
import MainCard from "../../components/MainCard";

export default function WeatherDetails(props) {
  const [detailedData, setDetailedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(props);
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${props.jsonData.coord.lat}&lon=${props.jsonData.coord.lon}&units=metric&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`
      );
      const json = await result.json();
      setDetailedData(json);
      console.log(json);
    };
    if (props.jsonData != null) {
      fetchData();
    }
    return () => {
      setDetailedData(null);
    };
  }, []);

  return (
    <>
      {detailedData ? (
        <MainCard jsonData={detailedData} cityName={props.jsonData.name} />
      ) : null}
    </>
  );
}
