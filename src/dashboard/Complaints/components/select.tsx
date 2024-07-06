import React, { useState } from "react";

export interface SelectProps {
  id: string;
  defaultValue: string;
  children: (props: { value: string; onChange: (value: string) => void }) => React.ReactNode;
}

export interface SelectTriggerProps {
  children: React.ReactNode;
}

export interface SelectValueProps {
  placeholder: string;
  value: string;
}

export interface SelectContentProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  onChange: (value: string) => void;
}

export const Select = ({ id, defaultValue, children }: SelectProps) => {
  const [value, setValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setIsOpen(false); // Close the dropdown after selecting an item
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen); // Toggle the dropdown visibility
  };

  return (
    <div id={id} className="relative">
      <div onClick={toggleOpen} className="cursor-pointer">
        {children({ value, onChange: handleChange })}
      </div>
      {isOpen && (
        <div className="absolute bg-white shadow-lg rounded-lg mt-1 w-full z-10">
          {/* Render only the SelectContent when isOpen is true */}
          <SelectContent isOpen={isOpen}>
            <SelectItem value="low" onChange={handleChange}>Low</SelectItem>
            <SelectItem value="medium" onChange={handleChange}>Medium</SelectItem>
            <SelectItem value="high" onChange={handleChange}>High</SelectItem>
          </SelectContent>
        </div>
      )}
    </div>
  );
};

export const SelectTrigger = ({ children }: SelectTriggerProps) => {
  return (
    <div className="bg-gray-200 rounded-lg p-2 w-full text-left">
      {children}
    </div>
  );
};

export const SelectValue = ({ placeholder, value }: SelectValueProps) => {
  return (
    <span className="text-gray-700">
      {value ? value : placeholder}
    </span>
  );
};

export const SelectContent = ({ children, isOpen }: SelectContentProps) => {
  return isOpen ? (
    <div className="absolute bg-white shadow-lg rounded-lg mt-1 w-full z-10">
      {children}
    </div>
  ) : null;
};

export const SelectItem = ({ value, children, onChange }: SelectItemProps) => {
  return (
    <div
      className="cursor-pointer p-2 hover:bg-gray-100"
      onClick={() => onChange(value)}
    >
      {children}
    </div>
  );
};
