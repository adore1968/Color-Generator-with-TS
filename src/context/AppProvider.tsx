import { useState } from "react";
import { AppContext } from "../hooks/AppContext";
import {
  Color,
  HandleChangeProps,
  HandleSubmitProps,
} from "../shared/interfaces";
import Values from "values.js";

type Props = { children: JSX.Element };

const colorsInitialState = new Values("#f12").all(10);

export function AppProvider({ children }: Props) {
  const [color, setColor] = useState<string>("");
  const [colors, setColors] = useState<Color[]>(colorsInitialState);

  const handleChange = ({ target }: HandleChangeProps) => {
    setColor(target.value);
  };

  const handleSubmit = (e: HandleSubmitProps) => {
    e.preventDefault();
    try {
      if (color && color.includes("#")) {
        const newColors = new Values(color).all(10);
        setColors(newColors);
      }
    } catch (error) {
      console.log(error);
    }
    setColor("");
  };

  return (
    <AppContext.Provider
      value={{
        color,
        colors,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
