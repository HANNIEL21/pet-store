import React from 'react';
import { GiReceiveMoney } from "react-icons/gi"

const DashBoard = () => {
  return (
    <div className='container py-4'>
      <div className="row g-4">
        <div className="col-12">
          <h2 className='m-0 fw-bold text-primary'>Good <span>Day</span>, <span>Hanniel</span></h2>
          <p className='m-0 fw-bold'>Your Financial Report</p>
        </div>
        <div className="col-12">
          <div className="container-fluid p-0">
            <div className="row gap-4">
              <div className="col card border-0 bg-white shadow rounded-3 p-0">
                <div className="card-header">
                  <i className='m-0'><GiReceiveMoney className='m-0 h2' /></i>
                </div>
              </div>

              <div className="col card border-0 bg-white shadow rounded-3 d-flex align-items-center justify-content-evenly p-2 py-4"></div>

              <div className="col card border-0 bg-white shadow rounded-3 d-flex flex-column align-items-center justify-content-evenly p-2 py-4">
                <div className="w-50 d-flex justify-content-between align-items-center">
                  <i className='m-0'><GiReceiveMoney className='m-0 h2' /></i>
                  <h2 className='m-0 fw-bold'>0</h2>
                </div>
                <h3 className='m-0 fw-bold'>Sold</h3>
              </div>

              <div className="col card border-0 bg-white shadow rounded-3 d-flex flex-column align-items-center justify-content-evenly p-2 py-4">
                <div className="w-50 d-flex justify-content-between align-items-center">
                  <i className='m-0'><GiReceiveMoney className='m-0 h2' /></i>
                  <h2 className='m-0 fw-bold'>0</h2>
                </div>
                <h3 className='m-0 fw-bold'>Sold</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="container p-0">
            <div className="row gap-4">
              <div className="col-md-3 rounded-3 bg-primary py-5 shadow"></div>
              <div className="col rounded-3 bg-primary py-5">
                <h2 className='text-white'>All Items</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard