import { useState } from "react";
import "./devContainer.css";
function DevContainer() {
  const [w, setW] = useState(0);
  function windowInfo() {
    setW(`${window.innerWidth} x ${window.innerHeight}`);
  }
  setInterval(windowInfo, 100);
  return <div className="devTool">{w}</div>;
}
export default DevContainer;
