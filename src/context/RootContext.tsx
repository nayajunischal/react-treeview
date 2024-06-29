import { RootProps } from "@/components/core/xtree";
import { ReactNode, createContext } from "react";

export const RootContext = createContext<RootProps | null>(null);

export default function RootContextProvider({ children, props }: { children: ReactNode, props: RootProps }) {
    return (
        <RootContext.Provider value={{ ...props }}>
            {children}
        </RootContext.Provider>
    )
}