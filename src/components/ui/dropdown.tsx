
export interface DropdownProps {
    children: React.ReactNode;
}


export const Dropdown = ({ children }: DropdownProps) => {
    return (
        <div className="relative inline-block text-left">
            {children}
        </div>
    )
}

export interface DropdownButtonProps {
    children: React.ReactNode;
}

export const DropdownButton = ({ children }: DropdownButtonProps) => {
    return (
        <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            {children}
        </button>
    )
}

export interface DropdownMenuProps {
    children: React.ReactNode;
}

export const DropdownMenu = ({ children }: DropdownMenuProps) => {
    return (
        <div className="absolute z-10 -ml-4 mt-3 transform w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            {children}
        </div>
    )
}

export interface DropdownMenuItemProps {
    children: React.ReactNode;
}

export const DropdownMenuItem = ({ children }: DropdownMenuItemProps) => {
    return (
        <div className="py-1">
            {children}
        </div>
    )
}

export interface DropdownMenuTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export const DropdownMenuTrigger = ({ children, asChild }: DropdownMenuTriggerProps) => {
    return (
        <div>
            {asChild ? children : <>{children}</>}
        </div>
    )
}

export interface DropdownMenuContentProps {
    children: React.ReactNode;
    align?: 'start' | 'end';
}

export const DropdownMenuContent = ({ children, align }: DropdownMenuContentProps) => {
    return (
        <div className={`py-1 ${align === 'end' ? 'origin-top-right right-0' : 'origin-top-left left-0'}`}>
            {children}
        </div>
    )
}

export interface DropdownMenuDividerProps {
    children: React.ReactNode;
}

export const DropdownMenuDivider = ({ children }: DropdownMenuDividerProps) => {
    return (
        <div>
            <hr className="my-1" />
            {children}
        </div>
    )
}

export interface DropdownMenuItemButtonProps {
    children: React.ReactNode;
}

export const DropdownMenuItemButton = ({ children }: DropdownMenuItemButtonProps) => {
    return (
        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            {children}
        </button>
    )
}

export interface DropdownMenuItemLinkProps {
    children: React.ReactNode;
    href: string;
}

export const DropdownMenuItemLink = ({ children, href }: DropdownMenuItemLinkProps) => {
    return (
        <a href={href} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            {children}

        </a>
    )
}

