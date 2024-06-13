import React from 'react'
import { Router } from 'react-router-dom';
import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar';
import Body from '../Dashboard/Components/Body Section/Body';

const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar />
        <Body />
    </div>
  )
}

export default Dashboard
