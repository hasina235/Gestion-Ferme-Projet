import React from 'react'
import Top from './Top Section/Top';
import Listing from './Listing Section/Listing';
import Activity from './Activity Section/Activity';
import '../Body Section/body.css';

const BodyGuard = () => {
  return (
    <div>
        <Top />
        <div className="bottom flex">
            <Listing />
            <Activity />
        </div>
    </div>
  )
}

export default BodyGuard
