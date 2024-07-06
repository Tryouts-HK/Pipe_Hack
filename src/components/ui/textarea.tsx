
import { forwardRef, TextareaHTMLAttributes } from 'react'
import { cn } from '../tr/format'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
        <textarea
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