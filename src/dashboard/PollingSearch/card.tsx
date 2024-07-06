import { FC } from 'react';

interface CardProps {
  data: {
    status?: string;
    state_name?: string;
    state?: string;
    lga?: string;
    pu_name: string;
    local_government_name?: string;
    ward_name?: string;
    name?: string;
    delimitation?: string;
    location?: {
      latitude: number;
      longitude: number;
    };
    error?: string;
  };
}

const Card: FC<CardProps> = ({ data }) => {
  const {
    status,
    state_name,
    local_government_name,
    ward_name,
    lga,
    state,
    name,
    pu_name,
    delimitation,
    location,
    error,
  } = data;

  console.log('card data', data)
  console.log(
    data.delimitation,
    data.error
  )

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 ease-in-out">
      {status === 'success' || status === undefined ? (
        <>
          <p className="text-xl font-bold mb-4">Polling Unit Details</p>
          <div className="space-y-2">
            {state_name && <p className="text-gray-700"><strong>State:</strong> {state_name}</p>}
            {local_government_name && <p className="text-gray-700"><strong>LGA:</strong> {local_government_name}</p>}
            {ward_name && <p className="text-gray-700"><strong>Ward:</strong> {ward_name}</p>}
            {state && <p className="text-gray-700"><strong>State:</strong> {state_name}</p>}
            {lga && <p className="text-gray-700"><strong>LGA:</strong> {local_government_name}</p>}
            {pu_name && <p className="text-gray-700"><strong>PU Name:</strong> {ward_name}</p>}
            {name && <p className="text-gray-700"><strong>PU Name:</strong> {name}</p>}
            {delimitation && <p className="text-gray-700"><strong>Delimitation:</strong> {delimitation}</p>}
            {location && (
              <p className="text-gray-700">
                <strong>Location:</strong> Latitude: {location.latitude}, Longitude: {location.longitude}
              </p>
            )}
          </div>
        </>
      ) : (
        <p className="text-red-600 text-lg"><strong>Error:</strong> {error}</p>
      )}
    </div>
  );
};

export default Card;
