import styles from './styling.css';
import satData from './satData';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  
  const selectOrbit = (
    <button className="selectSatOrbit">{displaySats.map((sat, id) => {
      return (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
        );
      })}
    </button>
  );
  
  return (
    <div className="flex-container">
      {selectOrbit}

      <button className="allOrbit" onClick={() => setSat(satData)}>
        All Orbit
      </button>
      
    </div>
  );     
    
};

export default Buttons;