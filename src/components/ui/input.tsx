
import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '../tr/format'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}


export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        return (
        <input
            ref={ref}
            className={cn(
            'block w-full px-4 py-2 text-sm border border-input rounded-lg',
            className
            )}
            {...props}
        />
        )
    }
    )