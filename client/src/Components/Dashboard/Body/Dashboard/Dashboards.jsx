import React from 'react'
import oeufs from "../../Assets/oeufs.jpg";
import { HiArrowRight } from "react-icons/hi2";

const Dashboards = () => {
  return (
    <>
    <div className="lineVideo flex">
                <div className="video-grid flex">
                  <video src="" autoPlay muted loop></video>
                  <span className='textH flex'>
                    Create and Shell Products here
                    <div className='proposal'>Your satisfaction is our proffesional</div>
                    <div className="button">
                      <button className='explore btn'>Explore More</button>
                      <button className='shell btn'>Top Sheller</button>
                    </div>                  
                  </span>
                  <img src={oeufs} />
                  <div className="text-eggs">
                    My stat
                  </div>
                  <div className="text-stat-today">
                    Today
                  </div>
                  <div className="value-stat-today">
                    4 Products 
                  </div>
                  <div className="text-stat-thisMonth">
                    This Month
                  </div>
                  <div className="value-stat-thisMonth">
                    145 Products
                  </div>
                </div>
                <div className="pictureSection">
                  picture
                </div>
              </div>
            
              <div className="card-product">
                  <div className="header flex">
                      <div className="titre">
                          <h3>My Listing</h3>
                      </div>
                      <div className="button-see-all flex">
                          <button className='btn flex'>See All
                              <HiArrowRight className='icon'/>
                          </button>
                      </div>
                  </div>

                  <div className="card flex">
                    <div className="card1 flex">
                      <nav className='name'>Poule</nav>
                    </div>
                    <div className="card1 flex">
                        <nav className='name'>Boeufs</nav>
                    </div>
                    <div className="card1 flex">
                        <nav className='name'>Oeufs</nav>
                    </div>
                    <div className="card1 flex">
                        <nav className='name flex'>viande</nav>
                    </div>
                  </div>

                  <div className="Last-Product-inserted">
                    <h3>Last Product Inserted</h3>
                    <table className='table-product'>
                      <tr>
                        <th>Name: </th>
                        <th>description:</th>
                        <th>price:</th>
                      </tr>
                      <tr>
                        <td>viande</td>
                        <td>viande de porc</td>
                        <td>14000 ar</td>
                      </tr>
                      <tr>
                        <td>viande</td>
                        <td>viande de porc</td>
                        <td>14000 ar</td>
                      </tr>
                    </table>
                  </div>
              </div>
    </>
    
  )
}

export default Dashboards
