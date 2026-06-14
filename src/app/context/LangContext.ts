import { createContext } from "react";

export type LangContextType = {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
};

export const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
});
