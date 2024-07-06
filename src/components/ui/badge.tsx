
import React from 'react';

export interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant  }) => {
    const colors = {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-500 text-white',
        success: 'bg-green-500 text-white',
        danger: 'bg-red-500 text-white',
        warning: 'bg-yellow-500 text-white',
        info: 'bg-blue-500 text-white',
    };

    return (
        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${colors[variant!]}`}>
            {children}
        </span>
    );
}