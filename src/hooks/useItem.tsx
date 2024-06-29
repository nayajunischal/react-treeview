import { ItemContext } from "@/context/ItemContext";
import { useContext } from "react";

export default function useItem() {
    const context = useContext(ItemContext);
    if (!context)
        throw new Error("Item context must be used within ItemContext.Provider")
    return context
}