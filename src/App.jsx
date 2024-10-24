// Write your Color component here
import { useState } from 'react';
import './index.css';

const Color = ({ color, selectedColor, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};


const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">{<div id="colors-list">
        <Color color="blue" setSelectedColor={setSelectedColor}/>
        <Color color="violet" setSelectedColor={setSelectedColor}/>
        <Color color="orange" setSelectedColor={setSelectedColor}/>
</div>}
</div>
</div>
  );
};

export default App;
