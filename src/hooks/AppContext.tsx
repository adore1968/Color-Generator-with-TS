import { createContext, useContext } from "react";
import { AppContextValue } from "../shared/interfaces";

export const AppContext = createContext<AppContextValue>({} as AppContextValue);

export const useAppContext = () => {
  return useContext(AppContext);
};
