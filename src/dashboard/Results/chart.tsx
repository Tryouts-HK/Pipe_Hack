// interface ChartTooltipContentProps {
//   indicator: string;
//   content?: React.ReactNode;
// }

// const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({ indicator, content }) => {
//   return (
//     <div className="tooltip-content">
//       <span className={`indicator-${indicator}`}></span>
//       {content && <div className="tooltip-additional-content">{content}</div>}
//     </div>
//   );
// };



// export interface ChartTooltipProps {
//     content: ChartTooltipContentProps;
// }

// export const ChartTooltip: React.FC<ChartTooltipProps> = ({ content }) => {
//     return (
//         <div className="p-4 bg-white shadow rounded-lg">
//             <ChartTooltipContent {...content} />
//         </div>
//     );
// }

import React from 'react';

interface ChartTooltipContentProps {
    indicator: string;
    content?: React.ReactNode;
}

export const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({ indicator, content }) => {
    return (
        <div className="tooltip-content">
            <span className={`indicator-${indicator}`}></span>
            {content && <div className="tooltip-additional-content">{content}</div>}
        </div>
    );
};



interface ChartTooltipProps {
    cursor: boolean;
    content: ChartTooltipContentProps;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ cursor, content }) => {
    return (
        <div className={`tooltip ${cursor ? 'cursor-enabled' : 'cursor-disabled'}`}>
            <ChartTooltipContent {...content} />
        </div>
    );
};

interface ChartConfig {
    label: string;
    color: string;
}

interface ChartContainerProps {
    children: React.ReactNode;
    config: {
        desktop: ChartConfig;
        [key: string]: ChartConfig; // This allows for additional configurations if needed
    };
    className?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ children, config, className }) => {
    return (
        <div className={`chart-container ${className || ''}`} style={{ color: config.desktop.color }}>
            <h2>{config.desktop.label}</h2>
            {children}
        </div>
    );
};