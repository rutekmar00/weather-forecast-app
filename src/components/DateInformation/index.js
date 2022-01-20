import "./styles.css";

export default function DateInformation() {
  return (
    <div className="date-information">
      Today is {new Date().toLocaleDateString()}
    </div>
  );
}
