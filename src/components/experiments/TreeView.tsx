import { useEffect, useState } from "react"
import { Root, Tree, Item, Trigger, ItemText } from "../core/xtree"
import { CircleMinus, CirclePlus } from 'lucide-react';
import { useSelection } from "@/context/SelectionContext";

export default function TreeView() {
    const [collapsed, setCollapsed] = useState<string[]>([])
    const [selected, setSelected] = useState<string[]>([])

    const { setHighlighted } = useSelection();

    useEffect(() => {
        console.log({ collapsed, selected })
        setHighlighted(selected[0])
    }, [collapsed, selected])

    const isCollapsed = (value: string) => collapsed.includes(value);

    return (
        <Root
            selected={selected}
            collapsed={collapsed}
            onSelectedChange={setSelected}
            onCollapsedChange={setCollapsed}
            className="w-64 h-screen  bg-gray-200">
            <Tree className="pl-3 pt-4 flex flex-col bg-gray-800 text-white">
                <Item value="TECH" >
                    <Trigger>
                        <div className="flex gap-1">
                            {isCollapsed("TECH") ? (
                                <CircleMinus className="text-gray-400 p-1" />
                            ) : (
                                <CirclePlus className="text-gray-400 p-1" />
                            )}
                            <p> TECH </p>
                        </div>
                    </Trigger>
                    <Tree className="pl-9 flex flex-col bg-gray-700">
                        <Item value="Company Maintenance">
                            <ItemText>Company Maintenance</ItemText>
                        </Item>
                        <Item value="Employees">
                            <Trigger>
                                <div className="flex gap-1">
                                    {isCollapsed("Employees") ? (
                                        <CircleMinus className="text-gray-400 p-1" />
                                    ) : (
                                        <CirclePlus className="text-gray-400 p-1" />
                                    )}
                                    <p> Employees </p>
                                </div>
                            </Trigger>
                            <Tree className="pl-9 flex flex-col bg-gray-600">
                                <Item value="Reports">
                                    <Trigger>
                                        <div className="flex gap-1">
                                            {isCollapsed("Reports") ? (
                                                <CircleMinus className="text-gray-400 p-1" />
                                            ) : (
                                                <CirclePlus className="text-gray-400 p-1" />
                                            )}
                                            <p> Reports </p>
                                        </div>
                                    </Trigger>
                                    <Tree className="pl-9 flex flex-col bg-gray-600">
                                        <Item value="Report1">
                                            <ItemText>Report1</ItemText>
                                        </Item>
                                        <Item value="Report2">
                                            <ItemText>Report2</ItemText>
                                        </Item>
                                        <Item value="Report3">
                                            <ItemText>Report3</ItemText>
                                        </Item>
                                    </Tree>
                                </Item>
                                <Item value="Employee Maint.">
                                    <ItemText>Employee Maint.</ItemText>
                                </Item>
                            </Tree>
                        </Item>
                        <Item value="Human Resources">
                            <ItemText>Human Resources</ItemText>
                        </Item>
                    </Tree>
                </Item>
            </Tree>
        </Root>
    )
}