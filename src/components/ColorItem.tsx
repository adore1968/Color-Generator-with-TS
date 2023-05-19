import { useState, useEffect } from "react";
import { Color } from "../shared/interfaces";

type Props = {
  value: Color;
  index: number;
};

function ColorItem({ value, index }: Props) {
  const [showCopy, setShowCopy] = useState<boolean>(false);
  const bgColor = value.rgb.join(",");

  const handleCopy = () => {
    navigator.clipboard.writeText(`#${value.hex}`);
    setShowCopy(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCopy(false);
    }, 3500);
    return () => clearTimeout(timeout);
  }, [showCopy]);

  return (
    <div
      style={{ backgroundColor: `rgb(${bgColor})` }}
      className={`${
        index > 10 && "text-white"
      } min-h-[165px] cursor-pointer p-5`}
      onClick={handleCopy}
    >
      <div>
        <h4 className="mb-1 text-xl sm:text-2xl">{value.weight}%</h4>
        <p className="text-lg sm:text-xl">#{value.hex}</p>
      </div>
      {showCopy && (
        <div className="mt-5">
          <p className="text-lg uppercase sm:text-xl">copied to clipboard</p>
        </div>
      )}
    </div>
  );
}

export default ColorItem;
