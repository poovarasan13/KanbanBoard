import React from 'react';
import ThemeApp from './Theme/ThemeApp';
import UserProvider from './Context/UserProvider';
import Menu from './Context/Menu';
import Footer from './Context/Footer';
import ToggleSwitch from './Button/ToggleSwitch';
import KanbanBoard from './KanbanBoard.jsx';
import { KanbanProvider } from './KanbanBoard.jsx/KanbanContext.jsx';


function App() {
  return (
    <>
     {/* <ThemeApp/> */}

     {/* <UserProvider> */}
      {/* <Menu></Menu> */}
      {/* <Footer/> */}
     {/* </UserProvider> */}
     {/* <ToggleSwitch/>  
                                   */}
      <KanbanProvider>
     <KanbanBoard/>
     </KanbanProvider>
     <div style={{justifyItems:"center",paddingBottom:"10px"}}>
          <p style={{color:"red",fontSize:"20px"}}>Made by Poovarasan</p>
     </div>
    </>
  );
}

export default App;
