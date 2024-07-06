import { MouseEventHandler, ReactNode } from 'react';

interface DropdownMenuProps {
  children: ReactNode;
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  return <div className="relative">{children}</div>;
}


interface DropdownMenuTriggerProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export function DropdownMenuTrigger({ children, onClick }: DropdownMenuTriggerProps) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
}


interface DropdownMenuContentProps {
  children: ReactNode;
  isOpen: boolean;
  align?: 'start' | 'end';
  className?: string;
}

export function DropdownMenuContent({ children, isOpen, align = 'start', className = '' }: DropdownMenuContentProps) {
  return (
    isOpen && (
      <div className={`absolute ${align === 'end' ? 'right-0' : 'left-0'} mt-2 ${className}`}>
        <div className="bg-white border rounded shadow-lg">{children}</div>
      </div>
    )
  );
}



interface DropdownMenuLabelProps {
  children: ReactNode;
}

export function DropdownMenuLabel({ children }: DropdownMenuLabelProps) {
  return (
    <div className="px-4 py-2 text-sm text-gray-700 font-semibold">{children}</div>
  );
}


export function DropdownMenuSeparator() {
    return (
      <div className="border-t border-gray-200"></div>
    );
  }



interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function DropdownMenuItem({ children, onClick }: DropdownMenuItemProps) {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
    >
      {children}
    </div>
  );
}


