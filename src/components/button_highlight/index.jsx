import "./styles.scss";

export default function Button_highlight({ keyText }) {
  return (
    <div className="highlight-main">
      <label>{keyText}</label>
    </div>
  );
}
