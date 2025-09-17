import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./components/icon";

export default function App() {
  return (
    <div>
      <Text variant={"body-md-bold"}>oi</Text>

      <Icon svg={TrashIcon} className="fill-green-base" />
    </div>
  );
}
