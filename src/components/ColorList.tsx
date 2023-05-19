import { useAppContext } from "../hooks/AppContext";
import ColorItem from "./ColorItem";

function ColorList() {
  const { colors } = useAppContext();
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {colors.map((value, index) => (
        <ColorItem key={index} value={value} index={index} />
      ))}
    </div>
  );
}

export default ColorList;
