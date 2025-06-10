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
     <div style={{justifyItems:"center"}}>
          <h3 style={{color:"red"}}>Made by Poovarasan</h3>
     </div>
    </>
  );
}

export default App;
