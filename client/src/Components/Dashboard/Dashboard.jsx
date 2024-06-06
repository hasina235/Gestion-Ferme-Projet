import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import Body from './Body/Body';
import '../../App.css';



const Dashboard = () => {
  
  return (

    <div className="dashboard flex">
        <div className="dashboardContainer flex">
          <Sidebar />
          <Body />
          
        </div>
    </div>

  )
}

export default Dashboard
