import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectionContextType {
    highlighted: string | null;
    setHighlighted: (value: string) => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
    const [highlighted, setHighlighted] = useState<string | null>(null);

    return (
        <SelectionContext.Provider value={{ highlighted, setHighlighted }}>
            {children}
        </SelectionContext.Provider>
    );
};

export const useSelection = () => {
    const context = useContext(SelectionContext);
    if (!context) {
        throw new Error('useSelection must be used within a SelectionProvider');
    }
    return context;
};
