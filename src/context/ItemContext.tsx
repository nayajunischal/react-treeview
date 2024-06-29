import { ReactNode, createContext } from "react";

export interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    value: string,
    isCollapsed?: boolean,
    isSelected?: boolean
}
export const ItemContext = createContext<ItemProps | null>(null)

export default function ItemContextProvider({ children, props }: { children: ReactNode, props: ItemProps }) {
    return (
        <ItemContext.Provider value={{ ...props }}>
            {children}
        </ItemContext.Provider>
    )
}