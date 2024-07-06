import React from "react";

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  defaultChecked?: boolean;
}

export const Checkbox = ({ label, checked, onChange, id, defaultChecked }: CheckboxProps) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        defaultChecked={defaultChecked}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <label htmlFor={id} className="ml-2 text-gray-700">
        {label}
      </label>
    </div>
  );
};
