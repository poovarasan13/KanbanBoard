import React,{useState} from 'react';



const ToggleSwitch = () => {
    const useToggle = (initialValue = false) => {
      const [value, setValue] = useState(initialValue);
    
      const toggle = () => setValue(prev => !prev);
    
      return [value, toggle];
    };
  const [isOn, toggle] = useToggle()

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={toggle}
        style={{
          padding: '10px 10px',
          backgroundColor: isOn ? 'green' : 'red',
          color: 'white',
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default ToggleSwitch;
