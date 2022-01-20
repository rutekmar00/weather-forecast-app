import "./styles.css";
import DateInformation from "../../components/DateInformation";
import Input from "../../components/Input";

export default function Weather(props) {
  return (
    <div className="container">
      <DateInformation />
      <Input jsonData={props.jsonData} setJsonData={props.setJsonData} />
    </div>
  );
}
