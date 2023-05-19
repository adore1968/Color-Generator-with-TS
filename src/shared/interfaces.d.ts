import { ChangeEvent, FormEvent } from "react";

export interface Color {
  alpha: number;
  rgb: number[];
  type: string;
  weight: number;
  hex: string;
}

export type HandleChangeProps = ChangeEvent<HTMLInputElement>;

export type HandleSubmitProps = FormEvent<HTMLFormElement>;

export interface AppContextValue {
  color: string;
  colors: Color[];
  handleChange: ({ target }: HandleChangeProps) => void;
  handleSubmit: (e: HandleSubmitProps) => void;
}
