import "./infoItem.css";
export default function (prop) {
  return (
    <div className="info-item">
      <img src={prop.icon} />
      <p>{prop.text}</p>
    </div>
  );
}
