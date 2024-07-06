import { forwardRef } from 'react';
import classNames from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'outline'
    | 'ghost'
    | 'link'
    | 'text'
    | 'icon'
    | 'icon-button';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          'block w-full px-4 py-2 text-sm border border-input rounded-lg',
          {
            'bg-primary text-white': variant === 'primary',
            'bg-secondary text-white': variant === 'secondary',
            'bg-danger text-white': variant === 'danger',
            'bg-success text-white': variant === 'success',
            'bg-warning text-white': variant === 'warning',
            'bg-info text-white': variant === 'info',
            'border-primary text-primary': variant === 'outline',
            'border-secondary text-secondary': variant === 'ghost',
            'border-danger text-danger': variant === 'link',
            'border-success text-success': variant === 'text',
            'border-warning text-warning': variant === 'icon',
            'border-info text-info': variant === 'icon-button',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button'; // To avoid forwardRef name issues
