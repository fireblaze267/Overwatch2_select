import * as Checkbox from "@radix-ui/react-checkbox";
import check_icon from "../../assets/check_icon.svg";
import "./styles.scss";
export default function CheckboxComponent({ bool }) {
  return (
    <Checkbox.Root checked={bool} className="check-root">
      <Checkbox.Indicator>
        <img src={check_icon} />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
