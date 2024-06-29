import { RootContext } from "@/context/RootContext";
import { useContext } from "react";

export function useRoot() {
    const context = useContext(RootContext);
    if (!context)
        throw new Error("Root context must be used within RootContext.Provider")
    return context
}