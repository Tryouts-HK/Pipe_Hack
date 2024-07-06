
export interface LabelProps {
    children: React.ReactNode;
    htmlFor?: string;
}

export const Label = ({ children, htmlFor }: LabelProps) => {
    return (
        <label className="text-gray-700" htmlFor={htmlFor}>
            {children}
        </label>
    );
}