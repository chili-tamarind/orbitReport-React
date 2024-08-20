import styles from './styling.css';
import satData from './satData';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  
  const selectOrbit = (
    <div >{displaySats.map((sat, id) => {
      return (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
        );
      })}
    </div>
  );
  
  return (
    <div className="flex-container">
      {selectOrbit}
      <button onClick={() => setSat(satData)}>
        All Orbit
      </button>
      
    </div>
  );     
    
};

export default Buttons;