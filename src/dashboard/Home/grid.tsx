import './grid.css';

export const Grid = () => {
  return (
    <div className="grid-container text-white font-bold text-2xl">
      <div className="grid-item">
        <h2>Polling Unit: PU001</h2>
        <p>State: Lagos</p>
        <p>LGA: Ikeja</p>
        <p>Position: President</p>
        <p>Candidate: Candidate A</p>
        <p>Votes: 100</p>
      </div>
      <div className="grid-item">
        <h2>Polling Unit: PU002</h2>
        <p>State: Lagos</p>
        <p>LGA: Lagos Island</p>
        <p>Position: Governor</p>
        <p>Candidate: Candidate B</p>
        <p>Votes: 150</p>
      </div>
      <div className="grid-item">
        <h2>Polling Unit: PU003</h2>
        <p>State: Abuja</p>
        <p>LGA: Municipal Area Council</p>
        <p>Position: President</p>
        <p>Candidate: Candidate C</p>
        <p>Votes: 120</p>
      </div>
      <div className="grid-item">
        <h2>Polling Unit: PU004</h2>
        <p>State: Kano</p>
        <p>LGA: Kano Municipal</p>
        <p>Position: Governor</p>
        <p>Candidate: Candidate D</p>
        <p>Votes: 80</p>
      </div>
    </div>
  );
}


