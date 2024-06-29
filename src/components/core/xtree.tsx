import ItemContextProvider, { ItemProps } from "@/context/ItemContext";
import RootContextProvider from "@/context/RootContext";
import useItem from "@/hooks/useItem";
import { useRoot } from "@/hooks/useRoot";
import React, { ForwardedRef, ReactElement, ReactNode, forwardRef } from "react";

export interface RootProps extends React.ComponentPropsWithoutRef<'div'> {
    selected: string[],
    collapsed: string[],
    onSelectedChange: React.Dispatch<React.SetStateAction<string[]>>,
    onCollapsedChange: React.Dispatch<React.SetStateAction<string[]>>
}

export const Root = forwardRef<HTMLDivElement, RootProps>(
    (props, ref: ForwardedRef<HTMLDivElement>): ReactElement | null => {
        const { selected, collapsed, onSelectedChange, onCollapsedChange, ...rest } = props;
        return (
            <RootContextProvider props={{ selected, collapsed, onSelectedChange, onCollapsedChange }}>
                <div ref={ref} {...rest}>
                    {props.children}
                </div>
            </RootContextProvider>
        )
    }
)

export interface TreeProps extends React.ComponentPropsWithoutRef<'div'> {
    children: ReactNode
}
export const Tree = forwardRef(function Tree(props: TreeProps, ref: ForwardedRef<HTMLDivElement>) {
    const { children, ...rest } = props;
    return (
        <div ref={ref} {...rest}>
            {props.children}
        </div>
    )
})

export const Item = forwardRef(function Item(props: ItemProps, ref: ForwardedRef<HTMLDivElement>) {
    const { value, children } = props;
    const { collapsed, selected } = useRoot();
    const isCollapsed = collapsed.includes(value);
    const isSelected = selected.includes(value);
    return (
        <ItemContextProvider props={{ value, isCollapsed, isSelected }}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === Tree)
                    return isCollapsed && child;

                return child
            })}
        </ItemContextProvider>

    )
})

export const Trigger = forwardRef(function Trigger(props: { children: ReactNode }, ref: ForwardedRef<HTMLButtonElement>) {
    const { onSelectedChange, onCollapsedChange } = useRoot();
    const { value, isCollapsed, isSelected } = useItem();
    return (
        <button
            ref={ref}
            type="button"
            onClick={(event) => handleCollapse(event, onSelectedChange, onCollapsedChange, value)}
            data-collapsed={isCollapsed}
            data-selected={isSelected}>
            {props.children}
        </button>
    )
})

export const ItemText = forwardRef(function ItemText(props: { children: ReactNode }, ref: ForwardedRef<HTMLParagraphElement>) {
    const { onSelectedChange } = useRoot();
    const { value } = useItem();
    return (
        <p ref={ref} className="cursor-pointer" onClick={(event) => handleSelected(event, onSelectedChange, value)}>
            {props.children}
        </p>
    )
})

const handleSelected = (event: any, setSelected: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    event.preventDefault();
    event.stopPropagation();
    setSelected([value]);
}


const handleCollapse = (event: any, setSelected: React.Dispatch<React.SetStateAction<string[]>>, setCollapsed: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    event.preventDefault();
    event.stopPropagation();

    console.log({ 'Incoming value': value })
    setCollapsed((prevCollapsed) => {
        // Check if the value already exists in the array
        if (prevCollapsed.includes(value)) {
            // Remove the value if it already exists
            return prevCollapsed.filter(val => val !== value);
        }
        // Add the new value if it doesn't already exist
        return [...prevCollapsed, value];
    });
    setSelected([value]);
};
