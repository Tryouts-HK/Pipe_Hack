import { useState, ReactNode } from "react";

export interface TabsProps {
  children: ReactNode;
  defaultValue?: string;
  onChange?: (newValue: string) => void;
}

export const Tabs = ({ children, defaultValue, onChange }: TabsProps) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  handleChange(defaultValue || "")

  return <div>
    <h1>{value}</h1>
    {children}
    </div>;
};

export interface TabsListProps {
  children: ReactNode;
}

export const TabsList = ({ children }: TabsListProps) => {
  return <ul className="flex border-b">{children}</ul>;
};

export interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  handleChange: (value: string) => void;
}

export const TabsTrigger = ({ children, value, handleChange }: TabsTriggerProps) => {
  return (
    <li
      className="mr-1 cursor-pointer p-2"
      onClick={() => handleChange(value)}
    >
      {children}
    </li>
  );
};

export interface TabsContentProps {
  children: ReactNode;
  value: string;
}

export const TabsContent = ({ children, value }: TabsContentProps) => {
  return <div className={`tab-content-${value}`}>{children}</div>;
};
