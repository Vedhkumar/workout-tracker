import { useParams } from "react-router-dom";
function StartRoutine() {
  const { routine } = useParams();
  return <div>Start routine {routine}</div>;
}

export default StartRoutine;
