import { useState } from "react";
import { LangContext } from "./context/LangContext";

export default function LangProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState('en');
    return (
        <div>
            <LangContext.Provider value={{ lang, setLang }}>
                {children}
            </LangContext.Provider>
        </div>
        
    );
}

