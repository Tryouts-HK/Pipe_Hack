
export interface AvatarProps {
    children: React.ReactNode
    className?: string
}

export const Avatar = ({ children, className }: AvatarProps) => {
    return (
        <div className={`flex items-center ${className}`}>
            {children}
        </div>
    )
}

export interface AvatarImageProps {
    src: string
}

export const AvatarImage = ({ src }: AvatarImageProps) => {
    return (
        <img
            src={src}
            alt="avatar"
            className="h-10 w-10 rounded-full"
        />
    )
}

export interface AvatarFallbackProps {
    children: React.ReactNode
}

export const AvatarFallback = ({ children }: AvatarFallbackProps) => {
    return (
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
            {children}
        </div>
    )
}
