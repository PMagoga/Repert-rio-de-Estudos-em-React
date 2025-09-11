import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = () => {
  return <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form action="" id="imc-form">
      <div className="form-inputs">
        <div className="form-control">
          <label htmlFor="height">Altura (m)</label>
          <input type="number" id="height" placeholder="Ex: 1,75" />
        </div>
        <div className="form-control">
          <label htmlFor="weight">Peso (kg)</label>
          <input type="number" id="weight" placeholder="Ex: 75,5" />
        </div>
        <div className="action-control">
          <Button id="cal-btn" text="Calcular IMC" />
          <Button id="clear-btn" text="Limpar" />
        </div>
      </div>
    </form>
  </div>
}

export default ImcCalc