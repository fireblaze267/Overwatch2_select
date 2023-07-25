import Button_highlight from "../button_highlight";
import "./styles.scss";
export default function Bottom_func() {
  return (
    <div className="bottom-main">
      <div className="bottom-left">
        <Button_highlight keyText={"Enter"} />
        <label>Bate-Papo</label>
      </div>

      <div className="bottom-right">
        <Button_highlight keyText={"Esc"} />
        <label>Voltar</label>
      </div>
    </div>
  );
}
