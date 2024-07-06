import React from 'react';

// Define the type for the component props, including className
interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

// Component definitions
export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`p-4 bg-white shadow rounded-lg ${className || ''}`}>{children}</div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`text-lg font-medium ${className || ''}`}>{children}</div>;
};

export const CardBody: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`mt-2 text-sm text-gray-600 ${className || ''}`}>{children}</div>;
};

export const CardFooter: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`mt-4 text-sm text-gray-600 ${className || ''}`}>{children}</div>;
};

export const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`mt-2 ${className || ''}`}>{children}</div>;
};

export const CardActions: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`mt-4 flex justify-end ${className || ''}`}>{children}</div>;
};


export const CardTitle: React.FC<CardProps> = ({ children, className }) => {
  return <h3 className={`text-lg font-semibold ${className || ''}`}>{children}</h3>;
}

interface CardDescriptionProps {
  description: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ description }) => {
  return (
    <p className="card-description">
      {description}
    </p>
  );
};

