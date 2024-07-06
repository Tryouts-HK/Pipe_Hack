import React, { useState } from 'react';
import './crumbs.css'
import './mon.css'
import './pu.css'

import image1 from '../../../assets/16943175_img20230226wa0019_jpegb64d8cd3c69cfc6389bf4dff364d2a0d.jpeg'
import image2 from '../../../assets/16943189_img20230226wa0009_jpeg14c606f9b12a0f50127a614318e8f225.jpeg'
import image3 from '../../../assets/Fp1vBAuWwAERyPP.jpeg'
import image4 from '../../../assets/16994621_result2553471677589950thumb_jpeg1a60fb346071af82b7f6e37bbc94a3ad.jpeg'



interface State {
    id: string;
    name: string;
    lgas: LGA[];
}

interface LGA {
    id: string;
    name: string;
    wards: Ward[];
}

interface Ward {
    id: string;
    name: string;
    pus: PU[];
}

interface PU {
    id: string;
    name: string;
    details: {
        image?: string;
        description: string;
    }
}

interface PUCardProps {
    pu: PU;
}

const PUCard: React.FC<PUCardProps> = ({ pu }) => {
    return (
        <div className="pu-card">
            {pu.details.image && (
                <img src={pu.details.image} alt={pu.name} className="pu-card-image" />
            )}
            <div className="pu-card-content">
                <h2 className="pu-card-title">{pu.name}</h2>
                <p className="pu-card-description">{pu.details.description}</p>
            </div>
        </div>
    );
};

// Mock data
const states: State[] = [
    {
        id: '1',
        name: 'Abia',
        lgas: [
            {
                id: '1-1',
                name: 'Aba North',
                wards: [
                    {
                        id: '1-1-1',
                        name: 'Ward 1',
                        pus: [
                            { id: '1-1-1-1', name: 'PU 1', details: { image: image1, description: "bhgjhggjghjghhghhjghgjhgj"} },
                            { id: '1-1-1-2', name: 'PU 2', details: { image: image2, description: "bhgjhggjghjghhghhjghgjhgj"} },
                        ]
                    },
                    // Add more wards and PUs as needed
                ]
            },
            // Add more LGAs and wards as needed
        ]
    },
    {
        id: '2',
        name: 'Adamawa',
        lgas: [
            {
                id: '2-1',
                name: 'Demsa',
                wards: [
                    {
                        id: '2-1-1',
                        name: 'Ward 1',
                        pus: [
                            { id: '2-1-1-1', name: 'PU 1', details: { image: image3, description: "bhgjhggjghjghhghhjghgjhgj"} },
                            { id: '2-1-1-2', name: 'PU 2', details: { image: image4, description: "bhgjhggjghjghhghhjghgjhgj"} },
                        ]
                    },
                    // Add more wards and PUs as needed
                ]
            },
            // Add more LGAs and wards as needed
        ]
    },
    {
        id: '3',
        name: 'Akwa Ibom',
        lgas: [
            {
                id: '3-1',
                name: 'Uyo',
                wards: [
                    {
                        id: '3-1-1',
                        name: 'Ward A',
                        pus: [
                            { id: '3-1-1-1', name: 'PU 1', details: { image: image1, description: "bhgjhggjghjghhghhjghgjhgj"} },
                            { id: '3-1-1-2', name: 'PU 2', details: { image: image2, description: "bhgjhggjghjghhghhjghgjhgj"} },
                        ]
                    },
                    // Add more wards and PUs as needed
                ]
            },
            // Add more LGAs and wards as needed
        ]
    },
    // Continue adding more states, LGAs, wards, and PUs as needed
    // ...
    {
        id: '36',
        name: 'Yobe',
        lgas: [
            {
                id: '36-1',
                name: 'Damaturu',
                wards: [
                    {
                        id: '36-1-1',
                        name: 'Ward X',
                        pus: [
                            { id: '36-1-1-1', name: 'PU 1', details: { image: '', description: "bhgjhggjghjghhghhjghgjhgj"} },
                            { id: '36-1-1-2', name: 'PU 2', details: { image: '', description: "jhjvhhgjhjgghjhgjghjhghghgjhgj"} }
                        ]
                    },
                    // Add more wards and PUs as needed
                ]
            },
            // Add more LGAs and wards as needed
        ]
    },
];


// Breadcrumbs component

interface BreadcrumbsProps {
    crumbs: string[];
    activeIndex: number;
    onClick: (index: number) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs, activeIndex, onClick }) => {
    return (
        <div className="breadcrumbs">
            {crumbs.map((crumb, index) => (
                <span key={index}>
                    <button
                        className={`breadcrumb-button ${index === activeIndex ? 'active' : 'inactive'}`}
                        onClick={() => onClick(index)}
                    >
                        {crumb}
                    </button>
                    {index < crumbs.length - 1 && <span className="breadcrumb-separator"> / </span>}
                </span>
            ))}
        </div>
    );
};

export default Breadcrumbs;


// // Main monitoring component
export const Mon = () => {
    const [selectedState, setSelectedState] = useState(null as any);
    const [selectedLGA, setSelectedLGA] = useState(null as any);
    const [selectedWard, setSelectedWard] = useState(null as any);
    const [selectedPU, setSelectedPU] = useState(null as any);
    const [breadcrumbs, setBreadcrumbs] = useState(['States']);

    const handleBreadcrumbClick = (index: any) => {
        if (index === 0) {
            setSelectedState(null);
            setSelectedLGA(null);
            setSelectedWard(null);
            setSelectedPU(null);
            setBreadcrumbs(['States']);
        } else if (index === 1) {
            setSelectedLGA(null);
            setSelectedWard(null);
            setSelectedPU(null);
            setBreadcrumbs(breadcrumbs.slice(0, 2));
        } else if (index === 2) {
            setSelectedWard(null);
            setSelectedPU(null);
            setBreadcrumbs(breadcrumbs.slice(0, 3));
        } else if (index === 3) {
            setSelectedPU(null);
            setBreadcrumbs(breadcrumbs.slice(0, 4));
        }
    };

    const handleStateClick = (state: any) => {
        setSelectedState(state);
        setBreadcrumbs(['States', state.name]);
    };

    const handleLGAClick = (lga: any) => {
        setSelectedLGA(lga);
        setBreadcrumbs(['States', selectedState.name, lga.name]);
    };

    const handleWardClick = (ward: any) => {
        setSelectedWard(ward);
        setBreadcrumbs(['States', selectedState.name, selectedLGA.name, ward.name]);
    };

    const handlePUClick = (pu: any) => {
        setSelectedPU(pu);
        setBreadcrumbs(['States', selectedState.name, selectedLGA.name, selectedWard.name, pu.name]);
    };

    return (
        <div className="monitor-page">
            <Breadcrumbs activeIndex={breadcrumbs.length - 1} crumbs={breadcrumbs} onClick={handleBreadcrumbClick} />
            {!selectedState && (
                <div className="select-panel">
                    <h2>Select State</h2>
                    <div className="button-grid">
                        {states.map((state) => (
                            <button key={state.id} onClick={() => handleStateClick(state)}>
                                {state.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {selectedState && !selectedLGA && (
                <div className="select-panel">
                    <h2>Select LGA in {selectedState.name}</h2>
                    <div className="button-grid">
                        {selectedState.lgas.map((lga: any) => (
                            <button key={lga.id} onClick={() => handleLGAClick(lga)}>
                                {lga.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {selectedLGA && !selectedWard && (
                <div className="select-panel">
                    <h2>Select Ward in {selectedLGA.name}</h2>
                    <div className="button-grid">
                        {selectedLGA.wards.map((ward: any) => (
                            <button key={ward.id} onClick={() => handleWardClick(ward)}>
                                {ward.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {selectedWard && !selectedPU && (
                <div className="select-panel">
                    <h2>Select PU in {selectedWard.name}</h2>
                    <div className="button-grid">
                        {selectedWard.pus.map((pu: any) => (
                            <button key={pu.id} onClick={() => handlePUClick(pu)}>
                                {pu.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {selectedPU && (
                <PUCard pu={selectedPU} />
            )}
        </div>
    );
};



// const states: State[] = [
//   {
//     id: '1',
//     name: 'State 1',
//     lgas: [
//       {
//         id: '1-1',
//         name: 'LGA 1-1',
//         wards: [
//           {
//             id: '1-1-1',
//             name: 'Ward 1-1-1',
//             pus: [
//               { id: '1-1-1-1', name: 'PU 1-1-1-1', details: 'Details of PU 1-1-1-1' },
//               { id: '1-1-1-2', name: 'PU 1-1-1-2', details: 'Details of PU 1-1-1-2' },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   // Add more states, LGAs, wards, and PUs as needed
// ];

// export const Mon: React.FC = () => {
//   const [selectedState, setSelectedState] = useState<State | null>(null);
//   const [selectedLGA, setSelectedLGA] = useState<LGA | null>(null);
//   const [selectedWard, setSelectedWard] = useState<Ward | null>(null);
//   const [selectedPU, setSelectedPU] = useState<PU | null>(null);
//   const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['States']);

//   const handleBreadcrumbClick = (index: number) => {
//     switch (index) {
//       case 0:
//         setSelectedState(null);
//         setSelectedLGA(null);
//         setSelectedWard(null);
//         setSelectedPU(null);
//         setBreadcrumbs(['States']);
//         break;
//       case 1:
//         setSelectedLGA(null);
//         setSelectedWard(null);
//         setSelectedPU(null);
//         setBreadcrumbs([breadcrumbs[0]]);
//         break;
//       case 2:
//         setSelectedWard(null);
//         setSelectedPU(null);
//         setBreadcrumbs([breadcrumbs[0], breadcrumbs[1]]);
//         break;
//       case 3:
//         setSelectedPU(null);
//         setBreadcrumbs([breadcrumbs[0], breadcrumbs[1], breadcrumbs[2]]);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleStateClick = (state: State) => {
//     setSelectedState(state);
//     setBreadcrumbs(['States', state.name]);
//   };

//   const handleLGAClick = (lga: LGA) => {
//     setSelectedLGA(lga);
//     setBreadcrumbs(['States', selectedState!.name, lga.name]);
//   };

//   const handleWardClick = (ward: Ward) => {
//     setSelectedWard(ward);
//     setBreadcrumbs(['States', selectedState!.name, selectedLGA!.name, ward.name]);
//   };

//   const handlePUClick = (pu: PU) => {
//     setSelectedPU(pu);
//     setBreadcrumbs(['States', selectedState!.name, selectedLGA!.name, selectedWard!.name, pu.name]);
//   };

//   return (
//     <div className="monitor-page">
//       <Breadcrumbs crumbs={breadcrumbs} activeIndex={breadcrumbs.length - 1} onClick={handleBreadcrumbClick} />
//       {!selectedState && (
//         <div>
//           <h2>Select State</h2>
//           {states.map((state) => (
//             <button key={state.id} onClick={() => handleStateClick(state)}>
//               {state.name}
//             </button>
//           ))}
//         </div>
//       )}
//       {selectedState && !selectedLGA && (
//         <div>
//           <h2>Select LGA in {selectedState.name}</h2>
//           {selectedState.lgas.map((lga) => (
//             <button key={lga.id} onClick={() => handleLGAClick(lga)}>
//               {lga.name}
//             </button>
//           ))}
//         </div>
//       )}
//       {selectedLGA && !selectedWard && (
//         <div>
//           <h2>Select Ward in {selectedLGA.name}</h2>
//           {selectedLGA.wards.map((ward) => (
//             <button key={ward.id} onClick={() => handleWardClick(ward)}>
//               {ward.name}
//             </button>
//           ))}
//         </div>
//       )}
//       {selectedWard && !selectedPU && (
//         <div>
//           <h2>Select PU in {selectedWard.name}</h2>
//           {selectedWard.pus.map((pu) => (
//             <button key={pu.id} onClick={() => handlePUClick(pu)}>
//               {pu.name}
//             </button>
//           ))}
//         </div>
//       )}
//       {selectedPU && (
//         <div className="pu-details">
//           <h2>{selectedPU.name}</h2>
//           <p>{selectedPU.details}</p>
//           {/* Add more details and images as needed */}
//         </div>
//       )}
//     </div>
//   );
// };


