import { createContext, useContext } from "react";

type AppContextType = {
  name: string;
  nickname: string;
  setNickName: (nickname: string) => void;
  addNickName: string;
  setAddNickName: (addNickName: string) => void;
};

const AppContext = createContext<AppContextType>({
  name: "",
  nickname: "",
  setNickName: () => {},
  addNickName: "",
  setAddNickName: () => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export const AppProvider: React.Provider<AppContextType> = AppContext.Provider;
