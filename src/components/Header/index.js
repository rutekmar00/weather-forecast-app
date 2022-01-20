import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("");
  };

  return (
    <header className="header">
      {location.pathname === "/city" ? (
        <button className="button-back" onClick={goBack}>
          Back
        </button>
      ) : null}
      <h1>Weather Forecast Application</h1>
    </header>
  );
}
