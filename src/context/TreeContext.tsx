import { ReactNode, createContext } from "react";

export interface TreeProps extends React.ComponentPropsWithoutRef<'div'> {
    value: string
}
export const TreeContext = createContext<TreeProps | null>(null)

export default function TreeContextProvider({ children, props }: { children: ReactNode, props: TreeProps }) {
    return (
        <TreeContext.Provider value={{ ...props }}>
            {children}
        </TreeContext.Provider>
    )
}