import { useContext } from "react";
import { SurveyContext } from "../../utils/context";

function Results() {
  const { answers } = useContext(SurveyContext);
  console.log("===== answers =====", answers);
  return (
    <div>
      <h1>Résultats</h1>
    </div>
  );
}

export default Results;
