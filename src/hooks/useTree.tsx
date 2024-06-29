import { TreeContext } from "@/context/TreeContext";
import { useContext } from "react";

export default function useTree() {
    const context = useContext(TreeContext);
    if (!context)
        throw new Error("Tree context must be used within TreeContext.Provider")
    return context
}