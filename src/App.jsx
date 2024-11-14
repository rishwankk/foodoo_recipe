import React from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import Home from './components/Home'; // Assuming you have a Home component

const App = () => {
  return (
    <div className=" w-full h-full">


    <div className="bg-[#FCF4F1] h-screen flex flex-col   ">
   
      <Header  />

      <div className="flex  mt-[80px]"> 
     
        <aside className="w-[200px] fixed top-[80px] left-0 bottom-5 overflow-y-auto"> 
          <Sidebar />
        </aside>

        <main className="flex-1 ml-[200px] mt-[0px] overflow-auto">
          <Home />
        </main>
      </div>
    </div>
    </div>
  );
};

export default App;
