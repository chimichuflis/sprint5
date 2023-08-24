import "./infoCard.css";
import InfoItem from "./InfoItem";
import iconLocation from "/icons/icon-location.svg";
import iconPhone from "/icons/icon-phone.svg";
import iconEmail from "/icons/icon-email.svg";

export default function () {
  return (
    <div className="info-card">
      <div>
        <InfoItem
          icon={iconLocation}
          text="Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
      </div>
      <div>
        <InfoItem icon={iconPhone} text="+1-543-123-4567" />
        <InfoItem icon={iconEmail} text="example@fylo.com" />
      </div>
    </div>
  );
}
